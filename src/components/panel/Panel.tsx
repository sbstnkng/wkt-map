import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MapItem } from '../../types/Item';
import { State } from '../../types/Redux';
import AddButtton from './buttons';
import Item from './item';
import EditModal from './edit';
import styles from './panel.module.css';

export const Panel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<MapItem | null>(null);
  const items: MapItem[] = useSelector((state: State) => state.items);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleItemEdit = (item: MapItem) => {
    setItemToEdit(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setItemToEdit(null);
  };

  return (
    <div className={styles.container}>
      <AddButtton onClick={handleButtonClick} />
      {items.map((item: MapItem) => (
        <Item key={item.id} item={item} handleEdit={handleItemEdit} />
      ))}
      <EditModal show={showModal} item={itemToEdit} handleClose={handleClose} />
    </div>
  );
};
