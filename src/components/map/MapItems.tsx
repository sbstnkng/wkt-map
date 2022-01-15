import React, { useEffect } from 'react';
import {
  LatLng,
  LatLngBoundsExpression,
  LatLngExpression,
  Map,
  latLngBounds,
  LatLngBounds,
} from 'leaflet';
import { GeoJSON, Popup, useMap } from 'react-leaflet';
import hash from 'object-hash';
import { ItemType, MapItem } from '../../types/Item';

interface Props {
  items: MapItem[];
}

const getCoordinates = (item: MapItem): LatLngExpression[] => {
  const coordinates = item.geoJson ? item.geoJson.coordinates : [];

  switch (item.type) {
    case ItemType.POINT:
      return [new LatLng(coordinates[1], coordinates[0])];
    case ItemType.LINESTRING:
    case ItemType.MULTIPOINT:
      return coordinates.map(
        (coordinate: number[]) => new LatLng(coordinate[1], coordinate[0])
      );
    case ItemType.POLYGON:
      return coordinates
        .flat()
        .map(
          (coordinate: number[]) => new LatLng(coordinate[1], coordinate[0])
        );
    default:
      return [];
  }
};

export const MapItems: React.FC<Props> = ({ items }) => {
  const map: Map = useMap();

  useEffect(() => {
    const bounds: LatLngBoundsExpression = [];
    items
      .filter((it) => it.geoJson)
      .filter((it) => it.isVisible)
      .forEach((it) => {
        const coordinates: LatLngExpression[] = getCoordinates(it);
        const tmpBounds: LatLngBounds = latLngBounds(coordinates);
        bounds.push(tmpBounds as any);
      });

    if (bounds.length > 0) {
      map.fitBounds(bounds);
    }
  }, [items, map]);

  return (
    <>
      {items
        .filter((item) => item.isVisible)
        .map((item) => (
          <GeoJSON key={hash(item)} data={item.geoJson}>
            <Popup>
              <strong>{item.label}</strong>
            </Popup>
          </GeoJSON>
        ))}
    </>
  );
};
