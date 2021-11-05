export type UUID = string;

export enum ItemType {
  POINT = 'Point',
  MULTIPOINT = 'MultiPoint',
  LINESTRING = 'LineString',
  POLYGON = 'Polygon',
}

export interface MapItem {
  id: UUID;
  label: string;
  type: ItemType;
  isVisible: boolean;
  color: string;
  geoJson?: any;
}
