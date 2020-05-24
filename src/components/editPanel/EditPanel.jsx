import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ShapeItem from './ShapeItem';
import EditModal from './EditModal';
import Section from '../section';
import { getStringOrDefault } from '../../utils/stringUtils';
import styles from './editPanel.module.css';

const renderShapeItems = (shapes, deleteItem, updateItem) => {
  return shapes.map((shape, index) => (
    <ShapeItem key={index} id={index} shape={shape} deleteItem={deleteItem} updateItem={updateItem} />
  ));
};

const EditPanel = ({ shapes, updateShapes }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (newShape) => {
    handleClose();
    updateShapes([...shapes, { ...newShape, label: getStringOrDefault(newShape.label, `Shape-${shapes.length + 1}`) }]);
  };

  const deleteItem = (shapeIndex) => {
    const newShapes = shapes.filter((shape, index) => index !== shapeIndex);
    updateShapes(newShapes);
  };

  const updateItem = (shapeIndex, newShape) => {
    const newShapes = [...shapes];
    newShapes[shapeIndex] = newShape;
    updateShapes(newShapes);
  };

  return (
    <Container>
      <Section>
        <div className={styles.title}>
          <span className="text-muted">Add WKT formatted shapes</span>
          <Button variant="primary" size="sm" onClick={handleShow}>
            <i className="fas fa-plus"></i> New
          </Button>
        </div>
        <div className="pt-3">{renderShapeItems(shapes, deleteItem, updateItem)}</div>
      </Section>

      <EditModal show={show} handleClose={handleClose} handleSave={handleSave} />
    </Container>
  );
};

EditPanel.propTypes = {
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
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
