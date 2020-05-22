import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from './shapeItem.module.css';

const ShapeItem = ({ id, shape, deleteItem }) => {
  const { label, wkt } = shape;
  return (
    <Card body className="my-2">
      <Row className="align-items-center">
        <Col className="text-truncate">{label}</Col>
        <Col className="text-truncate" xs={8}>
          {wkt}
        </Col>
        <Col className={styles.actions}>
          <i className="delete fas fa-trash" style={{ color: '#e83e8c' }} onClick={() => deleteItem(id)}></i>
          <i className="edit fas fa-edit" style={{ color: '#28a745' }}></i>
          <i className="info fas fa-info" style={{ color: '#17a2b8' }}></i>
        </Col>
      </Row>
    </Card>
  );
};

ShapeItem.propTypes = {
  id: PropTypes.number,
  shape: PropTypes.shape({
    label: PropTypes.string,
    geoJson: PropTypes.object,
    wkt: PropTypes.string,
    color: PropTypes.string,
    centerPoint: PropTypes.arrayOf(PropTypes.number),
  }),
  deleteItem: PropTypes.func.isRequired,
};

export default ShapeItem;
