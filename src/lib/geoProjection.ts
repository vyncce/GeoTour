/**
 * High-Performance Cartographic Projection Engine for GEOTour
 * Zero external dependencies, 100% type-safe, sub-millisecond projection execution.
 */

export type Position = [number, number]; // [longitude, latitude] in degrees WGS84
export type BoundingBox = [[number, number], [number, number]]; // [[minLng, minLat], [maxLng, maxLat]]

export interface GeoPolygon {
  type: 'Polygon';
  coordinates: Position[][];
}

export interface GeoMultiPolygon {
  type: 'MultiPolygon';
  coordinates: Position[][][];
}

export type GeoGeometry = GeoPolygon | GeoMultiPolygon;

export interface GeoFeature {
  id: string;
  name: string;
  geometry: GeoGeometry;
  properties?: Record<string, unknown>;
}

export interface ProjectionConfig {
  width: number;
  height: number;
  padding?: number;
  bounds?: BoundingBox;
}

/**
 * Spherical Web Mercator Projection formula
 */
export function mercatorRaw(lng: number, lat: number): [number, number] {
  // Clamp latitude to [-85.051129, 85.051129] to avoid infinity
  const clampedLat = Math.max(-85.051129, Math.min(85.051129, lat));
  const lambda = (lng * Math.PI) / 180;
  const phi = (clampedLat * Math.PI) / 180;
  const x = lambda;
  const y = Math.log(Math.tan(Math.PI / 4 + phi / 2));
  return [x, y];
}

/**
 * Miller Cylindrical Projection (great for World maps, avoids extreme polar stretching)
 */
export function millerRaw(lng: number, lat: number): [number, number] {
  const lambda = (lng * Math.PI) / 180;
  const phi = (lat * Math.PI) / 180;
  const x = lambda;
  const y = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * phi));
  return [x, y];
}

/**
 * Calculate the bounding box of a GeoJSON geometry
 */
export function computeBoundingBox(geometry: GeoGeometry): BoundingBox {
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  const updateBounds = (pos: Position) => {
    const [lng, lat] = pos;
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  };

  if (geometry.type === 'Polygon') {
    for (const ring of geometry.coordinates) {
      for (const pos of ring) updateBounds(pos);
    }
  } else if (geometry.type === 'MultiPolygon') {
    for (const poly of geometry.coordinates) {
      for (const ring of poly) {
        for (const pos of ring) updateBounds(pos);
      }
    }
  }

  return [
    [minLng, minLat],
    [maxLng, maxLat],
  ];
}

/**
 * Create an adaptive Cartographic Projector for a given bounding box and viewport
 */
export function createProjector(config: ProjectionConfig) {
  const { width, height, padding = 40, bounds } = config;

  if (!bounds) {
    // Default World view
    const scale = (width - padding * 2) / (2 * Math.PI);
    const cx = width / 2;
    const cy = height / 2;

    const project = (pos: Position): [number, number] => {
      const [xRaw, yRaw] = millerRaw(pos[0], pos[1]);
      const px = cx + xRaw * scale;
      const py = cy - yRaw * scale; // Invert Y for SVG coordinates
      return [px, py];
    };

    return {
      project,
      svgPath: (geom: GeoGeometry) => geometryToSvgPath(geom, project),
    };
  }

  // Calculate projected bounding box of target geometry
  const [[minLng, minLat], [maxLng, maxLat]] = bounds;

  const [pMinX, pMinY] = mercatorRaw(minLng, minLat);
  const [pMaxX, pMaxY] = mercatorRaw(maxLng, maxLat);

  const rawWidth = Math.abs(pMaxX - pMinX) || 1e-6;
  const rawHeight = Math.abs(pMaxY - pMinY) || 1e-6;

  const availWidth = Math.max(10, width - padding * 2);
  const availHeight = Math.max(10, height - padding * 2);

  const scale = Math.min(availWidth / rawWidth, availHeight / rawHeight);

  // Center alignment in SVG canvas
  const midRawX = (pMinX + pMaxX) / 2;
  const midRawY = (pMinY + pMaxY) / 2;

  const cx = width / 2;
  const cy = height / 2;

  const project = (pos: Position): [number, number] => {
    const [rx, ry] = mercatorRaw(pos[0], pos[1]);
    const px = cx + (rx - midRawX) * scale;
    const py = cy - (ry - midRawY) * scale; // Invert Y
    return [px, py];
  };

  return {
    project,
    svgPath: (geom: GeoGeometry) => geometryToSvgPath(geom, project),
  };
}

/**
 * Convert GeoJSON Geometry (Polygon / MultiPolygon) to SVG Path d string
 */
export function geometryToSvgPath(
  geometry: GeoGeometry,
  project: (pos: Position) => [number, number]
): string {
  const ringToPath = (ring: Position[]): string => {
    if (ring.length === 0) return '';
    const points = ring.map((p) => project(p));
    let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i][0].toFixed(2)} ${points[i][1].toFixed(2)}`;
    }
    return d + ' Z';
  };

  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map(ringToPath).join(' ');
  }

  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates
      .map((poly) => poly.map(ringToPath).join(' '))
      .join(' ');
  }

  return '';
}
