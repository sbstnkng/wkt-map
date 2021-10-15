import { v4 as uuidv4 } from 'uuid';
import { ItemType } from '../types/Item';
import { State, Action } from '../types/Redux';
import {
  ADD_ITEM,
  MODIFY_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM_VISIBILITY,
} from './actionTypes';

const initialState: State = {
  items: [
    {
      id: uuidv4(),
      label: 'Berlin',
      type: ItemType.POLYGON,
      isVisible: true,
    },
  ],
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { item } = action.payload;
      return { items: [...state.items, { ...item, id: uuidv4() }] };
    }
    case MODIFY_ITEM: {
      const { id, item } = action.payload;
      return {
        items: state.items.map((element) =>
          element.id === id ? item : element
        ),
      };
    }
    case DELETE_ITEM: {
      const { id } = action.payload;
      return { items: state.items.filter((element) => element.id !== id) };
    }
    case TOGGLE_ITEM_VISIBILITY: {
      const { id } = action.payload;
      return {
        items: state.items.map((element) =>
          element.id === id
            ? { ...element, isVisible: !element.isVisible }
            : element
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
