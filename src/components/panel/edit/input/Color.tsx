import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Color: React.FC = () => {
  return (
    <Form.Group as={Row} controlId="formBasicLabel" className="mt-2">
      <Form.Label column sm={2}>
        Color
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          type="color"
          defaultValue="#40E0D0"
          title="Choose your color"
          disabled
        />
      </Col>
    </Form.Group>
  );
};
