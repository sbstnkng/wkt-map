import { GeoJSON } from '../types/Geo';
const Terraformer = require('@terraformer/wkt');

export const wktToGeoJson = (wkt: string): GeoJSON | undefined => {
  if (wkt === '') return undefined;
  return Terraformer.wktToGeoJSON(wkt);
};

export const geoJsonToWkt = (geoJson?: GeoJSON): string | undefined => {
  if (geoJson === undefined || geoJson === null) return undefined;
  return Terraformer.geojsonToWKT(geoJson);
};
