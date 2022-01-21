import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  ref: React.Ref<any>;
  wkt: string | undefined;
  isValid: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Wkt: React.FC<Props> = ({
  wkt,
  ref,
  isValid,
  onChange,
  onBlur,
}) => {
  return (
    <Form.Group as={Row} controlId="formBasicCoordinates" className="mt-3">
      <Form.Label column sm={2}>
        Geometry
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          ref={ref}
          as="textarea"
          rows={6}
          placeholder="WKT Coordinates"
          isInvalid={!isValid}
          value={wkt}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Form.Control.Feedback type="invalid">
          Please provide valid WKT data.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};
