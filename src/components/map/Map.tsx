import React from 'react';
import { LatLngExpression } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
} from 'react-leaflet';
import providers from './providers';
import styles from './map.module.css';

const center: LatLngExpression = [52.52101521990809, 13.409175396469893];

export const Map: React.FC = () => {
  return (
    <MapContainer
      center={center}
      zoom={12}
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
    </MapContainer>
  );
};
