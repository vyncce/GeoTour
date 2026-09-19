export interface MapFeature {
  id: string;
  name: string;
  d: string;
  center?: { x: number; y: number };
}

export interface MapData {
  id: string;
  name: string;
  viewBox: string;
  aspectRatio?: string;
  features: MapFeature[];
  decorativePaths?: string[];
}

/**
 * Realistic & Minimalist World Map (viewBox: 0 0 1000 600)
 */
export const WORLD_MAP: MapData = {
  id: 'world',
  name: 'Planisphère Mondial',
  viewBox: '0 0 1000 600',
  features: [
    // North America
    {
      id: 'north_america',
      name: 'Amérique du Nord',
      center: { x: 220, y: 210 },
      d: 'M 140 70 L 190 60 L 250 80 L 290 65 L 340 100 L 310 140 L 295 180 L 305 230 L 270 290 L 235 320 L 220 370 L 210 370 L 195 330 L 160 300 L 130 250 L 120 180 L 105 130 L 120 90 Z M 160 30 L 230 25 L 260 50 L 210 55 Z M 70 80 L 100 70 L 110 100 L 80 110 Z',
    },
    // South America
    {
      id: 'south_america',
      name: 'Amérique du Sud',
      center: { x: 320, y: 430 },
      d: 'M 240 370 L 270 360 L 320 380 L 370 410 L 385 450 L 360 510 L 330 560 L 300 580 L 290 560 L 285 490 L 265 440 L 245 400 Z',
    },
    // Europe
    {
      id: 'europe',
      name: 'Europe',
      center: { x: 510, y: 180 },
      d: 'M 470 120 L 510 100 L 540 120 L 550 160 L 580 180 L 550 220 L 520 230 L 490 250 L 465 240 L 450 200 L 470 160 Z M 440 140 L 460 130 L 455 160 L 435 155 Z M 480 80 L 510 60 L 525 90 L 500 130 L 485 100 Z',
    },
    // Africa
    {
      id: 'africa',
      name: 'Afrique',
      center: { x: 530, y: 360 },
      d: 'M 460 250 L 530 240 L 580 270 L 610 330 L 590 390 L 560 460 L 530 500 L 495 450 L 470 380 L 450 330 L 445 280 Z M 610 420 L 625 430 L 620 480 L 605 470 Z',
    },
    // Asia
    {
      id: 'asia',
      name: 'Asie',
      center: { x: 720, y: 220 },
      d: 'M 550 140 L 620 100 L 710 90 L 800 110 L 870 140 L 910 180 L 890 240 L 840 260 L 800 320 L 760 380 L 730 350 L 700 300 L 650 310 L 600 280 L 580 210 L 560 170 Z M 870 280 L 890 320 L 875 350 L 860 310 Z M 780 390 L 840 400 L 850 440 L 800 430 Z',
    },
    // Oceania / Australia
    {
      id: 'oceania',
      name: 'Océanie',
      center: { x: 840, y: 460 },
      d: 'M 780 440 L 840 430 L 890 450 L 900 500 L 870 540 L 810 540 L 770 490 Z M 910 520 L 930 530 L 920 570 L 900 560 Z M 840 560 L 860 560 L 855 580 L 840 575 Z',
    },
  ],
};

/**
 * Detailed Continent Maps with individual Country Outlines
 */
export const CONTINENT_MAPS: Record<string, MapData> = {
  europe: {
    id: 'europe',
    name: 'Europe Vectorielle',
    viewBox: '0 0 800 650',
    features: [
      {
        id: 'france',
        name: 'France',
        center: { x: 330, y: 390 },
        d: 'M 285 335 L 340 320 L 375 345 L 390 380 L 375 425 L 360 460 L 320 465 L 280 435 L 265 390 L 285 355 Z M 385 465 L 395 465 L 390 490 L 380 485 Z',
      },
      {
        id: 'germany',
        name: 'Allemagne',
        center: { x: 420, y: 310 },
        d: 'M 390 230 L 440 230 L 465 270 L 470 325 L 440 375 L 390 375 L 380 340 L 390 280 Z',
      },
      {
        id: 'spain',
        name: 'Espagne',
        center: { x: 230, y: 490 },
        d: 'M 200 430 L 285 435 L 305 470 L 280 545 L 230 560 L 180 540 L 170 490 L 205 440 Z M 315 505 L 330 500 L 335 515 L 320 520 Z',
      },
      {
        id: 'italy',
        name: 'Italie',
        center: { x: 450, y: 470 },
        d: 'M 390 385 L 455 380 L 475 410 L 465 440 L 490 480 L 530 515 L 515 540 L 470 495 L 440 450 L 415 410 Z M 435 530 L 470 535 L 450 565 L 420 550 Z M 380 460 L 395 460 L 390 500 L 375 490 Z',
      },
      {
        id: 'uk_ireland',
        name: 'Royaume-Uni & Irlande',
        center: { x: 260, y: 250 },
        d: 'M 240 200 L 280 190 L 290 250 L 270 300 L 245 285 L 255 240 Z M 210 240 L 235 235 L 230 275 L 205 270 Z',
      },
      {
        id: 'nordics',
        name: 'Pays Nordiques',
        center: { x: 450, y: 130 },
        d: 'M 400 90 L 450 60 L 510 70 L 480 180 L 440 210 L 410 180 L 430 130 Z',
      },
      {
        id: 'poland_east',
        name: 'Europe de l\'Est',
        center: { x: 560, y: 310 },
        d: 'M 470 240 L 580 230 L 640 270 L 620 370 L 530 380 L 475 320 Z',
      },
    ],
  },
  north_america: {
    id: 'north_america',
    name: 'Amérique du Nord Vectorielle',
    viewBox: '0 0 800 650',
    features: [
      {
        id: 'canada',
        name: 'Canada',
        center: { x: 400, y: 220 },
        d: 'M 150 140 L 260 100 L 380 120 L 520 100 L 640 160 L 680 260 L 580 320 L 440 330 L 280 330 L 190 320 L 160 220 Z M 280 40 L 420 30 L 480 80 L 380 90 Z',
      },
      {
        id: 'usa',
        name: 'États-Unis',
        center: { x: 410, y: 420 },
        d: 'M 190 330 L 440 330 L 580 320 L 650 350 L 640 430 L 590 520 L 530 500 L 450 560 L 380 540 L 340 470 L 220 460 L 170 380 Z M 90 120 L 160 100 L 170 200 L 110 210 Z',
      },
      {
        id: 'mexico',
        name: 'Mexique',
        center: { x: 330, y: 550 },
        d: 'M 250 480 L 350 490 L 420 540 L 460 560 L 440 600 L 370 610 L 320 560 L 260 520 Z',
      },
    ],
  },
  asia: {
    id: 'asia',
    name: 'Asie Vectorielle',
    viewBox: '0 0 900 650',
    features: [
      {
        id: 'japan',
        name: 'Japon',
        center: { x: 740, y: 320 },
        d: 'M 720 230 L 760 210 L 750 260 L 715 255 Z M 680 310 L 740 280 L 750 330 L 700 360 L 670 340 Z M 650 365 L 675 360 L 670 385 L 645 380 Z M 630 380 L 655 380 L 650 415 L 625 405 Z',
      },
      {
        id: 'china_east',
        name: 'Chine & Asie Centrale',
        center: { x: 450, y: 300 },
        d: 'M 250 200 L 480 160 L 620 200 L 650 320 L 580 430 L 460 440 L 360 410 L 280 320 Z',
      },
      {
        id: 'india_south',
        name: 'Inde & Asie du Sud',
        center: { x: 340, y: 460 },
        d: 'M 280 360 L 400 370 L 410 440 L 370 540 L 320 560 L 280 460 Z',
      },
      {
        id: 'se_asia',
        name: 'Asie du Sud-Est',
        center: { x: 560, y: 480 },
        d: 'M 500 430 L 570 420 L 600 480 L 560 560 L 490 510 Z M 580 540 L 660 530 L 670 580 L 590 590 Z',
      },
      {
        id: 'russia_north',
        name: 'Nord & Sibérie',
        center: { x: 500, y: 110 },
        d: 'M 180 120 L 480 90 L 750 90 L 820 160 L 650 180 L 420 150 L 210 170 Z',
      },
    ],
  },
  south_america: {
    id: 'south_america',
    name: 'Amérique du Sud Vectorielle',
    viewBox: '0 0 650 800',
    features: [
      {
        id: 'brazil',
        name: 'Brésil',
        center: { x: 380, y: 340 },
        d: 'M 240 180 L 340 170 L 460 210 L 540 260 L 570 330 L 510 440 L 440 510 L 360 520 L 310 450 L 300 360 L 220 280 Z',
      },
      {
        id: 'argentina_chile',
        name: 'Cône Sud (Argentine & Chili)',
        center: { x: 260, y: 590 },
        d: 'M 260 480 L 340 490 L 360 570 L 320 690 L 280 770 L 250 740 L 240 600 L 220 520 Z',
      },
      {
        id: 'andean_north',
        name: 'Région Andine & Nord',
        center: { x: 200, y: 220 },
        d: 'M 180 120 L 280 130 L 240 220 L 200 330 L 160 300 L 140 220 Z',
      },
    ],
  },
  oceania: {
    id: 'oceania',
    name: 'Océanie Vectorielle',
    viewBox: '0 0 800 600',
    features: [
      {
        id: 'australia',
        name: 'Australie',
        center: { x: 380, y: 310 },
        d: 'M 190 200 L 280 160 L 370 210 L 480 160 L 560 210 L 590 320 L 570 420 L 480 460 L 380 430 L 280 440 L 170 380 L 160 260 Z M 485 480 L 520 480 L 510 520 L 480 515 Z',
      },
      {
        id: 'new_zealand',
        name: 'Nouvelle-Zélande',
        center: { x: 670, y: 440 },
        d: 'M 650 370 L 685 360 L 675 420 L 650 410 Z M 620 430 L 655 425 L 635 490 L 605 480 Z',
      },
      {
        id: 'pacific_islands',
        name: 'Papouasie & Îles',
        center: { x: 430, y: 110 },
        d: 'M 350 90 L 490 80 L 530 120 L 440 140 L 360 125 Z',
      },
    ],
  },
};

/**
 * Detailed Individual Country Maps with high geometric precision
 * Coordinates normalized to 0..100 for city markers mapping.
 */
export const COUNTRY_MAPS: Record<string, MapData> = {
  france: {
    id: 'france',
    name: 'France Métropolitaine',
    viewBox: '0 0 100 100',
    features: [
      // Hexagone Métropolitain
      {
        id: 'france_main',
        name: 'France Métropolitaine',
        d: 'M 22 28 C 25 24 35 22 45 16 C 50 14 55 18 64 22 C 72 26 78 28 84 36 C 88 42 86 48 82 54 C 85 60 88 66 84 74 C 80 80 72 82 66 86 C 58 88 52 86 46 88 C 38 90 34 86 30 84 C 24 80 20 74 22 66 C 24 60 22 54 18 48 C 12 44 8 36 12 30 C 16 26 18 30 22 28 Z',
      },
      // Corse
      {
        id: 'corsica',
        name: 'Corse',
        d: 'M 88 80 C 90 77 94 78 95 82 C 96 86 94 90 92 94 C 89 95 87 91 88 86 Z',
      },
    ],
    decorativePaths: [
      // Seine & Rhône rivers subtle accents
      'M 44 26 Q 44 40 44 46 Q 50 54 55 60 T 57 78',
      'M 28 65 Q 34 70 38 74',
    ],
  },
  germany: {
    id: 'germany',
    name: 'Allemagne',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'germany_main',
        name: 'Allemagne',
        d: 'M 36 12 C 48 8 58 10 68 18 C 74 24 72 32 78 40 C 82 48 84 56 80 66 C 76 76 68 84 62 90 C 50 92 40 90 34 84 C 28 78 22 70 20 60 C 18 50 20 42 24 34 C 28 26 30 18 36 12 Z',
      },
    ],
    decorativePaths: [
      // Rhine & Elbe subtle accents
      'M 48 22 Q 52 35 64 35',
      'M 32 45 Q 40 50 42 52 Q 44 60 44 65',
    ],
  },
  spain: {
    id: 'spain',
    name: 'Espagne & Baléares',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'spain_main',
        name: 'Péninsule Ibérique (Espagne)',
        d: 'M 22 18 C 36 12 56 12 74 20 C 84 26 88 34 86 44 C 84 54 82 64 78 74 C 72 82 60 88 48 90 C 34 90 24 84 18 76 C 12 68 12 56 14 44 C 16 32 18 24 22 18 Z',
      },
      // Balearic Islands
      {
        id: 'balearic_islands',
        name: 'Îles Baléares',
        d: 'M 88 52 C 92 50 95 53 93 57 C 90 59 87 56 88 52 Z M 84 60 C 86 59 88 61 87 63 C 85 64 83 62 84 60 Z',
      },
    ],
    decorativePaths: ['M 50 18 Q 48 40 48 52 Q 40 68 32 78'],
  },
  italy: {
    id: 'italy',
    name: 'Italie & Îles',
    viewBox: '0 0 100 100',
    features: [
      // Italian Boot
      {
        id: 'italy_boot',
        name: 'Italie Péninsulaire',
        d: 'M 18 20 C 30 14 54 14 70 20 C 66 28 58 32 54 38 C 50 44 56 50 62 58 C 68 64 76 70 86 74 C 88 78 84 84 76 84 C 70 82 66 76 60 72 C 54 68 46 60 42 52 C 38 44 32 36 26 30 C 20 26 16 24 18 20 Z',
      },
      // Sicily
      {
        id: 'sicily',
        name: 'Sicile',
        d: 'M 46 82 C 54 80 62 84 60 88 C 54 94 44 92 42 86 C 42 84 44 83 46 82 Z',
      },
      // Sardinia
      {
        id: 'sardinia',
        name: 'Sardaigne',
        d: 'M 24 50 C 28 48 30 52 29 60 C 28 68 25 72 22 70 C 20 66 21 54 24 50 Z',
      },
    ],
    decorativePaths: ['M 32 24 Q 44 38 48 62 Q 56 68 60 72'],
  },
  usa: {
    id: 'usa',
    name: 'États-Unis',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'usa_main',
        name: 'États-Unis Contigus',
        d: 'M 12 30 C 26 28 54 28 82 28 C 88 32 90 38 88 46 C 84 56 82 68 84 78 C 80 84 74 86 70 76 C 64 72 56 74 50 78 C 42 80 34 74 28 72 C 20 70 14 62 10 52 C 8 42 10 34 12 30 Z',
      },
      // Florida Panhandle
      {
        id: 'florida',
        name: 'Floride',
        d: 'M 74 68 C 78 72 82 78 80 86 C 76 86 74 80 72 74 Z',
      },
    ],
    decorativePaths: ['M 14 46 Q 36 48 62 36 Q 72 40 80 38'],
  },
  canada: {
    id: 'canada',
    name: 'Canada',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'canada_main',
        name: 'Canada',
        d: 'M 14 36 C 30 24 60 22 84 26 C 90 34 88 46 86 58 C 82 66 74 74 62 76 C 46 76 30 74 18 72 C 12 62 10 48 14 36 Z',
      },
    ],
    decorativePaths: ['M 20 58 Q 42 54 64 70 Q 72 62 78 54'],
  },
  japan: {
    id: 'japan',
    name: 'Archipel Japonais',
    viewBox: '0 0 100 100',
    features: [
      // Hokkaido (North)
      {
        id: 'hokkaido',
        name: 'Hokkaido',
        d: 'M 70 12 C 78 10 84 14 82 22 C 78 26 72 24 68 18 Z',
      },
      // Honshu (Main Island)
      {
        id: 'honshu',
        name: 'Honshu',
        d: 'M 74 28 C 76 34 72 42 66 48 C 58 52 50 54 44 56 C 38 58 34 60 30 62 C 32 58 38 54 44 50 C 50 46 58 44 64 38 C 68 32 72 26 74 28 Z',
      },
      // Shikoku
      {
        id: 'shikoku',
        name: 'Shikoku',
        d: 'M 40 60 C 46 58 48 62 44 66 C 40 68 38 64 40 60 Z',
      },
      // Kyushu (South-West)
      {
        id: 'kyushu',
        name: 'Kyushu',
        d: 'M 24 64 C 28 62 30 68 28 74 C 24 76 22 70 24 64 Z',
      },
    ],
    decorativePaths: ['M 75 18 Q 63 47 62 45 Q 46 52 44 55 Q 26 64 26 64'],
  },
  brazil: {
    id: 'brazil',
    name: 'Brésil',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'brazil_main',
        name: 'Brésil',
        d: 'M 30 16 C 50 12 70 14 84 18 C 92 28 88 42 82 56 C 76 68 68 76 58 78 C 48 76 42 68 36 58 C 30 48 24 38 22 28 C 24 20 26 18 30 16 Z',
      },
    ],
    decorativePaths: ['M 82 18 Q 80 38 68 58 Q 62 50 64 67 Q 70 68 70 68'],
  },
  australia: {
    id: 'australia',
    name: 'Australie & Tasmanie',
    viewBox: '0 0 100 100',
    features: [
      // Main Continent
      {
        id: 'australia_main',
        name: 'Australie Continentale',
        d: 'M 22 26 C 36 18 54 22 72 18 C 84 26 88 40 86 56 C 84 68 78 80 66 84 C 52 86 38 82 26 78 C 16 70 14 54 16 38 C 18 30 20 28 22 26 Z',
      },
      // Tasmania
      {
        id: 'tasmania',
        name: 'Tasmanie',
        d: 'M 72 88 C 76 86 78 90 76 94 C 72 96 70 92 72 88 Z',
      },
    ],
    decorativePaths: ['M 18 68 Q 58 72 72 80 Q 78 74 82 70 Q 84 52 84 52'],
  },
};

/**
 * Helper to get the best matching MapData based on quiz context
 */
export function getMapDataForContext(
  category?: string,
  continentId?: string,
  countryId?: string
): { mapData: MapData; mapType: 'world' | 'continent' | 'country' } {
  // If specific country is active or category is cities/capitals with countryId
  if (countryId && COUNTRY_MAPS[countryId]) {
    return {
      mapData: COUNTRY_MAPS[countryId],
      mapType: 'country',
    };
  }

  // If continent is active or filtered
  if (continentId && CONTINENT_MAPS[continentId]) {
    return {
      mapData: CONTINENT_MAPS[continentId],
      mapType: 'continent',
    };
  }

  // Default to World Map for global / continent categories
  return {
    mapData: WORLD_MAP,
    mapType: 'world',
  };
}
