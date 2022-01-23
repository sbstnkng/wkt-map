import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  color: string;
  onChange: (color: string) => void;
}

export const Color: React.FC<Props> = ({ color, onChange }) => {
  return (
    <Form.Group as={Row} controlId="formBasicLabel" className="mt-2">
      <Form.Label column sm={2}>
        Color
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          type="color"
          value={color}
          title="Choose your color"
          onChange={(event) => onChange(event.target.value)}
        />
      </Col>
    </Form.Group>
  );
};
