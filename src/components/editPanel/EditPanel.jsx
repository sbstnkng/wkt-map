import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ShapeItem from './ShapeItem';
import EditModal from './EditModal';
import Section from '../section';
import styles from './editPanel.module.css';

const EditPanel = ({ shapes, updateShapes }) => {
  const [show, setShow] = useState(false);
  const [editShape, setEditShape] = useState({});

  const handleClose = () => {
    setShow(false);
    setEditShape({});
  };
  const handleShow = (shape = {}) => {
    setEditShape(shape);
    setShow(true);
  };

  const handleSave = (newShape) => {
    handleClose();
    updateItem(newShape);
  };

  const deleteItem = (shape) => {
    const newShapes = shapes.filter((item) => item !== shape);
    updateShapes(newShapes);
  };

  const updateItem = (newShape) => {
    const shapeExists = shapes.find((item) => item.id === newShape.id);
    let newShapes = [];

    if (shapeExists) {
      newShapes = shapes.map((item) => (item.id === newShape.id ? newShape : item));
    } else {
      newShapes = [...shapes, newShape];
    }
    updateShapes(newShapes);
  };

  const renderShapeItems = () => {
    return shapes.map((shape) => (
      <ShapeItem
        key={shape.id}
        shape={shape}
        deleteItem={deleteItem}
        updateItemVisibility={updateItem}
        editItem={(item) => handleShow(item)}
      />
    ));
  };

  return (
    <Container>
      <Section>
        <div className={styles.title}>
          <span className="text-muted">Add WKT formatted shapes</span>
          <Button variant="primary" size="sm" onClick={() => handleShow()}>
            <i className="fas fa-plus"></i> New
          </Button>
        </div>
        <div className="pt-3">{renderShapeItems()}</div>
      </Section>

      <EditModal
        show={show}
        handleClose={handleClose}
        handleSave={handleSave}
        id={editShape.id || shapes.length + 1}
        editShape={editShape}
      />
    </Container>
  );
};

EditPanel.propTypes = {
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      geoJson: PropTypes.object,
      wkt: PropTypes.string,
      color: PropTypes.string,
      centerPoint: PropTypes.arrayOf(PropTypes.number),
      visible: PropTypes.bool,
    })
  ).isRequired,
  updateShapes: PropTypes.func.isRequired,
};

export default EditPanel;
