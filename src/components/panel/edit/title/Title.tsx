import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

interface Props {
  showAsEdit: boolean;
}

export const Title: React.FC<Props> = ({ showAsEdit }) => {
  const [title, setTitle] = useState<string>('');
  const [icon, setIcon] = useState<ReactNode>(<></>);

  useEffect(() => {
    if (showAsEdit) {
      setTitle('Edit Coordinates');
      setIcon(<i className="fas fa-edit"></i>);
    } else {
      setTitle('Add Coordinates');
      setIcon(<i className="fas fa-plus"></i>);
    }
  }, [showAsEdit]);

  return (
    <Modal.Title>
      {icon}
      <span className="px-2">{title}</span>
    </Modal.Title>
  );
};
