import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import styles from './map.module.css';

const defaultCenter = [52.52226, 13.413144];

const createShapes = (shapes) => {
  return shapes.map((shape, index) => <GeoJSON key={index} data={shape.geoJson} color={shape.color} weight={2} />);
};

const calculateCenter = (shapes) => {
  if (shapes === undefined || shapes.length === 0) return defaultCenter;

  let lat = 0;
  let lon = 0;
  shapes.forEach((shape) => {
    lat += shape.centerPoint[0];
    lon += shape.centerPoint[1];
  });

  return [lat / shapes.length, lon / shapes.length];
};

const Map = ({ shapes }) => {
  return (
    <LeafletMap center={calculateCenter(shapes)} zoom={16} className={styles.map}>
      <TileLayer
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
      label: PropTypes.string,
      geoJson: PropTypes.object,
      wkt: PropTypes.string,
      color: PropTypes.string,
      centerPoint: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default Map;
