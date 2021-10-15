import React from 'react';
import { useSelector } from 'react-redux';
import { MapItem } from '../../types/Item';
import { State } from '../../types/Redux';
import AddButtton from './buttons';
import Item from './item';
import styles from './panel.module.css';

export const Panel: React.FC = () => {
  const items: MapItem[] = useSelector((state: State) => state.items);

  const handleButtonClick = () => {
    alert('Not implemented yet!');
  };

  return (
    <div className={styles.container}>
      <AddButtton onClick={handleButtonClick} />
      {items.map((item: MapItem) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
