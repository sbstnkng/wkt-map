import * as Terraformer from 'terraformer';
import { parseWktToGeoJson } from './wktParser';

test('should parse polygon to json', () => {
  const wktPolygon =
    'POLYGON((13.382738716900347 52.51854080349517,13.39760050177574 52.51864485208725,13.388303294777868 52.51173242980326,13.382738716900347 52.51854080349517))';
  const expected = new Terraformer.Polygon([
    [
      [13.382738716900347, 52.51854080349517],
      [13.39760050177574, 52.51864485208725],
      [13.388303294777868, 52.51173242980326],
      [13.382738716900347, 52.51854080349517],
    ],
  ]);

  const result = parseWktToGeoJson(wktPolygon);

  expect(result).toEqual(expected);
});

test('should return empty array if passed wkt string is empty', () => {
  const result = parseWktToGeoJson('');

  expect(result).toEqual(new Terraformer.Point([]));
});
