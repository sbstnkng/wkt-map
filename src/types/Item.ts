export type UUID = string;

export enum ItemType {
  POINT,
  POLYGON,
}

export interface MapItem {
  id: UUID;
  label: string;
  type: ItemType;
  isVisible: boolean;
}
