import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MapItem } from '../../../types/Item';
import { wktToGeoJson, geoJsonToWkt } from '../../../utils/wktParser';

interface Props {
  show: boolean;
  item: MapItem | null;
  handleClose: () => void;
}

export const EditModal: React.FC<Props> = ({
  show,
  item,
  handleClose,
}: Props) => {
  const [label, setLabel] = useState('');
  const [wkt, setWkt] = useState<string | undefined>(undefined);
  const [isValid, setValid] = useState<boolean>(true);
  const shapeInput: React.Ref<any> = useRef();
  const title = item === null ? 'Add Coordinates' : 'Edit Coordinates';

  useEffect(() => {
    setLabel(item?.label || 'New Shape');
    setWkt(geoJsonToWkt(item?.geoJson));

    if (shapeInput.current) {
      shapeInput.current.focus();
    }
  }, [item, show]);

  const validateWktShape = (wkt: string) => {
    let isValid = false;
    try {
      isValid = wktToGeoJson(wkt) !== undefined;
    } catch (error) {
      isValid = false;
    }

    setValid(isValid);
  };

  const resetStates = () => {
    setLabel('');
    setWkt('');
  };

  const handleSave = (e: any) => {
    e.preventDefault();

    if (isValid) {
      const geoJson = wktToGeoJson(wkt as string);
      handleClose();

      resetStates();
    }
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={handleSave}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

          <Form.Group
            as={Row}
            controlId="formBasicCoordinates"
            className="mt-3"
          >
            <Form.Label column sm={2}>
              Geometry
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                ref={shapeInput}
                as="textarea"
                rows={6}
                placeholder="WKT Coordinates"
                isInvalid={!isValid}
                value={wkt}
                onChange={(event) => setWkt(event.target.value)}
                onBlur={(event) => validateWktShape(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide valid WKT data.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" disabled={wkt === undefined}>
            <i className="fas fa-save"></i>
            <span className="mx-2">Save</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
