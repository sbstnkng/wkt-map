import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from './shapeItem.module.css';

const ShapeItem = ({ shape, deleteItem, updateItemVisibility, editItem }) => {
  const { label, wkt } = shape;

  const updateVisibility = () => {
    updateItemVisibility({ ...shape, visible: !shape.visible });
  };

  const renderVisibility = (shape) => {
    let color = '#17a2b8';
    let icon = 'fa-eye';

    if (!shape.visible) {
      color = '#6c757d';
      icon = 'fa-eye-slash';
    }

    return <i className={`fas ${icon}`} style={{ color }} onClick={updateVisibility}></i>;
  };

  return (
    <Card body className="my-2">
      <Row className="align-items-center">
        <Col className="text-truncate">{label}</Col>
        <Col className="text-truncate" xs={8}>
          {wkt}
        </Col>
        <Col className={styles.actions}>
          <i className="delete fas fa-trash" style={{ color: '#e83e8c' }} onClick={() => deleteItem(shape)}></i>
          <i className="edit fas fa-edit" style={{ color: '#28a745' }} onClick={() => editItem(shape)}></i>
          {renderVisibility(shape)}
        </Col>
      </Row>
    </Card>
  );
};

ShapeItem.propTypes = {
  id: PropTypes.number,
  shape: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    geoJson: PropTypes.object,
    wkt: PropTypes.string,
    color: PropTypes.string,
    centerPoint: PropTypes.arrayOf(PropTypes.number),
    visible: PropTypes.bool,
  }),
  deleteItem: PropTypes.func.isRequired,
  updateItemVisibility: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default ShapeItem;
