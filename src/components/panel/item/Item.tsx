import React, { useState } from 'react';
import { ItemType } from '../../../types/ItemTypes';
import styles from './item.module.css';

type Props = {
  id: number;
  label: string;
  type: ItemType;
  isVisible: boolean;
};

export const Item: React.FC<Props> = ({ label, type, isVisible }: Props) => {
  const [showControls, setShowControls] = useState(false);
  const faIconClass =
    type === ItemType.POINT ? 'fa-map-marker' : 'fa-draw-polygon';

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
          ></i>
          <i className={`${styles.edit} p-2 fas fa-pen`}></i>
          <i className={`${styles.delete} p-2 fas fa-trash`}></i>
        </div>
      )}
    </div>
  );
};
