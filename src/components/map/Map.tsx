import React from 'react';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { MapItem } from '../../types/Item';
import { State } from '../../types/Redux';
import providers from './providers';
import styles from './map.module.css';
import { MapItems } from './MapItems';

export const Map: React.FC = () => {
  const items: MapItem[] = useSelector((state: State) => state.items);

  return (
    <MapContainer
      center={[51.505, 10.09]}
      zoom={4}
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

      <MapItems items={items} />
    </MapContainer>
  );
};
