import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './addButton.module.css';

type Props = {
  onClick: () => void;
};

export const AddButtton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={onClick}
      className={styles.addButton}
    >
      <i className="fas fa-plus"></i>
    </Button>
  );
};
