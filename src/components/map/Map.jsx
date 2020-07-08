import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import hash from 'object-hash';
import styles from './map.module.css';

const defaultCenter = [52.52226, 13.413144];

const createShapes = (shapes) => {
  return shapes
    .filter((shape) => shape.visible)
    .map((shape) => <GeoJSON key={hash(shape)} data={shape.geoJson} color={shape.color} weight={2} />);
};

const calculateBounds = (shapes) => {
  if (shapes === undefined || shapes.length === 0) return undefined;

  const bounds = shapes
    .filter((shape) => shape.visible)
    .map((shape) => {
      const { coordinates, type } = shape.geoJson;
      if (type === 'Point') {
        return [coordinates[1], coordinates[0]];
      } else if (type === 'LineString') {
        return coordinates.map((coords) => [coords[1], coords[0]]);
      } else {
        return coordinates[0].map((coords) => [coords[1], coords[0]]);
      }
    });

  return bounds.length === 0 ? undefined : bounds;
};

const Map = ({ shapes }) => {
  return (
    <LeafletMap bounds={calculateBounds(shapes)} center={defaultCenter} zoom={16} maxZoom={22} className={styles.map}>
      <TileLayer
        maxZoom={22}
        maxNativeZoom={19}
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {createShapes(shapes)}
    </LeafletMap>
  );
};

Map.defaultProps = {
  shapes: [],
};

Map.propTypes = {
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      geoJson: PropTypes.object,
      wkt: PropTypes.string,
      color: PropTypes.string,
      centerPoint: PropTypes.arrayOf(PropTypes.number),
      visible: PropTypes.bool,
    })
  ).isRequired,
};

export default Map;
