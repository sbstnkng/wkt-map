import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ItemType, MapItem } from '../../../types/Item';
import styles from './item.module.css';
import {
  DELETE_ITEM,
  TOGGLE_ITEM_VISIBILITY,
} from '../../../redux/actionTypes';

type Props = {
  item: MapItem;
  handleEdit: (item: MapItem) => void;
};

export const Item: React.FC<Props> = ({ item, handleEdit }: Props) => {
  const dispatch = useDispatch();
  const [showControls, setShowControls] = useState(false);
  const { id, label, type, isVisible }: MapItem = item;
  const faIconClass =
    type === ItemType.POINT ? 'fa-map-marker' : 'fa-draw-polygon';

  const handleToggleVisibility = () => {
    dispatch({ type: TOGGLE_ITEM_VISIBILITY, payload: { id } });
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_ITEM, payload: { id } });
  };

  return (
    <div
      className={`${styles.container} ${
        !isVisible ? styles.containerInvisible : ''
      }`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className={styles.icon}>
        <i className={`fas ${faIconClass}`}></i>
      </div>
      <div className={styles.label}>
        <strong>{label}</strong>
      </div>
      {showControls && (
        <div className={styles.controlPanel}>
          <i
            className={`${
              isVisible ? styles.visible : styles.invisible
            } p-2 fas fa-eye${isVisible ? '' : '-slash'}`}
            onClick={handleToggleVisibility}
          ></i>
          <i
            className={`${styles.edit} p-2 fas fa-pen`}
            onClick={() => handleEdit(item)}
          ></i>
          <i
            className={`${styles.delete} p-2 fas fa-trash`}
            onClick={handleDelete}
          ></i>
        </div>
      )}
    </div>
  );
};
