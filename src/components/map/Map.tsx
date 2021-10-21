import React, { useEffect, useState } from 'react';
import { LatLngBoundsExpression } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
  GeoJSON,
  Popup,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { MapItem } from '../../types/Item';
import { State } from '../../types/Redux';
import providers from './providers';
import styles from './map.module.css';

const calculateBounds = (items: MapItem[]): LatLngBoundsExpression => {
  const bounds = items
    .filter((item: MapItem) => item.isVisible)
    .map((shape) => {
      const { coordinates, type } = shape.geoJson;
      if (type === 'Point') {
        return [coordinates[1], coordinates[0]];
      } else if (type === 'LineString') {
        return coordinates.map((coords: any) => [coords[1], coords[0]]);
      } else {
        return coordinates[0].map((coords: any) => [coords[1], coords[0]]);
      }
    });

  return bounds;
};

export const Map: React.FC = () => {
  const items: MapItem[] = useSelector((state: State) => state.items);
  const [boundaries, setBoundaries] = useState<LatLngBoundsExpression>(
    calculateBounds(items)
  );

  useEffect(() => {
    console.log('calculate boundaries');
    setBoundaries(calculateBounds(items));
  }, [items]);

  const createMapItems = (mapItems: MapItem[]) => {
    return mapItems
      .filter((item) => item.isVisible)
      .map((item) => (
        <GeoJSON key={item.id} data={item.geoJson}>
          <Popup>
            <strong>{item.label}</strong>
          </Popup>
        </GeoJSON>
      ));
  };

  return (
    <MapContainer
      bounds={boundaries}
      minZoom={2}
      scrollWheelZoom={true}
      className={styles.mapContainer}
    >
      <ScaleControl position="bottomleft" />
      <LayersControl position="topleft">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer {...providers.OpenStreetMap} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Stadia Map">
          <TileLayer {...providers.Stadia} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Stamen Watercolor">
          <TileLayer {...providers.Stamen} />
        </LayersControl.BaseLayer>
      </LayersControl>

      {createMapItems(items)}
    </MapContainer>
  );
};
