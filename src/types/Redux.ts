import { UUID, MapItem } from './Item';

export interface State {
  items: MapItem[];
}

export interface Payload {
  id: UUID;
  item: MapItem;
}

export interface Action {
  type: string;
  payload: Payload;
}
