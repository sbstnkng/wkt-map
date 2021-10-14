import React from 'react';
import AddButtton from './buttons';
import styles from './panel.module.css';

export const Panel: React.FC = () => {
  return (
    <div className={styles.container}>
      <AddButtton onClick={() => alert('Button has been clicked!')} />
    </div>
  );
};
