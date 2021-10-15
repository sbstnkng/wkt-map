import React, { useState } from 'react';
import AddButtton from './buttons';
import Item from './item';
import { ItemType } from '../../types/ItemTypes';
import styles from './panel.module.css';

export const Panel: React.FC = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  const handleButtonClick = () => {
    setItems([
      ...items,
      <Item
        id={items.length}
        label={`Item ${items.length + 1}`}
        type={items.length % 2 === 0 ? ItemType.POINT : ItemType.POLYGON}
        isVisible={items.length % 2 !== 0}
      />,
    ]);
  };

  return (
    <div className={styles.container}>
      <AddButtton onClick={handleButtonClick} />
      {items.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
    </div>
  );
};
