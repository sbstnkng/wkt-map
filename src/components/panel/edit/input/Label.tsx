import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Label: React.FC<Props> = ({ text, onChange }) => {
  return (
    <Form.Group as={Row} controlId="formBasicLabel">
      <Form.Label column sm={2}>
        Label
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          type="text"
          placeholder="Shape Label"
          value={text}
          onChange={onChange}
        />
      </Col>
    </Form.Group>
  );
};
