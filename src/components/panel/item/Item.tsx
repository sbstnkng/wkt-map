import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ItemType, MapItem } from '../../../types/Item';
import styles from './item.module.css';
import {
  DELETE_ITEM,
  TOGGLE_ITEM_VISIBILITY,
} from '../../../redux/actionTypes';

type Props = MapItem;

export const Item: React.FC<Props> = ({
  id,
  label,
  type,
  isVisible,
}: Props) => {
  const dispatch = useDispatch();
  const [showControls, setShowControls] = useState(false);
  const faIconClass =
    type === ItemType.POINT ? 'fa-map-marker' : 'fa-draw-polygon';

  const handleToggleVisibility = () => {
    dispatch({ type: TOGGLE_ITEM_VISIBILITY, payload: { id } });
  };

  const handleEdit = () => {
    alert('Not implemented yet!');
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_ITEM, payload: { id } });
  };

  return (
    <div
      className={styles.container}
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
            onClick={handleEdit}
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
