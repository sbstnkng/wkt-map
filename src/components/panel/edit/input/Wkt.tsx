import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GeoJSON } from '../../../../types/Geo';
import { wktToGeoJson, geoJsonToWkt } from '../../../../utils/wktParser';

interface Props {
  geoJson: GeoJSON | undefined;
  isValid: boolean;
  saveGeoJson: (geoJson: GeoJSON | undefined) => void;
}

export const Wkt: React.FC<Props> = ({ geoJson, isValid, saveGeoJson }) => {
  const [wkt, setWkt] = useState<string>('');

  useEffect(() => {
    if (geoJson) {
      setWkt(geoJsonToWkt(geoJson) || '');
    }
  }, [geoJson]);

  const handleOnBlur = () => {
    try {
      saveGeoJson(wktToGeoJson(wkt));
    } catch (error) {
      saveGeoJson(undefined);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWkt(event.target.value.toUpperCase());
  };

  return (
    <Form.Group as={Row} controlId="formBasicCoordinates" className="mt-3">
      <Form.Label column sm={2}>
        Geometry
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="WKT Coordinates"
          isInvalid={!isValid}
          value={wkt}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide valid WKT data.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};
