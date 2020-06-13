import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { parseWktToGeoJson } from '../../utils/wktParser';

const EditModal = ({ id, show, handleClose, handleSave, editShape }) => {
  const [label, setLabel] = useState('');
  const [wkt, setWkt] = useState('');
  const shapeInput = useRef();

  useEffect(() => {
    setLabel(editShape.label || `Shape-${id}`);
    setWkt(editShape.wkt);

    if (shapeInput.current) {
      shapeInput.current.focus();
    }
  }, [editShape, id, show]);

  const resetStates = () => {
    setLabel('');
    setWkt('');
  };

  const calculateCenterPoint = (geoJson) => {
    const bbox = geoJson.bbox();
    const lon = (bbox[0] + bbox[2]) / 2;
    const lat = (bbox[1] + bbox[3]) / 2;

    return [lat, lon];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const geoJson = parseWktToGeoJson(wkt);
    handleSave({
      id,
      label,
      wkt,
      geoJson: geoJson,
      color: 'teal',
      centerPoint: calculateCenterPoint(geoJson),
      visible: true,
    });

    resetStates();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Shape</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formBasicLabel">
            <Form.Label column sm={2}>
              Label
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Shape Label"
                value={label}
                onChange={(event) => setLabel(event.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicCoordinates">
            <Form.Label column sm={2}>
              Geometry
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                ref={shapeInput}
                as="textarea"
                rows="6"
                placeholder="WKT Coordinates"
                value={wkt}
                onChange={(event) => setWkt(event.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="primary" type="submit">
                Save shape
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

EditModal.propTypes = {
  show: PropTypes.bool,
  id: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  editShape: PropTypes.object,
};

export default EditModal;
