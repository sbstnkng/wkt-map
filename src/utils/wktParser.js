import * as Terraformer from 'terraformer';
import * as WKT from 'terraformer-wkt-parser';
import { isBlank } from './stringUtils';

export const parseWktToGeoJson = (wktShape) => {
  if (isBlank(wktShape)) return new Terraformer.Point([]);

  return WKT.parse(wktShape);
};

export const isWktValid = (wktShape) => {
  if (!wktShape) return false;

  try {
    parseWktToGeoJson(wktShape);
    return true;
  } catch (error) {
    return false;
  }
};
