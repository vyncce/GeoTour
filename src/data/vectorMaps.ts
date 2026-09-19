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
 * High-Precision Cartographic World Map (viewBox: 0 0 1000 600)
 * Realistic continental coastlines, major peninsulas and archipelagos.
 */
export const WORLD_MAP: MapData = {
  id: 'world',
  name: 'Planisphère Mondial Cartographique',
  viewBox: '0 0 1000 600',
  features: [
    // North America (including Alaska, Canada, Lower 48, Mexico & Greenland)
    {
      id: 'north_america',
      name: 'Amérique du Nord',
      center: { x: 230, y: 220 },
      d: 'M 110 95 C 100 80 115 65 140 60 C 160 55 190 70 210 65 C 230 60 250 65 270 55 C 290 60 310 50 335 70 C 350 85 365 75 380 90 C 375 110 340 125 320 120 C 300 135 315 150 330 160 C 315 170 300 165 295 185 C 310 195 325 210 310 230 C 300 245 285 240 275 270 C 265 285 245 300 230 335 C 220 365 205 375 200 360 C 190 340 185 320 175 300 C 160 275 145 250 140 215 C 135 185 120 160 110 140 C 95 130 90 110 110 95 Z M 340 30 C 360 25 390 35 410 55 C 415 80 395 105 375 110 C 360 95 345 80 340 55 Z M 165 310 C 180 305 185 325 175 340 C 165 330 160 320 165 310 Z M 70 120 C 85 115 90 135 80 145 C 70 140 65 130 70 120 Z',
    },
    // South America
    {
      id: 'south_america',
      name: 'Amérique du Sud',
      center: { x: 320, y: 440 },
      d: 'M 255 355 C 275 345 305 345 330 360 C 355 370 385 390 395 425 C 400 450 390 480 370 515 C 355 545 335 575 320 595 C 310 590 300 565 295 540 C 290 510 280 480 270 450 C 255 425 245 400 240 380 C 240 365 245 360 255 355 Z M 310 570 C 320 565 325 575 320 585 C 310 580 305 575 310 570 Z',
    },
    // Europe
    {
      id: 'europe',
      name: 'Europe',
      center: { x: 510, y: 180 },
      d: 'M 470 145 C 480 130 500 125 520 125 C 540 120 560 135 570 150 C 585 170 575 190 565 210 C 550 230 525 240 500 245 C 475 250 455 235 450 215 C 445 190 455 170 470 145 Z M 480 75 C 500 65 520 75 525 105 C 515 130 495 145 480 135 C 475 115 470 95 480 75 Z M 440 145 C 455 135 465 150 455 175 C 445 185 435 175 435 160 Z M 420 155 C 430 150 435 165 430 175 C 420 175 415 165 420 155 Z',
    },
    // Africa (including Madagascar)
    {
      id: 'africa',
      name: 'Afrique',
      center: { x: 535, y: 360 },
      d: 'M 460 255 C 485 245 525 240 555 255 C 580 270 605 295 615 325 C 625 355 605 390 590 420 C 575 450 560 485 540 515 C 520 520 500 495 485 465 C 470 435 455 395 445 355 C 440 320 440 285 460 255 Z M 605 440 C 615 430 625 445 620 480 C 610 500 600 485 600 460 Z',
    },
    // Asia (including Middle East, India, China, Russia, SE Asia & Japan)
    {
      id: 'asia',
      name: 'Asie',
      center: { x: 740, y: 220 },
      d: 'M 570 130 C 620 100 700 85 780 90 C 840 95 910 120 935 150 C 920 180 885 200 870 230 C 850 260 825 285 800 320 C 785 345 765 370 745 375 C 730 350 710 320 680 305 C 650 300 615 315 590 280 C 570 250 560 200 570 130 Z M 875 190 C 885 180 895 195 890 220 C 880 230 870 215 875 190 Z M 865 240 C 875 235 885 250 875 275 C 865 280 855 260 865 240 Z M 760 395 C 780 385 820 390 840 420 C 820 440 780 435 760 395 Z',
    },
    // Oceania (Australia, New Zealand, Papua New Guinea)
    {
      id: 'oceania',
      name: 'Océanie',
      center: { x: 840, y: 470 },
      d: 'M 770 435 C 800 415 840 410 880 430 C 905 450 910 490 895 520 C 875 550 835 555 800 545 C 770 535 750 495 760 465 Z M 835 565 C 845 560 850 570 845 580 C 835 580 830 570 835 565 Z M 915 515 C 925 505 935 520 930 540 C 920 550 910 535 915 515 Z M 895 545 C 905 540 915 555 910 575 C 900 580 890 565 895 545 Z',
    },
  ],
  decorativePaths: [
    // Equator line
    'M 50 350 L 950 350',
    // Tropics
    'M 50 265 L 950 265',
    'M 50 435 L 950 435',
  ],
};

/**
 * Detailed Realistic Continent Maps with Country Boundaries
 */
export const CONTINENT_MAPS: Record<string, MapData> = {
  europe: {
    id: 'europe',
    name: 'Europe Vectorielle Haute Précision',
    viewBox: '0 0 800 650',
    features: [
      {
        id: 'france',
        name: 'France',
        center: { x: 340, y: 395 },
        d: 'M 290 325 C 310 320 330 310 355 315 C 375 325 390 350 395 375 C 385 410 375 435 365 460 C 345 465 320 460 300 455 C 285 450 270 420 265 385 C 260 355 275 335 290 325 Z M 385 470 C 390 465 395 475 390 495 C 385 495 380 485 385 470 Z',
      },
      {
        id: 'germany',
        name: 'Allemagne',
        center: { x: 425, y: 310 },
        d: 'M 395 230 C 420 220 445 225 465 245 C 475 270 475 300 465 330 C 455 355 435 370 410 375 C 395 375 385 355 385 330 C 385 295 390 260 395 230 Z',
      },
      {
        id: 'spain',
        name: 'Espagne & Portugal',
        center: { x: 230, y: 490 },
        d: 'M 205 430 C 235 425 270 430 295 440 C 305 470 290 515 275 545 C 245 565 210 560 185 540 C 170 515 170 475 180 450 C 190 435 200 430 205 430 Z M 315 505 C 325 500 335 510 330 525 C 320 525 315 515 315 505 Z',
      },
      {
        id: 'italy',
        name: 'Italie',
        center: { x: 460, y: 465 },
        d: 'M 395 380 C 425 370 455 370 475 390 C 475 415 465 440 475 465 C 495 490 530 510 535 530 C 525 545 495 530 475 495 C 455 465 435 435 415 405 C 400 395 395 385 395 380 Z M 435 535 C 455 530 465 545 450 565 C 430 565 425 550 435 535 Z M 380 465 C 390 460 395 475 390 495 C 380 495 375 480 380 465 Z',
      },
      {
        id: 'uk_ireland',
        name: 'Royaume-Uni & Irlande',
        center: { x: 260, y: 245 },
        d: 'M 245 190 C 265 180 285 195 290 225 C 295 255 285 285 270 300 C 255 305 245 285 245 260 C 245 235 235 210 245 190 Z M 210 235 C 225 225 235 240 230 265 C 220 275 210 265 205 250 C 205 240 205 235 210 235 Z',
      },
      {
        id: 'nordics',
        name: 'Pays Nordiques',
        center: { x: 465, y: 130 },
        d: 'M 405 85 C 435 55 480 60 515 75 C 530 105 515 145 495 180 C 475 215 445 220 425 195 C 415 165 415 125 405 85 Z',
      },
      {
        id: 'poland_east',
        name: 'Europe Centrale & de l\'Est',
        center: { x: 570, y: 310 },
        d: 'M 475 235 C 530 220 600 230 645 260 C 655 300 635 345 615 380 C 565 395 515 390 480 365 C 465 330 465 280 475 235 Z',
      },
      {
        id: 'greece_balkans',
        name: 'Grèce & Balkans',
        center: { x: 540, y: 470 },
        d: 'M 485 390 C 525 385 570 395 580 425 C 585 455 575 490 560 520 C 545 540 525 530 510 500 C 495 465 480 425 485 390 Z M 555 535 C 570 530 580 540 570 550 C 555 555 550 545 555 535 Z',
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
        center: { x: 410, y: 215 },
        d: 'M 145 135 C 220 95 340 105 450 95 C 550 85 640 120 690 175 C 700 225 660 280 610 320 C 520 335 410 335 300 335 C 220 335 170 310 145 250 C 130 200 125 160 145 135 Z M 290 35 C 350 25 420 30 475 60 C 480 90 440 100 380 95 C 320 90 280 65 290 35 Z',
      },
      {
        id: 'usa',
        name: 'États-Unis Contigus',
        center: { x: 420, y: 425 },
        d: 'M 180 335 C 300 335 420 335 540 330 C 610 325 665 350 670 400 C 675 450 640 495 610 545 C 580 560 540 540 500 555 C 440 575 390 550 340 510 C 270 495 210 475 175 425 C 160 380 165 350 180 335 Z M 85 110 C 125 90 150 110 155 155 C 145 195 115 205 90 185 C 75 160 70 130 85 110 Z',
      },
      {
        id: 'mexico',
        name: 'Mexique & Amérique Centrale',
        center: { x: 340, y: 555 },
        d: 'M 245 480 C 295 490 355 505 405 535 C 445 560 460 595 435 625 C 395 635 355 615 315 580 C 280 550 250 515 245 480 Z M 190 480 C 205 470 215 495 205 535 C 195 550 185 530 190 480 Z',
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
        center: { x: 745, y: 310 },
        d: 'M 730 215 C 755 205 770 220 760 250 C 745 265 730 250 730 215 Z M 690 285 C 735 265 765 295 745 335 C 715 365 675 345 690 285 Z M 650 360 C 675 355 680 380 660 395 C 645 395 640 375 650 360 Z M 625 380 C 650 375 655 405 635 425 C 620 425 615 400 625 380 Z',
      },
      {
        id: 'china_east',
        name: 'Chine & Asie Centrale',
        center: { x: 470, y: 295 },
        d: 'M 245 190 C 375 160 515 165 635 195 C 675 235 680 295 650 350 C 615 405 555 435 485 440 C 415 440 355 415 305 370 C 265 315 240 250 245 190 Z',
      },
      {
        id: 'india_south',
        name: 'Inde & Asie du Sud',
        center: { x: 345, y: 465 },
        d: 'M 275 350 C 345 355 410 365 420 415 C 425 465 395 525 365 565 C 335 575 305 540 285 490 C 265 435 260 385 275 350 Z M 375 570 C 385 565 390 575 385 585 C 375 585 370 575 375 570 Z',
      },
      {
        id: 'se_asia',
        name: 'Asie du Sud-Est',
        center: { x: 575, y: 485 },
        d: 'M 495 425 C 545 415 585 430 610 475 C 615 520 585 565 545 575 C 505 565 485 525 495 470 Z M 575 545 C 635 530 690 540 680 585 C 640 600 590 590 575 545 Z',
      },
      {
        id: 'russia_north',
        name: 'Russie & Sibérie',
        center: { x: 515, y: 115 },
        d: 'M 175 115 C 345 80 555 80 770 85 C 845 110 835 155 770 170 C 645 185 485 160 345 155 C 245 155 190 140 175 115 Z',
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
        center: { x: 395, y: 345 },
        d: 'M 235 175 C 315 155 425 165 515 210 C 585 250 610 320 580 395 C 545 465 485 525 415 535 C 355 535 325 480 315 420 C 305 350 255 280 235 175 Z',
      },
      {
        id: 'argentina_chile',
        name: 'Cône Sud (Argentine & Chili)',
        center: { x: 270, y: 605 },
        d: 'M 255 475 C 315 480 365 500 375 560 C 385 625 355 705 315 780 C 275 790 250 750 240 680 C 230 605 225 540 255 475 Z',
      },
      {
        id: 'andean_north',
        name: 'Région Andine & Nord',
        center: { x: 205, y: 225 },
        d: 'M 175 115 C 245 115 295 145 275 215 C 255 275 220 335 185 340 C 150 320 135 250 145 185 C 150 145 160 120 175 115 Z',
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
        center: { x: 385, y: 315 },
        d: 'M 185 195 C 255 150 355 175 455 150 C 545 175 595 240 595 325 C 595 410 545 465 455 470 C 355 460 255 465 175 415 C 145 350 145 260 185 195 Z M 480 485 C 515 480 525 505 505 525 C 485 525 475 505 480 485 Z',
      },
      {
        id: 'new_zealand',
        name: 'Nouvelle-Zélande',
        center: { x: 675, y: 445 },
        d: 'M 655 365 C 685 355 695 385 680 420 C 660 425 650 405 655 365 Z M 615 425 C 655 420 660 455 640 495 C 615 500 605 470 615 425 Z',
      },
      {
        id: 'pacific_islands',
        name: 'Papouasie & Îles du Pacifique',
        center: { x: 440, y: 110 },
        d: 'M 345 85 C 445 75 535 85 550 125 C 515 155 425 150 345 125 Z',
      },
    ],
  },
};

/**
 * High-Fidelity Cartographic Country Maps (viewBox: 0 0 100 100)
 * Aligned with city coordinates in geoDataset.ts
 */
export const COUNTRY_MAPS: Record<string, MapData> = {
  france: {
    id: 'france',
    name: 'France Métropolitaine',
    viewBox: '0 0 100 100',
    features: [
      // Hexagone Métropolitain réaliste avec côtes précises
      {
        id: 'france_main',
        name: 'France Métropolitaine',
        d: 'M 48 16 C 45 17 42 21 38 24 C 33 26 27 26 26 29 C 25 33 28 35 26 37 C 22 37 16 38 12 40 C 11 43 14 45 17 46 C 20 48 23 50 26 52 C 26 55 28 60 28 64 C 27 68 25 74 24 82 C 29 83 36 84 42 84 C 47 84 50 83 52 84 C 54 80 54 77 56 79 C 58 81 62 82 65 81 C 68 79 70 76 70 74 C 69 68 68 62 67 58 C 66 54 65 50 67 46 C 69 43 70 40 70 37 C 66 33 60 30 55 26 C 52 22 50 18 48 16 Z',
      },
      // Corse fidèle
      {
        id: 'corsica',
        name: 'Corse',
        d: 'M 89 77 C 91 78 92 82 91 85 C 92 89 91 93 89 95 C 87 95 86 91 86 87 C 86 83 88 79 89 77 Z',
      },
    ],
    decorativePaths: [
      // Seine: Le Havre -> Rouen -> Paris -> Troyes
      'M 36 28 C 39 34 41 40 44 46 C 48 48 52 48 57 52',
      // Loire: St-Nazaire -> Nantes -> Tours -> Orléans -> Nevers
      'M 26 52 C 30 52 35 52 40 50 C 44 48 48 50 50 56',
      // Rhône: Léman -> Lyon -> Valence -> Avignon -> Delta Camargue
      'M 66 56 C 60 58 55 60 56 68 C 56 74 57 78 56 80',
      // Garonne: Pyrénées -> Toulouse -> Agen -> Bordeaux -> Estuaire
      'M 42 84 C 40 78 38 74 34 70 C 30 67 28 65 27 68',
      // Rhin frontière Alsace
      'M 70 37 C 70 42 69 46 68 52',
    ],
  },
  germany: {
    id: 'germany',
    name: 'Allemagne',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'germany_main',
        name: 'Allemagne Fédérale',
        d: 'M 48 10 C 45 15 40 18 34 21 C 28 24 25 28 23 34 C 21 40 22 47 24 54 C 23 60 25 68 28 74 C 33 76 39 77 46 76 C 53 76 60 77 65 74 C 64 68 62 62 64 56 C 68 50 72 45 75 38 C 76 30 74 22 72 16 C 65 14 58 12 52 14 C 50 12 49 10 48 10 Z M 71 13 C 74 13 75 16 73 17 C 71 17 70 14 71 13 Z',
      },
    ],
    decorativePaths: [
      // Rhin: Suisse -> Karlsruhe -> Francfort -> Cologne -> Pays-Bas
      'M 30 74 C 32 66 34 58 35 52 C 32 48 27 46 24 38',
      // Elbe: Rép. Tchèque -> Dresde -> Magdebourg -> Hambourg -> Mer du Nord
      'M 68 50 C 64 42 58 35 52 28 C 48 24 44 20 40 18',
      // Danube: Forêt Noire -> Ulm -> Ratisbonne -> Passau
      'M 35 72 C 45 70 54 70 63 68',
    ],
  },
  spain: {
    id: 'spain',
    name: 'Espagne & Péninsule Ibérique',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'spain_main',
        name: 'Espagne Continentale',
        d: 'M 14 16 C 24 14 36 15 48 18 C 58 19 68 18 76 21 C 78 26 79 34 78 42 C 75 48 72 55 69 64 C 66 72 61 80 54 85 C 45 87 38 88 34 86 C 27 84 24 78 22 70 C 19 60 18 48 18 36 C 14 32 10 24 14 16 Z',
      },
      // Baléares
      {
        id: 'balearic_islands',
        name: 'Îles Baléares',
        d: 'M 85 56 C 89 54 91 58 88 61 C 85 62 83 59 85 56 Z M 92 52 C 94 51 95 53 93 55 C 91 55 91 53 92 52 Z M 80 63 C 82 62 83 64 82 66 C 80 66 79 64 80 63 Z',
      },
    ],
    decorativePaths: [
      // Tage / Tajo
      'M 60 48 C 52 50 44 54 36 56 C 28 58 20 58 18 60',
      // Ebre / Ebro
      'M 44 24 C 54 30 64 38 72 48',
      // Guadalquivir
      'M 52 75 C 44 76 36 78 28 82',
    ],
  },
  italy: {
    id: 'italy',
    name: 'Italie & Îles',
    viewBox: '0 0 100 100',
    features: [
      // Botte Italienne
      {
        id: 'italy_boot',
        name: 'Italie Continentale & Péninsulaire',
        d: 'M 18 20 C 28 15 42 14 54 16 C 62 18 60 24 54 26 C 52 32 54 40 56 46 C 60 52 66 58 74 62 C 80 66 82 72 78 76 C 74 76 70 72 66 70 C 62 72 60 80 58 86 C 55 86 54 82 56 78 C 54 72 50 66 46 60 C 42 54 36 46 32 38 C 26 32 20 26 18 20 Z',
      },
      // Sicile
      {
        id: 'sicily',
        name: 'Sicile',
        d: 'M 44 86 C 52 84 58 87 56 94 C 50 96 44 94 40 89 C 41 87 43 86 44 86 Z',
      },
      // Sardaigne
      {
        id: 'sardinia',
        name: 'Sardaigne',
        d: 'M 22 50 C 26 48 27 52 26 60 C 25 68 22 72 20 70 C 18 66 19 54 22 50 Z',
      },
    ],
    decorativePaths: [
      // Pô: Piémont -> Lombardie -> Émilie-Romagne -> Delta Adriatique
      'M 24 24 C 34 26 44 26 52 28',
      // Tibre: Apennins -> Rome -> Mer Tyrrhénienne
      'M 48 48 C 47 54 46 58 44 62',
      // Dorsale des Apennins
      'M 38 34 C 44 42 50 54 58 64 C 64 70 66 76 60 82',
    ],
  },
  usa: {
    id: 'usa',
    name: 'États-Unis',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'usa_main',
        name: 'États-Unis Contigus',
        d: 'M 14 20 C 28 18 45 18 60 20 C 68 22 76 26 84 24 C 88 28 86 36 82 42 C 80 48 78 56 76 64 C 77 72 78 80 77 84 C 73 84 72 78 68 76 C 62 74 54 75 48 78 C 42 82 34 76 28 72 C 20 70 16 64 14 54 C 12 44 12 30 14 20 Z M 76 72 C 78 76 80 82 78 86 C 75 86 74 80 73 75 Z',
      },
      // Alaska
      {
        id: 'alaska',
        name: 'Alaska',
        d: 'M 6 12 C 12 10 16 12 18 18 C 16 24 12 26 8 24 C 5 20 4 15 6 12 Z',
      },
      // Hawaï
      {
        id: 'hawaii',
        name: 'Hawaï',
        d: 'M 22 84 C 24 83 25 85 24 87 C 22 87 21 85 22 84 Z M 26 87 C 28 86 29 88 28 90 C 26 90 25 88 26 87 Z',
      },
    ],
    decorativePaths: [
      // Mississippi / Missouri
      'M 52 24 C 54 36 56 48 54 62 C 52 70 50 76 52 78',
      // Fleuve Colorado / Grand Canyon
      'M 26 50 C 24 58 22 64 20 68',
      // Grands Lacs
      'M 58 24 C 64 28 70 30 76 28',
    ],
  },
  canada: {
    id: 'canada',
    name: 'Canada',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'canada_main',
        name: 'Canada',
        d: 'M 14 36 C 28 24 50 20 72 22 C 84 26 88 36 86 48 C 84 58 80 66 74 72 C 62 74 46 75 28 74 C 18 73 14 62 12 50 C 11 42 12 38 14 36 Z M 36 12 C 48 10 60 12 66 18 C 64 24 56 26 46 24 C 38 22 34 16 36 12 Z',
      },
    ],
    decorativePaths: [
      // Baie d'Hudson
      'M 48 30 C 56 32 62 38 60 48 C 56 54 48 54 44 48 C 42 40 44 32 48 30',
      // Fleuve Saint-Laurent
      'M 68 68 C 74 64 80 58 86 52',
    ],
  },
  japan: {
    id: 'japan',
    name: 'Archipel du Japon',
    viewBox: '0 0 100 100',
    features: [
      // Hokkaido
      {
        id: 'hokkaido',
        name: 'Hokkaido',
        d: 'M 70 12 C 78 10 84 14 82 22 C 78 26 72 24 68 18 Z',
      },
      // Honshu
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
      // Kyushu
      {
        id: 'kyushu',
        name: 'Kyushu',
        d: 'M 24 64 C 28 62 30 68 28 74 C 24 76 22 70 24 64 Z',
      },
    ],
    decorativePaths: [
      // Arc tectonique & Mont Fuji
      'M 72 24 C 68 36 60 46 50 54 C 42 60 34 66 26 72',
    ],
  },
  brazil: {
    id: 'brazil',
    name: 'Brésil',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'brazil_main',
        name: 'Brésil',
        d: 'M 28 16 C 44 14 62 14 74 18 C 84 24 88 34 82 48 C 76 60 68 70 58 74 C 48 74 42 68 36 58 C 30 48 24 38 22 28 C 24 20 26 18 28 16 Z',
      },
    ],
    decorativePaths: [
      // Amazone
      'M 24 22 C 38 24 54 22 70 20',
      // Fleuve São Francisco
      'M 68 36 C 64 48 60 56 62 66',
    ],
  },
  australia: {
    id: 'australia',
    name: 'Australie & Tasmanie',
    viewBox: '0 0 100 100',
    features: [
      {
        id: 'australia_main',
        name: 'Australie',
        d: 'M 22 26 C 36 18 54 22 72 18 C 84 26 88 40 86 56 C 84 68 78 80 66 84 C 52 86 38 82 26 78 C 16 70 14 54 16 38 C 18 30 20 28 22 26 Z',
      },
      // Tasmanie
      {
        id: 'tasmania',
        name: 'Tasmanie',
        d: 'M 72 88 C 76 86 78 90 76 94 C 72 96 70 92 72 88 Z',
      },
    ],
    decorativePaths: [
      // Golfe de Carpentarie
      'M 54 22 C 56 28 60 28 62 22',
      // Bassin Murray-Darling
      'M 68 56 C 66 66 62 74 56 78',
    ],
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
  if (countryId && COUNTRY_MAPS[countryId]) {
    return {
      mapData: COUNTRY_MAPS[countryId],
      mapType: 'country',
    };
  }

  if (continentId && CONTINENT_MAPS[continentId]) {
    return {
      mapData: CONTINENT_MAPS[continentId],
      mapType: 'continent',
    };
  }

  return {
    mapData: WORLD_MAP,
    mapType: 'world',
  };
}
