import { CONTINENTS_DATA, getAllCountries } from '@/data/geoDataset';
import { StickerItem, StickerTarget, StickerQuizType, StickerQuizScope } from '@/types/geo';
import { generateWorldMapPaths, generateContinentMapPaths } from '@/lib/d3GeoService';

/**
 * Calculate Great-Circle Distance between two GPS points using Haversine formula (in km)
 */
export function calculateHaversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Get Compass Direction from point A to point B
 */
export function getCompassDirection(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): string {
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;

  let vertical = '';
  if (dLat > 2) vertical = 'Nord';
  else if (dLat < -2) vertical = 'Sud';

  let horizontal = '';
  if (dLng > 2) horizontal = 'Est';
  else if (dLng < -2) horizontal = 'Ouest';

  if (vertical && horizontal) return `${vertical}-${horizontal}`;
  if (vertical) return vertical;
  if (horizontal) return horizontal;
  return 'Très proche';
}

/**
 * Shuffle an array uniformly
 */
function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export interface StickerQuizSession {
  stickers: StickerItem[];
  targets: StickerTarget[];
  projector: (lng: number, lat: number) => [number, number];
  graticulePath: string;
  spherePath?: string;
  landPath?: string;
  countryPaths: { id: string; name: string; d: string }[];
}

/**
 * Generate a new Sticker Quiz session with accurate coordinates and Natural Earth D3 targets
 */
export function generateStickerQuiz(
  scope: StickerQuizScope,
  continentId: string = 'europe',
  quizType: StickerQuizType = 'countries',
  stickerCount: number = 8,
  svgWidth: number = 920,
  svgHeight: number = 520
): StickerQuizSession {
  let sourceCountries = getAllCountries();

  if (scope === 'continent') {
    const cont = CONTINENTS_DATA.find((c) => c.id === continentId) || CONTINENTS_DATA[0];
    sourceCountries = cont.countries;
  }

  // Filter countries with valid lat/lng
  const eligibleCountries = sourceCountries.filter((c) => {
    return (
      c.capitalCoords.lat !== undefined &&
      c.capitalCoords.lng !== undefined &&
      c.centerCoords.lat !== undefined &&
      c.centerCoords.lng !== undefined
    );
  });

  const selectedCountries = shuffle(eligibleCountries).slice(
    0,
    Math.min(stickerCount, eligibleCountries.length)
  );

  // Generate D3-geo Map paths and Projector
  let mapResult: ReturnType<typeof generateWorldMapPaths> | ReturnType<typeof generateContinentMapPaths>;

  if (scope === 'continent') {
    const continentObj = CONTINENTS_DATA.find((c) => c.id === continentId);
    const countryIds = continentObj ? continentObj.countries.map((c) => c.id) : [];
    mapResult = generateContinentMapPaths(countryIds, svgWidth, svgHeight, 45);
  } else {
    mapResult = generateWorldMapPaths(svgWidth, svgHeight);
  }

  const stickers: StickerItem[] = [];
  const targets: StickerTarget[] = [];

  selectedCountries.forEach((country, index) => {
    let itemType: 'country' | 'capital' = 'country';

    if (quizType === 'capitals') {
      itemType = 'capital';
    } else if (quizType === 'mixed') {
      itemType = index % 2 === 0 ? 'country' : 'capital';
    }

    const isCapital = itemType === 'capital';
    const label = isCapital ? country.capital : country.name;
    const coords = isCapital
      ? { lat: country.capitalCoords.lat!, lng: country.capitalCoords.lng! }
      : { lat: country.centerCoords.lat!, lng: country.centerCoords.lng! };

    const stickerId = `sticker_${country.id}_${itemType}_${index}`;
    const targetId = `target_${country.id}_${itemType}_${index}`;

    const [px, py] = mapResult.project(coords.lng, coords.lat);

    const sticker: StickerItem = {
      id: stickerId,
      type: itemType,
      label,
      flag: country.flag,
      countryName: country.name,
      countryId: country.id,
      continentId: country.continentId,
      coords,
      isPlaced: false,
    };

    const target: StickerTarget = {
      id: targetId,
      stickerId: stickerId,
      label,
      countryId: country.id,
      continentId: country.continentId,
      coords,
      svgCoords: { x: px, y: py },
      placedSticker: undefined,
      isRevealed: false,
    };

    stickers.push(sticker);
    targets.push(target);
  });

  return {
    stickers: shuffle(stickers),
    targets,
    projector: mapResult.project,
    graticulePath: mapResult.graticulePath,
    spherePath: 'spherePath' in mapResult ? mapResult.spherePath : undefined,
    landPath: 'landPath' in mapResult ? mapResult.landPath : undefined,
    countryPaths: mapResult.countryPaths,
  };
}
