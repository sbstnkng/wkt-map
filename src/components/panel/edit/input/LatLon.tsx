import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GeoJSON } from '../../../../types/Geo';
import { ItemType } from '../../../../types/Item';

interface Props {
  geoJson: GeoJSON | undefined;
  saveGeoJson: (geoJson: GeoJSON | undefined) => void;
}

export const LatLon: React.FC<Props> = ({ geoJson, saveGeoJson }) => {
  const [lat, setLat] = useState<string>('');
  const [lon, setLon] = useState<string>('');

  useEffect(() => {
    if (geoJson?.type === ItemType.POINT) {
      setLon(geoJson.coordinates[0].toString());
      setLat(geoJson.coordinates[1].toString());
    }
  }, [geoJson]);

  const handleOnBlur = () => {
    if (lat === '' || lon === '') {
      saveGeoJson(undefined);
    } else {
      saveGeoJson({
        type: ItemType.POINT,
        coordinates: [parseFloat(lon), parseFloat(lat)],
      });
    }
  };

  return (
    <Form.Group as={Row} controlId="formBasicCoordinates" className="mt-3">
      <Form.Label column sm={2}>
        Latitude
      </Form.Label>
      <Col sm={4}>
        <Form.Control
          as="input"
          type="number"
          value={lat}
          placeholder="Latitude"
          onChange={(event) => setLat(event.target.value)}
          onBlur={handleOnBlur}
        />
      </Col>
      <Form.Label column sm={2}>
        Longitude
      </Form.Label>
      <Col sm={4}>
        <Form.Control
          as="input"
          type="number"
          value={lon}
          placeholder="Longitude"
          onChange={(event) => setLon(event.target.value)}
          onBlur={handleOnBlur}
        />
      </Col>
    </Form.Group>
  );
};
