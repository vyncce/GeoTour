import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson-client';
import worldAtlasRaw from 'world-atlas/countries-50m.json';
import landAtlasRaw from 'world-atlas/land-50m.json';
import type { Topology, Objects } from 'topojson-specification';
import type { FeatureCollection, Feature, Geometry, GeoJsonProperties } from 'geojson';

// Unpack TopoJSON to GeoJSON once at module load
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const worldTopology = worldAtlasRaw as unknown as Topology<Objects<any>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const landTopology = landAtlasRaw as unknown as Topology<Objects<any>>;

export const WORLD_COUNTRIES_FEATURE_COLLECTION = topojson.feature(
  worldTopology,
  worldTopology.objects.countries
) as unknown as FeatureCollection<Geometry, GeoJsonProperties>;

export const WORLD_LAND_FEATURE = topojson.feature(
  landTopology,
  landTopology.objects.land
) as unknown as Feature<Geometry, GeoJsonProperties>;

// Country ID and Name alias dictionary to map GEOTour country IDs to Natural Earth features
export const COUNTRY_ALIASES: Record<string, string> = {
  usa: 'United States of America',
  uk: 'United Kingdom',
  uae: 'United Arab Emirates',
  drc: 'Dem. Rep. Congo',
  republic_congo: 'Congo',
  car: 'Central African Rep.',
  czechia: 'Czechia',
  bosnia: 'Bosnia and Herz.',
  north_macedonia: 'North Macedonia',
  antigua_and_barbuda: 'Antigua and Barb.',
  saint_kitts_and_nevis: 'St. Kitts and Nevis',
  saint_vincent: 'St. Vin. and Gren.',
  saint_lucia: 'Saint Lucia',
  solomon_islands: 'Solomon Is.',
  marshall_islands: 'Marshall Is.',
  timor_leste: 'Timor-Leste',
  sao_tome: 'São Tomé and Principe',
  western_sahara: 'W. Sahara',
  dominican_republic: 'Dominican Rep.',
  south_sudan: 'S. Sudan',
  ivory_coast: "Côte d'Ivoire",
  eswatini: 'eSwatini',
  equatorial_guinea: 'Eq. Guinea',
  french_guiana: 'France',
  reunion: 'France',
  mayotte: 'France',
  french_polynesia: 'France',
  new_caledonia: 'New Caledonia',
  curacao: 'Curaçao',
  aruba: 'Aruba',
  greenland: 'Greenland',
  puerto_rico: 'Puerto Rico',
  russia: 'Russia',
  south_korea: 'South Korea',
  north_korea: 'North Korea',
  syria: 'Syria',
  laos: 'Laos',
  vietnam: 'Vietnam',
  iran: 'Iran',
  tanzania: 'Tanzania',
};

import { getCountryById, getContinentById } from '@/data/geoDataset';

/**
 * Find GeoJSON Feature for a given country ID
 */
export function getCountryGeoFeature(countryId: string): Feature<Geometry, GeoJsonProperties> | undefined {
  const alias = COUNTRY_ALIASES[countryId];
  if (alias) {
    const match = WORLD_COUNTRIES_FEATURE_COLLECTION.features.find(
      (f) => f.properties?.name?.toLowerCase() === alias.toLowerCase()
    );
    if (match) return match;
  }

  const cleanId = countryId.toLowerCase().replace(/_/g, ' ');
  const exactMatch = WORLD_COUNTRIES_FEATURE_COLLECTION.features.find((f) => {
    const fn = (f.properties?.name || '').toLowerCase();
    return fn === cleanId;
  });
  if (exactMatch) return exactMatch;

  const country = getCountryById(countryId);
  if (country) {
    const countryNameLow = country.name.toLowerCase();
    const nameMatch = WORLD_COUNTRIES_FEATURE_COLLECTION.features.find((f) => {
      const fn = (f.properties?.name || '').toLowerCase();
      return fn === countryNameLow;
    });
    if (nameMatch) return nameMatch;
  }

  return WORLD_COUNTRIES_FEATURE_COLLECTION.features.find((f) => {
    const fn = (f.properties?.name || '').toLowerCase();
    return fn.startsWith(cleanId) || cleanId.startsWith(fn);
  });
}

/**
 * Helper to test if a GeoJSON country feature matches a given country ID or country name (strict exact matching)
 */
export function isMatchingCountryFeature(
  featureName: string,
  countryId?: string,
  countryName?: string
): boolean {
  if (!featureName || (!countryId && !countryName)) return false;
  const fLow = featureName.toLowerCase().trim();

  if (countryId) {
    const alias = COUNTRY_ALIASES[countryId]?.toLowerCase();
    if (alias && fLow === alias) {
      return true;
    }
    const cleanId = countryId.toLowerCase().replace(/_/g, ' ').trim();
    if (fLow === cleanId) {
      return true;
    }
    const country = getCountryById(countryId);
    if (country) {
      if (fLow === country.name.toLowerCase().trim()) {
        return true;
      }
    }
  }

  if (countryName) {
    const cLow = countryName.toLowerCase().trim();
    if (fLow === cLow) {
      return true;
    }
  }

  return false;
}

/**
 * Helper to test if a GeoJSON country feature belongs to a given continent
 */
export function isMatchingContinentFeature(
  featureName: string,
  continentId: string
): boolean {
  if (!featureName || !continentId) return false;
  const continent = getContinentById(continentId);
  if (!continent) return false;

  const fLow = featureName.toLowerCase().trim();

  return continent.countries.some((c) => {
    const alias = COUNTRY_ALIASES[c.id]?.toLowerCase();
    if (alias && fLow === alias) return true;
    const cleanId = c.id.toLowerCase().replace(/_/g, ' ').trim();
    if (fLow === cleanId) return true;
    if (fLow === c.name.toLowerCase().trim()) return true;
    return false;
  });
}


/**
 * Generate high-precision World Map SVG paths using Natural Earth 1 projection
 */
export function generateWorldMapPaths(width: number, height: number) {
  const projection = d3Geo
    .geoNaturalEarth1()
    .fitExtent(
      [
        [20, 20],
        [width - 20, height - 20],
      ],
      { type: 'Sphere' }
    );

  const pathGenerator = d3Geo.geoPath().projection(projection);

  // Graticule lines every 15 degrees
  const graticule = d3Geo.geoGraticule().step([20, 20])();
  const graticulePath = pathGenerator(graticule) || '';

  // Sphere outline (Earth horizon)
  const spherePath = pathGenerator({ type: 'Sphere' }) || '';

  // Landmass outline
  const landPath = pathGenerator(WORLD_LAND_FEATURE) || '';

  // Country paths with unique IDs
  const countryPaths = WORLD_COUNTRIES_FEATURE_COLLECTION.features.map((feature, idx) => ({
    id: `${feature.id || 'feat'}-${feature.properties?.name || 'country'}-${idx}`,
    name: feature.properties?.name || '',
    d: pathGenerator(feature) || '',
  }));

  const project = (lng: number, lat: number): [number, number] => {
    const coords = projection([lng, lat]);
    return coords ? coords : [width / 2, height / 2];
  };

  return {
    projection,
    pathGenerator,
    spherePath,
    graticulePath,
    landPath,
    countryPaths,
    project,
  };
}

/**
 * Generate high-precision Continent Map SVG paths
 */
export function generateContinentMapPaths(
  continentCountryIds: string[],
  width: number,
  height: number,
  padding = 35
) {
  // Collect matching GeoJSON features for this continent
  const features: Feature<Geometry, GeoJsonProperties>[] = [];

  continentCountryIds.forEach((cid) => {
    const feat = getCountryGeoFeature(cid);
    if (feat && !features.includes(feat)) {
      features.push(feat);
    }
  });

  const featureCollection: FeatureCollection<Geometry, GeoJsonProperties> = {
    type: 'FeatureCollection',
    features: features.length > 0 ? features : WORLD_COUNTRIES_FEATURE_COLLECTION.features,
  };

  const projection = d3Geo
    .geoMercator()
    .fitExtent(
      [
        [padding, padding],
        [width - padding, height - padding],
      ],
      featureCollection
    );

  const pathGenerator = d3Geo.geoPath().projection(projection);

  const graticule = d3Geo.geoGraticule().step([10, 10])();
  const graticulePath = pathGenerator(graticule) || '';

  const countryPaths = featureCollection.features.map((feature, idx) => ({
    id: `${feature.id || 'cont-feat'}-${feature.properties?.name || 'country'}-${idx}`,
    name: feature.properties?.name || '',
    d: pathGenerator(feature) || '',
  }));

  const project = (lng: number, lat: number): [number, number] => {
    const coords = projection([lng, lat]);
    return coords ? coords : [width / 2, height / 2];
  };

  return {
    projection,
    pathGenerator,
    graticulePath,
    countryPaths,
    project,
  };
}

/**
 * Generate single country high-precision SVG path and projector (for MinimalistMap)
 */
export function generateSingleCountryMap(
  countryId: string,
  width: number,
  height: number,
  padding = 40
) {
  const feat = getCountryGeoFeature(countryId);

  if (!feat) {
    return null;
  }

  const projection = d3Geo
    .geoMercator()
    .fitExtent(
      [
        [padding, padding],
        [width - padding, height - padding],
      ],
      feat
    );

  const pathGenerator = d3Geo.geoPath().projection(projection);
  const svgPath = pathGenerator(feat) || '';

  const project = (lng: number, lat: number): [number, number] => {
    const coords = projection([lng, lat]);
    return coords ? coords : [width / 2, height / 2];
  };

  return {
    projection,
    pathGenerator,
    svgPath,
    project,
  };
}
