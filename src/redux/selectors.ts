import { MapItem, UUID } from '../types/Item';

interface Store {
  items: MapItem[];
}

const getItemState = (store: Store) => store.items;

export const getItemList = (store: Store) => getItemState(store);

export const getItemById = (store: Store, id: UUID) =>
  getItemState(store).filter((item) => item.id === id);
