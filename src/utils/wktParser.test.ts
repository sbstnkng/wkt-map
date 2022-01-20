import { GeoJSON } from '../types/Geo';
import { wktToGeoJson, geoJsonToWkt } from './wktParser';

test('return undefined if wkt is empty string', () => {
  const result = wktToGeoJson('');

  expect(result).toEqual(undefined);
});

test('parse WKT point to GeoJSON', () => {
  const wkt = 'POINT(1 2)';
  const expected: GeoJSON = { type: 'Point', coordinates: [1, 2] };

  const result = wktToGeoJson(wkt);

  expect(result).toEqual(expected);
});

test('parse WKT polygon to GeoJSON', () => {
  const wkt = 'POLYGON((1 2,1 4,3 4,3 2,1 2))';
  const expected: GeoJSON = {
    type: 'Polygon',
    coordinates: [
      [
        [1, 2],
        [1, 4],
        [3, 4],
        [3, 2],
        [1, 2],
      ],
    ],
  };

  const result = wktToGeoJson(wkt);

  expect(result).toEqual(expected);
});

test('return undefined if geoJson is undefined', () => {
  const result = geoJsonToWkt(undefined);

  expect(result).toEqual(undefined);
});

test('return undefined if geoJson is null', () => {
  const result = geoJsonToWkt(undefined);

  expect(result).toEqual(undefined);
});

test('parse GeoJSON point to WKT', () => {
  const geoJson: GeoJSON = { type: 'Point', coordinates: [1, 2] };
  const expected = 'POINT (1 2)';

  const result = geoJsonToWkt(geoJson);

  expect(result).toEqual(expected);
});

test('parse GeoJSON polygon to WKT', () => {
  const geoJson: GeoJSON = {
    type: 'Polygon',
    coordinates: [
      [
        [1, 2],
        [1, 4],
        [3, 4],
        [3, 2],
        [1, 2],
      ],
    ],
  };
  const expected = 'POLYGON ((1 2, 1 4, 3 4, 3 2, 1 2))';

  const result = geoJsonToWkt(geoJson);

  expect(result).toEqual(expected);
});
