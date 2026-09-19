import { Continent, Country, City } from '@/types/geo';

export const CONTINENTS_DATA: Continent[] = [
  {
    "id": "europe",
    "name": "Europe",
    "code": "EU",
    "centerCoords": {
      "lat": 50,
      "lng": 10,
      "x": 52,
      "y": 30
    },
    "countries": [
      {
        "id": "france",
        "name": "France",
        "continentId": "europe",
        "capital": "Paris",
        "capitalCoords": {
          "lat": 48.8566,
          "lng": 2.3522,
          "x": 44,
          "y": 46
        },
        "flag": "🇫🇷",
        "centerCoords": {
          "lat": 46.603354,
          "lng": 1.888334,
          "x": 45,
          "y": 50
        },
        "description": "Pays réputé pour son patrimoine historique, ses châteaux et sa gastronomie.",
        "cities": [
          {
            "id": "paris",
            "name": "Paris",
            "countryId": "france",
            "isCapital": true,
            "coords": {
              "lat": 48.8566,
              "lng": 2.3522,
              "x": 44,
              "y": 46
            },
            "population": "2.1 M",
            "region": "Île-de-France",
            "description": "Capitale de la France, célèbre pour la Tour Eiffel et le Louvre."
          },
          {
            "id": "marseille",
            "name": "Marseille",
            "countryId": "france",
            "isCapital": false,
            "coords": {
              "lat": 43.2965,
              "lng": 5.3698,
              "x": 57,
              "y": 78
            },
            "population": "870 k",
            "region": "PACA",
            "description": "Grand port méditerranéen et cité des Calanques."
          },
          {
            "id": "lyon",
            "name": "Lyon",
            "countryId": "france",
            "isCapital": false,
            "coords": {
              "lat": 45.764,
              "lng": 4.8357,
              "x": 55,
              "y": 60
            },
            "population": "522 k",
            "region": "Auvergne-Rhône-Alpes",
            "description": "Capitale de la gastronomie française."
          },
          {
            "id": "toulouse",
            "name": "Toulouse",
            "countryId": "france",
            "isCapital": false,
            "coords": {
              "lat": 43.6047,
              "lng": 1.4442,
              "x": 38,
              "y": 74
            },
            "population": "498 k",
            "region": "Occitanie",
            "description": "La Ville Rose, capitale aéronautique."
          },
          {
            "id": "nice",
            "name": "Nice",
            "countryId": "france",
            "isCapital": false,
            "coords": {
              "lat": 43.7102,
              "lng": 7.262,
              "x": 67,
              "y": 76
            },
            "population": "342 k",
            "region": "Côte d'Azur",
            "description": "Perle de la baie des Anges."
          },
          {
            "id": "bordeaux",
            "name": "Bordeaux",
            "countryId": "france",
            "isCapital": false,
            "coords": {
              "lat": 44.8378,
              "lng": -0.5792,
              "x": 28,
              "y": 65
            },
            "population": "260 k",
            "region": "Nouvelle-Aquitaine",
            "description": "Capitale mondiale du vin."
          },
          {
            "id": "strasbourg",
            "name": "Strasbourg",
            "countryId": "france",
            "isCapital": false,
            "coords": {
              "lat": 48.5734,
              "lng": 7.7521,
              "x": 68,
              "y": 45
            },
            "population": "290 k",
            "region": "Grand Est",
            "description": "Siège du Parlement européen."
          }
        ]
      },
      {
        "id": "germany",
        "name": "Allemagne",
        "continentId": "europe",
        "capital": "Berlin",
        "capitalCoords": {
          "lat": 52.52,
          "lng": 13.405,
          "x": 64,
          "y": 35
        },
        "flag": "🇩🇪",
        "centerCoords": {
          "lat": 51.1657,
          "lng": 10.4515,
          "x": 55,
          "y": 42
        },
        "description": "Moteur économique et industriel d'Europe centrale.",
        "cities": [
          {
            "id": "berlin",
            "name": "Berlin",
            "countryId": "germany",
            "isCapital": true,
            "coords": {
              "lat": 52.52,
              "lng": 13.405,
              "x": 64,
              "y": 35
            },
            "population": "3.6 M",
            "region": "Berlin",
            "description": "Capitale dynamique et historique."
          },
          {
            "id": "hamburg",
            "name": "Hambourg",
            "countryId": "germany",
            "isCapital": false,
            "coords": {
              "lat": 53.5511,
              "lng": 9.9937,
              "x": 48,
              "y": 22
            },
            "population": "1.8 M",
            "region": "Hambourg",
            "description": "Grand port maritime de l'Elbe."
          },
          {
            "id": "munich",
            "name": "Munich",
            "countryId": "germany",
            "isCapital": false,
            "coords": {
              "lat": 48.1351,
              "lng": 11.582,
              "x": 58,
              "y": 68
            },
            "population": "1.5 M",
            "region": "Bavière",
            "description": "Capitale bavaroise aux portes des Alpes."
          },
          {
            "id": "cologne",
            "name": "Cologne",
            "countryId": "germany",
            "isCapital": false,
            "coords": {
              "lat": 50.9375,
              "lng": 6.9603,
              "x": 26,
              "y": 45
            },
            "population": "1.1 M",
            "region": "Rhénanie",
            "description": "Célèbre pour sa cathédrale gothique."
          },
          {
            "id": "frankfurt",
            "name": "Francfort",
            "countryId": "germany",
            "isCapital": false,
            "coords": {
              "lat": 50.1109,
              "lng": 8.6821,
              "x": 36,
              "y": 52
            },
            "population": "760 k",
            "region": "Hesse",
            "description": "Cœur financier de l'Union Européenne."
          }
        ]
      },
      {
        "id": "spain",
        "name": "Espagne",
        "continentId": "europe",
        "capital": "Madrid",
        "capitalCoords": {
          "lat": 40.4168,
          "lng": -3.7038,
          "x": 48,
          "y": 52
        },
        "flag": "🇪🇸",
        "centerCoords": {
          "lat": 40.4637,
          "lng": -3.7492,
          "x": 48,
          "y": 52
        },
        "description": "Pays ibérique réputé pour son soleil, ses côtes et son architecture.",
        "cities": [
          {
            "id": "madrid",
            "name": "Madrid",
            "countryId": "spain",
            "isCapital": true,
            "coords": {
              "lat": 40.4168,
              "lng": -3.7038,
              "x": 48,
              "y": 52
            },
            "population": "3.3 M",
            "region": "Madrid",
            "description": "Capitale royale au centre de l'Espagne."
          },
          {
            "id": "barcelona",
            "name": "Barcelone",
            "countryId": "spain",
            "isCapital": false,
            "coords": {
              "lat": 41.3879,
              "lng": 2.1699,
              "x": 78,
              "y": 42
            },
            "population": "1.6 M",
            "region": "Catalogne",
            "description": "Capitale catalane avec la Sagrada Família."
          },
          {
            "id": "valencia",
            "name": "Valence",
            "countryId": "spain",
            "isCapital": false,
            "coords": {
              "lat": 39.4699,
              "lng": -0.3763,
              "x": 68,
              "y": 60
            },
            "population": "800 k",
            "region": "Valence",
            "description": "Cité méditerranéenne des arts et des sciences."
          },
          {
            "id": "seville",
            "name": "Séville",
            "countryId": "spain",
            "isCapital": false,
            "coords": {
              "lat": 37.3891,
              "lng": -5.9845,
              "x": 32,
              "y": 78
            },
            "population": "690 k",
            "region": "Andalousie",
            "description": "Cœur vibrant de l'Andalousie."
          },
          {
            "id": "bilbao",
            "name": "Bilbao",
            "countryId": "spain",
            "isCapital": false,
            "coords": {
              "lat": 43.263,
              "lng": -2.935,
              "x": 46,
              "y": 20
            },
            "population": "345 k",
            "region": "Pays Basque",
            "description": "Cité basque du musée Guggenheim."
          }
        ]
      },
      {
        "id": "italy",
        "name": "Italie",
        "continentId": "europe",
        "capital": "Rome",
        "capitalCoords": {
          "lat": 41.9028,
          "lng": 12.4964,
          "x": 48,
          "y": 62
        },
        "flag": "🇮🇹",
        "centerCoords": {
          "lat": 41.8719,
          "lng": 12.5674,
          "x": 48,
          "y": 62
        },
        "description": "Péninsule méditerranéenne berceau de la Renaissance et de l'art antique.",
        "cities": [
          {
            "id": "rome",
            "name": "Rome",
            "countryId": "italy",
            "isCapital": true,
            "coords": {
              "lat": 41.9028,
              "lng": 12.4964,
              "x": 48,
              "y": 62
            },
            "population": "2.8 M",
            "region": "Latium",
            "description": "La Ville Éternelle avec le Colisée et le Vatican."
          },
          {
            "id": "milan",
            "name": "Milan",
            "countryId": "italy",
            "isCapital": false,
            "coords": {
              "lat": 45.4642,
              "lng": 9.19,
              "x": 32,
              "y": 28
            },
            "population": "1.4 M",
            "region": "Lombardie",
            "description": "Capitale de la mode et du design."
          },
          {
            "id": "naples",
            "name": "Naples",
            "countryId": "italy",
            "isCapital": false,
            "coords": {
              "lat": 40.8518,
              "lng": 14.2681,
              "x": 56,
              "y": 68
            },
            "population": "960 k",
            "region": "Campanie",
            "description": "Berceau de la pizza au pied du Vésuve."
          },
          {
            "id": "florence",
            "name": "Florence",
            "countryId": "italy",
            "isCapital": false,
            "coords": {
              "lat": 43.7696,
              "lng": 11.2558,
              "x": 44,
              "y": 42
            },
            "population": "380 k",
            "region": "Toscane",
            "description": "Joyau de la Renaissance italienne."
          },
          {
            "id": "venice",
            "name": "Venise",
            "countryId": "italy",
            "isCapital": false,
            "coords": {
              "lat": 45.4408,
              "lng": 12.3155,
              "x": 50,
              "y": 26
            },
            "population": "260 k",
            "region": "Vénétie",
            "description": "La Cité des Doges sur sa lagune."
          }
        ]
      },
      {
        "id": "uk",
        "name": "Royaume-Uni",
        "continentId": "europe",
        "capital": "Londres",
        "capitalCoords": {
          "lat": 51.5074,
          "lng": -0.1278,
          "x": 26,
          "y": 25
        },
        "flag": "🇬🇧",
        "centerCoords": {
          "lat": 55.3781,
          "lng": -3.436,
          "x": 26,
          "y": 25
        },
        "description": "Nation insulaire composée de 4 nations historiques.",
        "cities": [
          {
            "id": "london",
            "name": "Londres",
            "countryId": "uk",
            "isCapital": true,
            "coords": {
              "lat": 51.5074,
              "lng": -0.1278,
              "x": 26,
              "y": 25
            },
            "population": "8.9 M",
            "region": "Londres",
            "description": "Mégalopole bordant la Tamise."
          },
          {
            "id": "edinburgh",
            "name": "Édimbourg",
            "countryId": "uk",
            "isCapital": false,
            "coords": {
              "lat": 55.9533,
              "lng": -3.1883,
              "x": 25,
              "y": 15
            },
            "population": "540 k",
            "region": "Écosse",
            "description": "Capitale historique de l'Écosse."
          },
          {
            "id": "manchester",
            "name": "Manchester",
            "countryId": "uk",
            "isCapital": false,
            "coords": {
              "lat": 53.4808,
              "lng": -2.2426,
              "x": 24,
              "y": 22
            },
            "population": "550 k",
            "region": "Nord-Ouest",
            "description": "Pôle industriel et musical."
          },
          {
            "id": "birmingham",
            "name": "Birmingham",
            "countryId": "uk",
            "isCapital": false,
            "coords": {
              "lat": 52.4862,
              "lng": -1.8904,
              "x": 25,
              "y": 24
            },
            "population": "1.1 M",
            "region": "Midlands",
            "description": "Deuxième ville britannique."
          },
          {
            "id": "liverpool",
            "name": "Liverpool",
            "countryId": "uk",
            "isCapital": false,
            "coords": {
              "lat": 53.4084,
              "lng": -2.9916,
              "x": 23,
              "y": 22
            },
            "population": "500 k",
            "region": "Nord-Ouest",
            "description": "Port maritime et berceau des Beatles."
          }
        ]
      },
      {
        "id": "portugal",
        "name": "Portugal",
        "continentId": "europe",
        "capital": "Lisbonne",
        "capitalCoords": {
          "lat": 38.7223,
          "lng": -9.1393,
          "x": 18,
          "y": 55
        },
        "flag": "🇵🇹",
        "centerCoords": {
          "lat": 39.3999,
          "lng": -8.2245,
          "x": 18,
          "y": 55
        },
        "description": "Pays atlantique célèbre pour ses navigateurs et ses azulejos.",
        "cities": [
          {
            "id": "lisbon",
            "name": "Lisbonne",
            "countryId": "portugal",
            "isCapital": true,
            "coords": {
              "lat": 38.7223,
              "lng": -9.1393,
              "x": 18,
              "y": 55
            },
            "population": "545 k",
            "region": "Lisbonne",
            "description": "Capitale aux sept collines sur le Tage."
          },
          {
            "id": "porto",
            "name": "Porto",
            "countryId": "portugal",
            "isCapital": false,
            "coords": {
              "lat": 41.1579,
              "lng": -8.6291,
              "x": 18,
              "y": 45
            },
            "population": "230 k",
            "region": "Nord",
            "description": "Célèbre pour ses ponts sur le Douro."
          },
          {
            "id": "braga",
            "name": "Braga",
            "countryId": "portugal",
            "isCapital": false,
            "coords": {
              "lat": 41.5454,
              "lng": -8.4265,
              "x": 19,
              "y": 42
            },
            "population": "190 k",
            "region": "Nord",
            "description": "Cité des archevêques."
          },
          {
            "id": "coimbra",
            "name": "Coimbra",
            "countryId": "portugal",
            "isCapital": false,
            "coords": {
              "lat": 40.2033,
              "lng": -8.4103,
              "x": 19,
              "y": 50
            },
            "population": "140 k",
            "region": "Centre",
            "description": "Prestigieuse cité universitaire."
          },
          {
            "id": "faro",
            "name": "Faro",
            "countryId": "portugal",
            "isCapital": false,
            "coords": {
              "lat": 37.0194,
              "lng": -7.9304,
              "x": 19,
              "y": 65
            },
            "population": "65 k",
            "region": "Algarve",
            "description": "Capitale de l'Algarve ensoleillée."
          }
        ]
      },
      {
        "id": "netherlands",
        "name": "Pays-Bas",
        "continentId": "europe",
        "capital": "Amsterdam",
        "capitalCoords": {
          "lat": 52.3676,
          "lng": 4.9041,
          "x": 38,
          "y": 28
        },
        "flag": "🇳🇱",
        "centerCoords": {
          "lat": 52.1326,
          "lng": 5.2913,
          "x": 38,
          "y": 28
        },
        "description": "Pays réputé pour ses canaux, ses moulins et ses tulipes.",
        "cities": [
          {
            "id": "amsterdam",
            "name": "Amsterdam",
            "countryId": "netherlands",
            "isCapital": true,
            "coords": {
              "lat": 52.3676,
              "lng": 4.9041,
              "x": 38,
              "y": 28
            },
            "population": "870 k",
            "region": "Hollande",
            "description": "Capitale des canaux classés."
          },
          {
            "id": "rotterdam",
            "name": "Rotterdam",
            "countryId": "netherlands",
            "isCapital": false,
            "coords": {
              "lat": 51.9244,
              "lng": 4.4777,
              "x": 37,
              "y": 30
            },
            "population": "650 k",
            "region": "Hollande",
            "description": "Plus grand port maritime d'Europe."
          },
          {
            "id": "the_hague",
            "name": "La Haye",
            "countryId": "netherlands",
            "isCapital": false,
            "coords": {
              "lat": 52.0705,
              "lng": 4.3007,
              "x": 36,
              "y": 29
            },
            "population": "540 k",
            "region": "Hollande",
            "description": "Siège du gouvernement et de la Cour de Justice."
          },
          {
            "id": "utrecht",
            "name": "Utrecht",
            "countryId": "netherlands",
            "isCapital": false,
            "coords": {
              "lat": 52.0907,
              "lng": 5.1214,
              "x": 39,
              "y": 29
            },
            "population": "360 k",
            "region": "Utrecht",
            "description": "Cité universitaire historique."
          },
          {
            "id": "eindhoven",
            "name": "Eindhoven",
            "countryId": "netherlands",
            "isCapital": false,
            "coords": {
              "lat": 51.4416,
              "lng": 5.4697,
              "x": 40,
              "y": 32
            },
            "population": "235 k",
            "region": "Brabant",
            "description": "Pôle d'innovation technologique."
          }
        ]
      },
      {
        "id": "belgium",
        "name": "Belgique",
        "continentId": "europe",
        "capital": "Bruxelles",
        "capitalCoords": {
          "lat": 50.8503,
          "lng": 4.3517,
          "x": 36,
          "y": 32
        },
        "flag": "🇧🇪",
        "centerCoords": {
          "lat": 50.5039,
          "lng": 4.4699,
          "x": 36,
          "y": 32
        },
        "description": "Royaume au cœur de l'Union Européenne.",
        "cities": [
          {
            "id": "brussels",
            "name": "Bruxelles",
            "countryId": "belgium",
            "isCapital": true,
            "coords": {
              "lat": 50.8503,
              "lng": 4.3517,
              "x": 36,
              "y": 32
            },
            "population": "1.2 M",
            "region": "Bruxelles",
            "description": "Capitale européenne avec l'Atomium."
          },
          {
            "id": "antwerp",
            "name": "Anvers",
            "countryId": "belgium",
            "isCapital": false,
            "coords": {
              "lat": 51.2194,
              "lng": 4.4025,
              "x": 37,
              "y": 30
            },
            "population": "530 k",
            "region": "Flandre",
            "description": "Capitale mondiale du diamant."
          },
          {
            "id": "ghent",
            "name": "Gand",
            "countryId": "belgium",
            "isCapital": false,
            "coords": {
              "lat": 51.0543,
              "lng": 3.7174,
              "x": 35,
              "y": 31
            },
            "population": "265 k",
            "region": "Flandre",
            "description": "Cité médiévale aux superbes canaux."
          },
          {
            "id": "charleroi",
            "name": "Charleroi",
            "countryId": "belgium",
            "isCapital": false,
            "coords": {
              "lat": 50.4108,
              "lng": 4.4446,
              "x": 36,
              "y": 34
            },
            "population": "200 k",
            "region": "Wallonie",
            "description": "Grande métropole wallonne."
          },
          {
            "id": "liege",
            "name": "Liège",
            "countryId": "belgium",
            "isCapital": false,
            "coords": {
              "lat": 50.6326,
              "lng": 5.5797,
              "x": 39,
              "y": 33
            },
            "population": "195 k",
            "region": "Wallonie",
            "description": "La Cité ardente sur la Meuse."
          }
        ]
      },
      {
        "id": "switzerland",
        "name": "Suisse",
        "continentId": "europe",
        "capital": "Berne",
        "capitalCoords": {
          "lat": 46.948,
          "lng": 7.4474,
          "x": 44,
          "y": 44
        },
        "flag": "🇨🇭",
        "centerCoords": {
          "lat": 46.8182,
          "lng": 8.2275,
          "x": 44,
          "y": 44
        },
        "description": "Confédération alpine réputée pour ses montagnes et sa neutralité.",
        "cities": [
          {
            "id": "bern",
            "name": "Berne",
            "countryId": "switzerland",
            "isCapital": true,
            "coords": {
              "lat": 46.948,
              "lng": 7.4474,
              "x": 44,
              "y": 44
            },
            "population": "135 k",
            "region": "Berne",
            "description": "Capitale fédérale sur l'Aar."
          },
          {
            "id": "zurich",
            "name": "Zurich",
            "countryId": "switzerland",
            "isCapital": false,
            "coords": {
              "lat": 47.3769,
              "lng": 8.5417,
              "x": 46,
              "y": 42
            },
            "population": "420 k",
            "region": "Zurich",
            "description": "Plus grande métropole financière suisse."
          },
          {
            "id": "geneva",
            "name": "Genève",
            "countryId": "switzerland",
            "isCapital": false,
            "coords": {
              "lat": 46.2044,
              "lng": 6.1432,
              "x": 42,
              "y": 46
            },
            "population": "200 k",
            "region": "Genève",
            "description": "Cité internationale sur le lac Léman."
          },
          {
            "id": "basel",
            "name": "Bâle",
            "countryId": "switzerland",
            "isCapital": false,
            "coords": {
              "lat": 47.5596,
              "lng": 7.5886,
              "x": 44,
              "y": 41
            },
            "population": "175 k",
            "region": "Bâle",
            "description": "Cité rhénane au tripoint frontalier."
          },
          {
            "id": "lausanne",
            "name": "Lausanne",
            "countryId": "switzerland",
            "isCapital": false,
            "coords": {
              "lat": 46.5197,
              "lng": 6.6323,
              "x": 43,
              "y": 45
            },
            "population": "140 k",
            "region": "Vaud",
            "description": "Capitale olympique face aux Alpes."
          }
        ]
      },
      {
        "id": "greece",
        "name": "Grèce",
        "continentId": "europe",
        "capital": "Athènes",
        "capitalCoords": {
          "lat": 37.9838,
          "lng": 23.7275,
          "x": 68,
          "y": 68
        },
        "flag": "🇬🇷",
        "centerCoords": {
          "lat": 39.0742,
          "lng": 21.8243,
          "x": 68,
          "y": 68
        },
        "description": "Berceau de la démocratie et de la philosophie occidentale.",
        "cities": [
          {
            "id": "athens",
            "name": "Athènes",
            "countryId": "greece",
            "isCapital": true,
            "coords": {
              "lat": 37.9838,
              "lng": 23.7275,
              "x": 68,
              "y": 68
            },
            "population": "3.1 M",
            "region": "Attique",
            "description": "Capitale dominée par l'Acropole."
          },
          {
            "id": "thessaloniki",
            "name": "Thessalonique",
            "countryId": "greece",
            "isCapital": false,
            "coords": {
              "lat": 40.6401,
              "lng": 22.9444,
              "x": 67,
              "y": 62
            },
            "population": "800 k",
            "region": "Macédoine",
            "description": "Grand port de la mer Égée."
          },
          {
            "id": "patras",
            "name": "Patras",
            "countryId": "greece",
            "isCapital": false,
            "coords": {
              "lat": 38.2466,
              "lng": 21.7346,
              "x": 65,
              "y": 67
            },
            "population": "170 k",
            "region": "Péloponnèse",
            "description": "Porte d'entrée du Péloponnèse."
          },
          {
            "id": "heraklion",
            "name": "Héraklion",
            "countryId": "greece",
            "isCapital": false,
            "coords": {
              "lat": 35.3387,
              "lng": 25.1442,
              "x": 72,
              "y": 76
            },
            "population": "175 k",
            "region": "Crète",
            "description": "Capitale de l'île de Crète."
          },
          {
            "id": "larissa",
            "name": "Larissa",
            "countryId": "greece",
            "isCapital": false,
            "coords": {
              "lat": 39.639,
              "lng": 22.4191,
              "x": 66,
              "y": 64
            },
            "population": "145 k",
            "region": "Thessalie",
            "description": "Centre agricole thessalien."
          }
        ]
      },
      {
        "id": "poland",
        "name": "Pologne",
        "continentId": "europe",
        "capital": "Varsovie",
        "capitalCoords": {
          "lat": 52.2297,
          "lng": 21.0122,
          "x": 65,
          "y": 28
        },
        "flag": "🇵🇱",
        "centerCoords": {
          "lat": 51.9194,
          "lng": 19.1451,
          "x": 65,
          "y": 28
        },
        "description": "Grand pays d'Europe centrale au riche patrimoine.",
        "cities": [
          {
            "id": "warsaw",
            "name": "Varsovie",
            "countryId": "poland",
            "isCapital": true,
            "coords": {
              "lat": 52.2297,
              "lng": 21.0122,
              "x": 65,
              "y": 28
            },
            "population": "1.8 M",
            "region": "Mazovie",
            "description": "Capitale sur la Vistule."
          },
          {
            "id": "krakow",
            "name": "Cracovie",
            "countryId": "poland",
            "isCapital": false,
            "coords": {
              "lat": 50.0647,
              "lng": 19.945,
              "x": 64,
              "y": 34
            },
            "population": "780 k",
            "region": "Petite-Pologne",
            "description": "Ancienne capitale royale."
          },
          {
            "id": "wroclaw",
            "name": "Wrocław",
            "countryId": "poland",
            "isCapital": false,
            "coords": {
              "lat": 51.1079,
              "lng": 17.0385,
              "x": 60,
              "y": 32
            },
            "population": "640 k",
            "region": "Silésie",
            "description": "Cité des ponts sur l'Oder."
          },
          {
            "id": "poznan",
            "name": "Poznań",
            "countryId": "poland",
            "isCapital": false,
            "coords": {
              "lat": 52.4064,
              "lng": 16.9252,
              "x": 59,
              "y": 27
            },
            "population": "530 k",
            "region": "Grande-Pologne",
            "description": "Cité commerçante historique."
          },
          {
            "id": "gdansk",
            "name": "Gdańsk",
            "countryId": "poland",
            "isCapital": false,
            "coords": {
              "lat": 54.352,
              "lng": 18.6466,
              "x": 63,
              "y": 20
            },
            "population": "470 k",
            "region": "Poméranie",
            "description": "Grand port de la Baltique."
          }
        ]
      },
      {
        "id": "sweden",
        "name": "Suède",
        "continentId": "europe",
        "capital": "Stockholm",
        "capitalCoords": {
          "lat": 59.3293,
          "lng": 18.0686,
          "x": 58,
          "y": 15
        },
        "flag": "🇸🇪",
        "centerCoords": {
          "lat": 60.1282,
          "lng": 18.6435,
          "x": 58,
          "y": 15
        },
        "description": "Royaume scandinave réputé pour ses archipels et son design.",
        "cities": [
          {
            "id": "stockholm",
            "name": "Stockholm",
            "countryId": "sweden",
            "isCapital": true,
            "coords": {
              "lat": 59.3293,
              "lng": 18.0686,
              "x": 58,
              "y": 15
            },
            "population": "980 k",
            "region": "Stockholm",
            "description": "Capitale bâtie sur 14 îles."
          },
          {
            "id": "gothenburg",
            "name": "Göteborg",
            "countryId": "sweden",
            "isCapital": false,
            "coords": {
              "lat": 57.7089,
              "lng": 11.9746,
              "x": 52,
              "y": 18
            },
            "population": "590 k",
            "region": "Götaland",
            "description": "Principal port scandinave."
          },
          {
            "id": "malmo",
            "name": "Malmö",
            "countryId": "sweden",
            "isCapital": false,
            "coords": {
              "lat": 55.605,
              "lng": 13.0038,
              "x": 54,
              "y": 22
            },
            "population": "350 k",
            "region": "Scanie",
            "description": "Reliée au Danemark par le pont de l'Øresund."
          },
          {
            "id": "uppsala",
            "name": "Uppsala",
            "countryId": "sweden",
            "isCapital": false,
            "coords": {
              "lat": 59.8586,
              "lng": 17.6389,
              "x": 58,
              "y": 14
            },
            "population": "180 k",
            "region": "Uppsala",
            "description": "Cité universitaire renommée."
          },
          {
            "id": "linkoping",
            "name": "Linköping",
            "countryId": "sweden",
            "isCapital": false,
            "coords": {
              "lat": 58.4108,
              "lng": 15.6214,
              "x": 56,
              "y": 17
            },
            "population": "165 k",
            "region": "Östergötland",
            "description": "Pôle aéronautique et high-tech."
          }
        ]
      },
      {
        "id": "norway",
        "name": "Norvège",
        "continentId": "europe",
        "capital": "Oslo",
        "capitalCoords": {
          "lat": 59.9139,
          "lng": 10.7522,
          "x": 50,
          "y": 14
        },
        "flag": "🇳🇴",
        "centerCoords": {
          "lat": 60.472,
          "lng": 8.4689,
          "x": 50,
          "y": 14
        },
        "description": "Pays des fjords majestueux et des aurores boréales.",
        "cities": [
          {
            "id": "oslo",
            "name": "Oslo",
            "countryId": "norway",
            "isCapital": true,
            "coords": {
              "lat": 59.9139,
              "lng": 10.7522,
              "x": 50,
              "y": 14
            },
            "population": "700 k",
            "region": "Oslo",
            "description": "Capitale au fond du fjord d'Oslo."
          },
          {
            "id": "bergen",
            "name": "Bergen",
            "countryId": "norway",
            "isCapital": false,
            "coords": {
              "lat": 60.3913,
              "lng": 5.3221,
              "x": 44,
              "y": 13
            },
            "population": "290 k",
            "region": "Vestland",
            "description": "Porte d'entrée des grands fjords."
          },
          {
            "id": "trondheim",
            "name": "Trondheim",
            "countryId": "norway",
            "isCapital": false,
            "coords": {
              "lat": 63.4305,
              "lng": 10.3951,
              "x": 49,
              "y": 8
            },
            "population": "205 k",
            "region": "Trøndelag",
            "description": "Cité des rois vikings."
          },
          {
            "id": "stavanger",
            "name": "Stavanger",
            "countryId": "norway",
            "isCapital": false,
            "coords": {
              "lat": 58.969,
              "lng": 5.7331,
              "x": 45,
              "y": 16
            },
            "population": "145 k",
            "region": "Rogaland",
            "description": "Capitale pétrolière norvégienne."
          },
          {
            "id": "tromso",
            "name": "Tromsø",
            "countryId": "norway",
            "isCapital": false,
            "coords": {
              "lat": 69.6492,
              "lng": 18.9553,
              "x": 60,
              "y": 2
            },
            "population": "77 k",
            "region": "Troms",
            "description": "Capitale de l'Arctique."
          }
        ]
      },
      {
        "id": "austria",
        "name": "Autriche",
        "continentId": "europe",
        "capital": "Vienne",
        "capitalCoords": {
          "lat": 48.2082,
          "lng": 16.3738,
          "x": 58,
          "y": 38
        },
        "flag": "🇦🇹",
        "centerCoords": {
          "lat": 47.5162,
          "lng": 14.5501,
          "x": 58,
          "y": 38
        },
        "description": "République alpine réputée pour sa musique et ses palais.",
        "cities": [
          {
            "id": "vienna",
            "name": "Vienne",
            "countryId": "austria",
            "isCapital": true,
            "coords": {
              "lat": 48.2082,
              "lng": 16.3738,
              "x": 58,
              "y": 38
            },
            "population": "1.9 M",
            "region": "Vienne",
            "description": "Capitale impériale sur le Danube."
          },
          {
            "id": "graz",
            "name": "Graz",
            "countryId": "austria",
            "isCapital": false,
            "coords": {
              "lat": 47.0707,
              "lng": 15.4395,
              "x": 57,
              "y": 41
            },
            "population": "290 k",
            "region": "Styrie",
            "description": "Deuxième ville d'Autriche."
          },
          {
            "id": "salzburg",
            "name": "Salzbourg",
            "countryId": "austria",
            "isCapital": false,
            "coords": {
              "lat": 47.8095,
              "lng": 13.055,
              "x": 53,
              "y": 40
            },
            "population": "155 k",
            "region": "Salzbourg",
            "description": "Ville natale de Mozart."
          },
          {
            "id": "innsbruck",
            "name": "Innsbruck",
            "countryId": "austria",
            "isCapital": false,
            "coords": {
              "lat": 47.2692,
              "lng": 11.4041,
              "x": 50,
              "y": 41
            },
            "population": "130 k",
            "region": "Tyrol",
            "description": "Capitale des Alpes tyroliennes."
          },
          {
            "id": "linz",
            "name": "Linz",
            "countryId": "austria",
            "isCapital": false,
            "coords": {
              "lat": 48.3064,
              "lng": 14.2858,
              "x": 55,
              "y": 38
            },
            "population": "210 k",
            "region": "Haute-Autriche",
            "description": "Cité fluviale sur le Danube."
          }
        ]
      },
      {
        "id": "ireland",
        "name": "Irlande",
        "continentId": "europe",
        "capital": "Dublin",
        "capitalCoords": {
          "lat": 53.3498,
          "lng": -6.2603,
          "x": 21,
          "y": 24
        },
        "flag": "🇮🇪",
        "centerCoords": {
          "lat": 53.1424,
          "lng": -7.6921,
          "x": 21,
          "y": 24
        },
        "description": "L'Île d'Émeraude réputée pour ses paysages verdoyants.",
        "cities": [
          {
            "id": "dublin",
            "name": "Dublin",
            "countryId": "ireland",
            "isCapital": true,
            "coords": {
              "lat": 53.3498,
              "lng": -6.2603,
              "x": 21,
              "y": 24
            },
            "population": "1.2 M",
            "region": "Leinster",
            "description": "Capitale sur la Liffey avec Trinity College."
          },
          {
            "id": "cork",
            "name": "Cork",
            "countryId": "ireland",
            "isCapital": false,
            "coords": {
              "lat": 51.8985,
              "lng": -8.4756,
              "x": 19,
              "y": 28
            },
            "population": "220 k",
            "region": "Munster",
            "description": "Deuxième ville d'Irlande."
          },
          {
            "id": "galway",
            "name": "Galway",
            "countryId": "ireland",
            "isCapital": false,
            "coords": {
              "lat": 53.2707,
              "lng": -9.0568,
              "x": 17,
              "y": 25
            },
            "population": "85 k",
            "region": "Connacht",
            "description": "Cité festive face à l'Atlantique."
          },
          {
            "id": "limerick",
            "name": "Limerick",
            "countryId": "ireland",
            "isCapital": false,
            "coords": {
              "lat": 52.6638,
              "lng": -8.6267,
              "x": 18,
              "y": 26
            },
            "population": "95 k",
            "region": "Munster",
            "description": "Cité sur l'estuaire du Shannon."
          }
        ]
      },
      {
        "id": "denmark",
        "name": "Danemark",
        "continentId": "europe",
        "capital": "Copenhague",
        "capitalCoords": {
          "lat": 55.6761,
          "lng": 12.5683,
          "x": 53,
          "y": 22
        },
        "flag": "🇩🇰",
        "centerCoords": {
          "lat": 56.2639,
          "lng": 9.5018,
          "x": 53,
          "y": 22
        },
        "description": "Pays scandinave réputé pour son design et son art de vivre.",
        "cities": [
          {
            "id": "copenhagen",
            "name": "Copenhague",
            "countryId": "denmark",
            "isCapital": true,
            "coords": {
              "lat": 55.6761,
              "lng": 12.5683,
              "x": 53,
              "y": 22
            },
            "population": "640 k",
            "region": "Hovedstaden",
            "description": "Capitale côtière célèbre pour Nyhavn."
          },
          {
            "id": "aarhus",
            "name": "Aarhus",
            "countryId": "denmark",
            "isCapital": false,
            "coords": {
              "lat": 56.1629,
              "lng": 10.2039,
              "x": 50,
              "y": 20
            },
            "population": "350 k",
            "region": "Jutland",
            "description": "Capitale culturelle du Jutland."
          },
          {
            "id": "odense",
            "name": "Odense",
            "countryId": "denmark",
            "isCapital": false,
            "coords": {
              "lat": 55.4038,
              "lng": 10.4024,
              "x": 51,
              "y": 23
            },
            "population": "180 k",
            "region": "Fionie",
            "description": "Ville natale d'Andersen."
          },
          {
            "id": "aalborg",
            "name": "Aalborg",
            "countryId": "denmark",
            "isCapital": false,
            "coords": {
              "lat": 57.0488,
              "lng": 9.9217,
              "x": 49,
              "y": 17
            },
            "population": "140 k",
            "region": "Jutland",
            "description": "Port sur le Limfjord."
          }
        ]
      },
      {
        "id": "finland",
        "name": "Finlande",
        "continentId": "europe",
        "capital": "Helsinki",
        "capitalCoords": {
          "lat": 60.1699,
          "lng": 24.9384,
          "x": 67,
          "y": 12
        },
        "flag": "🇫🇮",
        "centerCoords": {
          "lat": 61.9241,
          "lng": 25.7482,
          "x": 67,
          "y": 12
        },
        "description": "Le pays des mille lacs et des saunas.",
        "cities": [
          {
            "id": "helsinki",
            "name": "Helsinki",
            "countryId": "finland",
            "isCapital": true,
            "coords": {
              "lat": 60.1699,
              "lng": 24.9384,
              "x": 67,
              "y": 12
            },
            "population": "660 k",
            "region": "Uusimaa",
            "description": "Capitale sur le golfe de Finlande."
          },
          {
            "id": "espoo",
            "name": "Espoo",
            "countryId": "finland",
            "isCapital": false,
            "coords": {
              "lat": 60.2055,
              "lng": 24.6559,
              "x": 66,
              "y": 12
            },
            "population": "300 k",
            "region": "Uusimaa",
            "description": "Deuxième ville et pôle d'innovation."
          },
          {
            "id": "tampere",
            "name": "Tampere",
            "countryId": "finland",
            "isCapital": false,
            "coords": {
              "lat": 61.4978,
              "lng": 23.761,
              "x": 65,
              "y": 9
            },
            "population": "245 k",
            "region": "Pirkanmaa",
            "description": "Capitale mondiale du sauna."
          },
          {
            "id": "turku",
            "name": "Turku",
            "countryId": "finland",
            "isCapital": false,
            "coords": {
              "lat": 60.4518,
              "lng": 22.2666,
              "x": 64,
              "y": 12
            },
            "population": "195 k",
            "region": "Finlande-Propre",
            "description": "Plus ancienne ville de Finlande."
          }
        ]
      },
      {
        "id": "czechia",
        "name": "Tchéquie",
        "continentId": "europe",
        "capital": "Prague",
        "capitalCoords": {
          "lat": 50.0755,
          "lng": 14.4378,
          "x": 55,
          "y": 33
        },
        "flag": "🇨🇿",
        "centerCoords": {
          "lat": 49.8175,
          "lng": 15.473,
          "x": 55,
          "y": 33
        },
        "description": "Pays d'Europe centrale célèbre pour ses châteaux et son architecture.",
        "cities": [
          {
            "id": "prague",
            "name": "Prague",
            "countryId": "czechia",
            "isCapital": true,
            "coords": {
              "lat": 50.0755,
              "lng": 14.4378,
              "x": 55,
              "y": 33
            },
            "population": "1.3 M",
            "region": "Bohême",
            "description": "La Ville aux cent clochers sur la Vltava."
          },
          {
            "id": "brno",
            "name": "Brno",
            "countryId": "czechia",
            "isCapital": false,
            "coords": {
              "lat": 49.1951,
              "lng": 16.6068,
              "x": 58,
              "y": 35
            },
            "population": "380 k",
            "region": "Moravie",
            "description": "Capitale historique de la Moravie."
          },
          {
            "id": "ostrava",
            "name": "Ostrava",
            "countryId": "czechia",
            "isCapital": false,
            "coords": {
              "lat": 49.8209,
              "lng": 18.2625,
              "x": 61,
              "y": 34
            },
            "population": "280 k",
            "region": "Silésie",
            "description": "Grand centre culturel et industriel."
          },
          {
            "id": "plzen",
            "name": "Pilsen",
            "countryId": "czechia",
            "isCapital": false,
            "coords": {
              "lat": 49.7384,
              "lng": 13.3736,
              "x": 53,
              "y": 34
            },
            "population": "175 k",
            "region": "Bohême",
            "description": "Berceau de la bière blonde."
          }
        ]
      },
      {
        "id": "hungary",
        "name": "Hongrie",
        "continentId": "europe",
        "capital": "Budapest",
        "capitalCoords": {
          "lat": 47.4979,
          "lng": 19.0402,
          "x": 62,
          "y": 39
        },
        "flag": "🇭🇺",
        "centerCoords": {
          "lat": 47.1625,
          "lng": 19.5033,
          "x": 62,
          "y": 39
        },
        "description": "Pays de la plaine pannonienne réputé pour ses thermes et le Danube.",
        "cities": [
          {
            "id": "budapest",
            "name": "Budapest",
            "countryId": "hungary",
            "isCapital": true,
            "coords": {
              "lat": 47.4979,
              "lng": 19.0402,
              "x": 62,
              "y": 39
            },
            "population": "1.7 M",
            "region": "Budapest",
            "description": "La Perle du Danube avec son parlement."
          },
          {
            "id": "debrecen",
            "name": "Debrecen",
            "countryId": "hungary",
            "isCapital": false,
            "coords": {
              "lat": 47.5316,
              "lng": 21.6273,
              "x": 66,
              "y": 39
            },
            "population": "200 k",
            "region": "Hajdú-Bihar",
            "description": "Deuxième ville de Hongrie."
          },
          {
            "id": "szeged",
            "name": "Szeged",
            "countryId": "hungary",
            "isCapital": false,
            "coords": {
              "lat": 46.253,
              "lng": 20.1414,
              "x": 63,
              "y": 42
            },
            "population": "160 k",
            "region": "Csongrád",
            "description": "La Cité du soleil sur la Tisza."
          },
          {
            "id": "miskolc",
            "name": "Miskolc",
            "countryId": "hungary",
            "isCapital": false,
            "coords": {
              "lat": 48.1035,
              "lng": 20.7784,
              "x": 65,
              "y": 37
            },
            "population": "150 k",
            "region": "Borsod",
            "description": "Cité au pied des monts Bükk."
          }
        ]
      },
      {
        "id": "romania",
        "name": "Roumanie",
        "continentId": "europe",
        "capital": "Bucarest",
        "capitalCoords": {
          "lat": 44.4268,
          "lng": 26.1025,
          "x": 74,
          "y": 46
        },
        "flag": "🇷🇴",
        "centerCoords": {
          "lat": 45.9432,
          "lng": 24.9668,
          "x": 74,
          "y": 46
        },
        "description": "Pays des Carpates et de la région légendaire de Transylvanie.",
        "cities": [
          {
            "id": "bucharest",
            "name": "Bucarest",
            "countryId": "romania",
            "isCapital": true,
            "coords": {
              "lat": 44.4268,
              "lng": 26.1025,
              "x": 74,
              "y": 46
            },
            "population": "1.8 M",
            "region": "Ilfov",
            "description": "Capitale roumaine au palais du Parlement."
          },
          {
            "id": "cluj",
            "name": "Cluj-Napoca",
            "countryId": "romania",
            "isCapital": false,
            "coords": {
              "lat": 46.7712,
              "lng": 23.6236,
              "x": 70,
              "y": 41
            },
            "population": "320 k",
            "region": "Transylvanie",
            "description": "Capitale universitaire transylvanienne."
          },
          {
            "id": "timisoara",
            "name": "Timișoara",
            "countryId": "romania",
            "isCapital": false,
            "coords": {
              "lat": 45.7537,
              "lng": 21.2257,
              "x": 66,
              "y": 43
            },
            "population": "310 k",
            "region": "Banat",
            "description": "La petite Vienne du Banat."
          },
          {
            "id": "iasi",
            "name": "Iași",
            "countryId": "romania",
            "isCapital": false,
            "coords": {
              "lat": 47.1585,
              "lng": 27.6014,
              "x": 77,
              "y": 39
            },
            "population": "290 k",
            "region": "Moldavie",
            "description": "Capitale culturelle de Moldavie roumaine."
          }
        ]
      },
      {
        "id": "croatia",
        "name": "Croatie",
        "continentId": "europe",
        "capital": "Zagreb",
        "capitalCoords": {
          "lat": 45.815,
          "lng": 15.9819,
          "x": 56,
          "y": 45
        },
        "flag": "🇭🇷",
        "centerCoords": {
          "lat": 45.1,
          "lng": 15.2,
          "x": 56,
          "y": 45
        },
        "description": "Joyau de la mer Adriatique aux mille îles et parcs naturels.",
        "cities": [
          {
            "id": "zagreb",
            "name": "Zagreb",
            "countryId": "croatia",
            "isCapital": true,
            "coords": {
              "lat": 45.815,
              "lng": 15.9819,
              "x": 56,
              "y": 45
            },
            "population": "800 k",
            "region": "Zagreb",
            "description": "Capitale au charme austro-hongrois."
          },
          {
            "id": "split",
            "name": "Split",
            "countryId": "croatia",
            "isCapital": false,
            "coords": {
              "lat": 43.5081,
              "lng": 16.4402,
              "x": 58,
              "y": 52
            },
            "population": "175 k",
            "region": "Dalmatie",
            "description": "Cité adriatique avec le palais de Dioclétien."
          },
          {
            "id": "dubrovnik",
            "name": "Dubrovnik",
            "countryId": "croatia",
            "isCapital": false,
            "coords": {
              "lat": 42.6507,
              "lng": 18.0944,
              "x": 61,
              "y": 56
            },
            "population": "42 k",
            "region": "Dalmatie",
            "description": "La Perle de l'Adriatique ceinturée de remparts."
          },
          {
            "id": "rijeka",
            "name": "Rijeka",
            "countryId": "croatia",
            "isCapital": false,
            "coords": {
              "lat": 45.3271,
              "lng": 14.4422,
              "x": 54,
              "y": 46
            },
            "population": "130 k",
            "region": "Kvarner",
            "description": "Grand port maritime croate."
          }
        ]
      },
      {
        "id": "serbia",
        "name": "Serbie",
        "continentId": "europe",
        "capital": "Belgrade",
        "capitalCoords": {
          "lat": 44.7866,
          "lng": 20.4489,
          "x": 64,
          "y": 46
        },
        "flag": "🇷🇸",
        "centerCoords": {
          "lat": 44.0165,
          "lng": 21.0059,
          "x": 64,
          "y": 46
        },
        "description": "Pays des Balkans au confluent stratégique de la Save et du Danube.",
        "cities": [
          {
            "id": "belgrade",
            "name": "Belgrade",
            "countryId": "serbia",
            "isCapital": true,
            "coords": {
              "lat": 44.7866,
              "lng": 20.4489,
              "x": 64,
              "y": 46
            },
            "population": "1.4 M",
            "region": "Belgrade",
            "description": "La Ville Blanche dominée par la forteresse de Kalemegdan."
          },
          {
            "id": "novi_sad",
            "name": "Novi Sad",
            "countryId": "serbia",
            "isCapital": false,
            "coords": {
              "lat": 45.2671,
              "lng": 19.8335,
              "x": 63,
              "y": 44
            },
            "population": "300 k",
            "region": "Voïvodine",
            "description": "Capitale culturelle de la Voïvodine."
          },
          {
            "id": "nis",
            "name": "Niš",
            "countryId": "serbia",
            "isCapital": false,
            "coords": {
              "lat": 43.3209,
              "lng": 21.8958,
              "x": 67,
              "y": 50
            },
            "population": "260 k",
            "region": "Nišava",
            "description": "Ville natale de l'empereur Constantin."
          },
          {
            "id": "kragujevac",
            "name": "Kragujevac",
            "countryId": "serbia",
            "isCapital": false,
            "coords": {
              "lat": 44.0128,
              "lng": 20.9114,
              "x": 65,
              "y": 48
            },
            "population": "150 k",
            "region": "Šumadija",
            "description": "Cœur historique de la Serbie centrale."
          }
        ]
      },
      {
        "id": "bulgaria",
        "name": "Bulgarie",
        "continentId": "europe",
        "capital": "Sofia",
        "capitalCoords": {
          "lat": 42.6977,
          "lng": 23.3219,
          "x": 70,
          "y": 52
        },
        "flag": "🇧🇬",
        "centerCoords": {
          "lat": 42.7339,
          "lng": 25.4858,
          "x": 70,
          "y": 52
        },
        "description": "Pays balkanique réputé pour sa vallée des roses et ses côtes de la mer Noire.",
        "cities": [
          {
            "id": "sofia",
            "name": "Sofia",
            "countryId": "bulgaria",
            "isCapital": true,
            "coords": {
              "lat": 42.6977,
              "lng": 23.3219,
              "x": 70,
              "y": 52
            },
            "population": "1.3 M",
            "region": "Sofia",
            "description": "Capitale au pied du mont Vitocha avec la cathédrale Alexandre-Nevski."
          },
          {
            "id": "plovdiv",
            "name": "Plovdiv",
            "countryId": "bulgaria",
            "isCapital": false,
            "coords": {
              "lat": 42.1354,
              "lng": 24.7453,
              "x": 72,
              "y": 53
            },
            "population": "345 k",
            "region": "Plovdiv",
            "description": "Une des plus anciennes villes habitées d'Europe."
          },
          {
            "id": "varna",
            "name": "Varna",
            "countryId": "bulgaria",
            "isCapital": false,
            "coords": {
              "lat": 43.2141,
              "lng": 27.9147,
              "x": 78,
              "y": 50
            },
            "population": "335 k",
            "region": "Varna",
            "description": "Capitale estivale sur la mer Noire."
          },
          {
            "id": "burgas",
            "name": "Bourgas",
            "countryId": "bulgaria",
            "isCapital": false,
            "coords": {
              "lat": 42.5048,
              "lng": 27.4626,
              "x": 77,
              "y": 52
            },
            "population": "200 k",
            "region": "Bourgas",
            "description": "Port majeur et station de la mer Noire."
          }
        ]
      },
      {
        "id": "slovakia",
        "name": "Slovaquie",
        "continentId": "europe",
        "capital": "Bratislava",
        "capitalCoords": {
          "lat": 48.1486,
          "lng": 17.1077,
          "x": 58,
          "y": 37
        },
        "flag": "🇸🇰",
        "centerCoords": {
          "lat": 48.669,
          "lng": 19.699,
          "x": 58,
          "y": 37
        },
        "description": "Pays des Hautes Tatras et de nombreux châteaux médiévaux.",
        "cities": [
          {
            "id": "bratislava",
            "name": "Bratislava",
            "countryId": "slovakia",
            "isCapital": true,
            "coords": {
              "lat": 48.1486,
              "lng": 17.1077,
              "x": 58,
              "y": 37
            },
            "population": "440 k",
            "region": "Bratislava",
            "description": "Capitale sur le Danube frontalière avec l'Autriche et la Hongrie."
          },
          {
            "id": "kosice",
            "name": "Košice",
            "countryId": "slovakia",
            "isCapital": false,
            "coords": {
              "lat": 48.7164,
              "lng": 21.2611,
              "x": 65,
              "y": 36
            },
            "population": "240 k",
            "region": "Košice",
            "description": "Métropole de l'est avec la cathédrale Sainte-Élisabeth."
          },
          {
            "id": "presov",
            "name": "Prešov",
            "countryId": "slovakia",
            "isCapital": false,
            "coords": {
              "lat": 48.9984,
              "lng": 21.2393,
              "x": 65,
              "y": 35
            },
            "population": "90 k",
            "region": "Prešov",
            "description": "Cité historique au riche passé."
          },
          {
            "id": "zilina",
            "name": "Žilina",
            "countryId": "slovakia",
            "isCapital": false,
            "coords": {
              "lat": 49.2232,
              "lng": 18.7394,
              "x": 61,
              "y": 35
            },
            "population": "80 k",
            "region": "Žilina",
            "description": "Carrefour du nord-ouest au confluent de trois rivières."
          }
        ]
      },
      {
        "id": "slovenia",
        "name": "Slovénie",
        "continentId": "europe",
        "capital": "Ljubljana",
        "capitalCoords": {
          "lat": 46.0569,
          "lng": 14.5058,
          "x": 54,
          "y": 44
        },
        "flag": "🇸🇮",
        "centerCoords": {
          "lat": 46.1512,
          "lng": 14.9955,
          "x": 54,
          "y": 44
        },
        "description": "Pays alpin et méditerranéen réputé pour le lac de Bled et ses forêts.",
        "cities": [
          {
            "id": "ljubljana",
            "name": "Ljubljana",
            "countryId": "slovenia",
            "isCapital": true,
            "coords": {
              "lat": 46.0569,
              "lng": 14.5058,
              "x": 54,
              "y": 44
            },
            "population": "290 k",
            "region": "Slovénie centrale",
            "description": "Capitale verte dominée par son château."
          },
          {
            "id": "maribor",
            "name": "Maribor",
            "countryId": "slovenia",
            "isCapital": false,
            "coords": {
              "lat": 46.5547,
              "lng": 15.6459,
              "x": 57,
              "y": 42
            },
            "population": "95 k",
            "region": "Drave",
            "description": "Abritant la plus vieille vigne du monde."
          },
          {
            "id": "kranj",
            "name": "Kranj",
            "countryId": "slovenia",
            "isCapital": false,
            "coords": {
              "lat": 46.2389,
              "lng": 14.3556,
              "x": 54,
              "y": 43
            },
            "population": "38 k",
            "region": "Haute-Carniole",
            "description": "Cœur historique de la Haute-Carniole."
          },
          {
            "id": "koper",
            "name": "Koper",
            "countryId": "slovenia",
            "isCapital": false,
            "coords": {
              "lat": 45.5481,
              "lng": 13.7302,
              "x": 52,
              "y": 46
            },
            "population": "25 k",
            "region": "Littoral-Karst",
            "description": "Principal port maritime slovène sur l'Adriatique."
          }
        ]
      },
      {
        "id": "estonia",
        "name": "Estonie",
        "continentId": "europe",
        "capital": "Tallinn",
        "capitalCoords": {
          "lat": 59.437,
          "lng": 24.7536,
          "x": 67,
          "y": 14
        },
        "flag": "🇪🇪",
        "centerCoords": {
          "lat": 58.5953,
          "lng": 25.0136,
          "x": 67,
          "y": 14
        },
        "description": "Pionnier numérique balte réputé pour sa vieille ville médiévale.",
        "cities": [
          {
            "id": "tallinn",
            "name": "Tallinn",
            "countryId": "estonia",
            "isCapital": true,
            "coords": {
              "lat": 59.437,
              "lng": 24.7536,
              "x": 67,
              "y": 14
            },
            "population": "440 k",
            "region": "Harju",
            "description": "Capitale balte aux remparts médiévaux intacts."
          },
          {
            "id": "tartu",
            "name": "Tartu",
            "countryId": "estonia",
            "isCapital": false,
            "coords": {
              "lat": 58.378,
              "lng": 26.729,
              "x": 70,
              "y": 16
            },
            "population": "95 k",
            "region": "Tartu",
            "description": "Capitale intellectuelle et universitaire."
          },
          {
            "id": "narva",
            "name": "Narva",
            "countryId": "estonia",
            "isCapital": false,
            "coords": {
              "lat": 59.3797,
              "lng": 28.1791,
              "x": 73,
              "y": 14
            },
            "population": "55 k",
            "region": "Virumaa oriental",
            "description": "Forteresse frontalière face à la Russie."
          },
          {
            "id": "parnu",
            "name": "Pärnu",
            "countryId": "estonia",
            "isCapital": false,
            "coords": {
              "lat": 58.3859,
              "lng": 24.4971,
              "x": 66,
              "y": 16
            },
            "population": "40 k",
            "region": "Pärnu",
            "description": "Capitale estivale estonienne sur la Baltique."
          }
        ]
      },
      {
        "id": "latvia",
        "name": "Lettonie",
        "continentId": "europe",
        "capital": "Riga",
        "capitalCoords": {
          "lat": 56.9496,
          "lng": 24.1052,
          "x": 66,
          "y": 18
        },
        "flag": "🇱🇻",
        "centerCoords": {
          "lat": 56.8796,
          "lng": 24.6032,
          "x": 66,
          "y": 18
        },
        "description": "Pays balte réputé pour son architecture Art Nouveau et ses plages.",
        "cities": [
          {
            "id": "riga",
            "name": "Riga",
            "countryId": "latvia",
            "isCapital": true,
            "coords": {
              "lat": 56.9496,
              "lng": 24.1052,
              "x": 66,
              "y": 18
            },
            "population": "615 k",
            "region": "Riga",
            "description": "Capitale balte sur la Daugava avec sa vieille ville hanséatique."
          },
          {
            "id": "daugavpils",
            "name": "Daugavpils",
            "countryId": "latvia",
            "isCapital": false,
            "coords": {
              "lat": 55.8747,
              "lng": 26.5362,
              "x": 70,
              "y": 21
            },
            "population": "80 k",
            "region": "Latgale",
            "description": "Deuxième ville de Lettonie et forteresse historique."
          },
          {
            "id": "liepaja",
            "name": "Liepāja",
            "countryId": "latvia",
            "isCapital": false,
            "coords": {
              "lat": 56.5047,
              "lng": 21.0108,
              "x": 62,
              "y": 19
            },
            "population": "70 k",
            "region": "Courlande",
            "description": "La Ville où naît le vent, port sur la Baltique."
          },
          {
            "id": "jelgava",
            "name": "Jelgava",
            "countryId": "latvia",
            "isCapital": false,
            "coords": {
              "lat": 56.65,
              "lng": 23.7167,
              "x": 65,
              "y": 19
            },
            "population": "55 k",
            "region": "Semigallia",
            "description": "Ancienne capitale du duché de Courlande avec son palais baroque."
          }
        ]
      },
      {
        "id": "lithuania",
        "name": "Lituanie",
        "continentId": "europe",
        "capital": "Vilnius",
        "capitalCoords": {
          "lat": 54.6872,
          "lng": 25.2797,
          "x": 68,
          "y": 22
        },
        "flag": "🇱🇹",
        "centerCoords": {
          "lat": 55.1694,
          "lng": 23.8813,
          "x": 68,
          "y": 22
        },
        "description": "Plus grand des États baltes, célèbre pour son patrimoine baroque et la colline des Croix.",
        "cities": [
          {
            "id": "vilnius",
            "name": "Vilnius",
            "countryId": "lithuania",
            "isCapital": true,
            "coords": {
              "lat": 54.6872,
              "lng": 25.2797,
              "x": 68,
              "y": 22
            },
            "population": "590 k",
            "region": "Vilnius",
            "description": "Capitale baroque avec la tour de Gediminas."
          },
          {
            "id": "kaunas",
            "name": "Kaunas",
            "countryId": "lithuania",
            "isCapital": false,
            "coords": {
              "lat": 54.8985,
              "lng": 23.9036,
              "x": 66,
              "y": 22
            },
            "population": "300 k",
            "region": "Kaunas",
            "description": "Deuxième ville au confluent de la Neris et du Niémen."
          },
          {
            "id": "klaipeda",
            "name": "Klaipėda",
            "countryId": "lithuania",
            "isCapital": false,
            "coords": {
              "lat": 55.7033,
              "lng": 21.1443,
              "x": 62,
              "y": 21
            },
            "population": "150 k",
            "region": "Klaipėda",
            "description": "Unique port maritime lituanien à l'entrée de l'isthme de Courlande."
          },
          {
            "id": "siauliai",
            "name": "Šiauliai",
            "countryId": "lithuania",
            "isCapital": false,
            "coords": {
              "lat": 55.9333,
              "lng": 23.3167,
              "x": 65,
              "y": 20
            },
            "population": "100 k",
            "region": "Šiauliai",
            "description": "Célèbre pour la colline des Croix."
          }
        ]
      },
      {
        "id": "iceland",
        "name": "Islande",
        "continentId": "europe",
        "capital": "Reykjavik",
        "capitalCoords": {
          "lat": 64.1466,
          "lng": -21.9426,
          "x": 12,
          "y": 4
        },
        "flag": "🇮🇸",
        "centerCoords": {
          "lat": 64.9631,
          "lng": -19.0208,
          "x": 12,
          "y": 4
        },
        "description": "Terre de feu et de glace, de geysers et de volcans au milieu de l'Atlantique Nord.",
        "cities": [
          {
            "id": "reykjavik",
            "name": "Reykjavik",
            "countryId": "iceland",
            "isCapital": true,
            "coords": {
              "lat": 64.1466,
              "lng": -21.9426,
              "x": 12,
              "y": 4
            },
            "population": "135 k",
            "region": "Capitale",
            "description": "Capitale la plus septentrionale du monde avec l'église Hallgrímskirkja."
          },
          {
            "id": "akureyri",
            "name": "Akureyri",
            "countryId": "iceland",
            "isCapital": false,
            "coords": {
              "lat": 65.6835,
              "lng": -18.0878,
              "x": 14,
              "y": 3
            },
            "population": "19 k",
            "region": "Nord",
            "description": "Capitale du nord de l'Islande sur le fjord Eyjafjörður."
          },
          {
            "id": "keflavik",
            "name": "Keflavík",
            "countryId": "iceland",
            "isCapital": false,
            "coords": {
              "lat": 64,
              "lng": -22.5667,
              "x": 11,
              "y": 5
            },
            "population": "16 k",
            "region": "Suðurnes",
            "description": "Porte d'entrée aérienne du pays et proche du Blue Lagoon."
          },
          {
            "id": "hafnarfjordur",
            "name": "Hafnarfjörður",
            "countryId": "iceland",
            "isCapital": false,
            "coords": {
              "lat": 64.0667,
              "lng": -21.95,
              "x": 12,
              "y": 5
            },
            "population": "30 k",
            "region": "Capitale",
            "description": "La Cité des elfes et de la lave."
          }
        ]
      },
      {
        "id": "luxembourg",
        "name": "Luxembourg",
        "continentId": "europe",
        "capital": "Luxembourg",
        "capitalCoords": {
          "lat": 49.6116,
          "lng": 6.1319,
          "x": 38,
          "y": 36
        },
        "flag": "🇱🇺",
        "centerCoords": {
          "lat": 49.8153,
          "lng": 6.1296,
          "x": 38,
          "y": 36
        },
        "description": "Grand-duché prospère au cœur de l'Europe et place financière mondiale.",
        "cities": [
          {
            "id": "luxembourg_city",
            "name": "Luxembourg",
            "countryId": "luxembourg",
            "isCapital": true,
            "coords": {
              "lat": 49.6116,
              "lng": 6.1319,
              "x": 38,
              "y": 36
            },
            "population": "130 k",
            "region": "Luxembourg",
            "description": "Capitale fortifiée perchée sur les falaises de l'Alzette."
          },
          {
            "id": "esch_sur_alzette",
            "name": "Esch-sur-Alzette",
            "countryId": "luxembourg",
            "isCapital": false,
            "coords": {
              "lat": 49.4958,
              "lng": 5.9806,
              "x": 37,
              "y": 37
            },
            "population": "36 k",
            "region": "Sud",
            "description": "Deuxième ville et pôle universitaire d'Esch-Belval."
          },
          {
            "id": "differdange",
            "name": "Differdange",
            "countryId": "luxembourg",
            "isCapital": false,
            "coords": {
              "lat": 49.5242,
              "lng": 5.8911,
              "x": 37,
              "y": 37
            },
            "population": "28 k",
            "region": "Sud",
            "description": "Cité historique de la sidérurgie."
          },
          {
            "id": "dudelange",
            "name": "Dudelange",
            "countryId": "luxembourg",
            "isCapital": false,
            "coords": {
              "lat": 49.4833,
              "lng": 6.0833,
              "x": 38,
              "y": 37
            },
            "population": "21 k",
            "region": "Sud",
            "description": "La Forge du Sud, cité multiculturelle."
          }
        ]
      },
      {
        "id": "ukraine",
        "name": "Ukraine",
        "continentId": "europe",
        "capital": "Kyiv",
        "capitalCoords": {
          "lat": 50.4501,
          "lng": 30.5234,
          "x": 80,
          "y": 33
        },
        "flag": "🇺🇦",
        "centerCoords": {
          "lat": 48.3794,
          "lng": 31.1656,
          "x": 80,
          "y": 33
        },
        "description": "Plus grand pays entièrement situé en Europe, bordant la mer Noire.",
        "cities": [
          {
            "id": "kyiv",
            "name": "Kyiv",
            "countryId": "ukraine",
            "isCapital": true,
            "coords": {
              "lat": 50.4501,
              "lng": 30.5234,
              "x": 80,
              "y": 33
            },
            "population": "2.9 M",
            "region": "Kyiv",
            "description": "Capitale millénaire sur le Dniepr avec la laure des Grottes."
          },
          {
            "id": "lviv",
            "name": "Lviv",
            "countryId": "ukraine",
            "isCapital": false,
            "coords": {
              "lat": 49.8397,
              "lng": 24.0297,
              "x": 72,
              "y": 35
            },
            "population": "720 k",
            "region": "Lviv",
            "description": "Capitale culturelle de l'ouest ukrainien."
          },
          {
            "id": "odesa",
            "name": "Odessa",
            "countryId": "ukraine",
            "isCapital": false,
            "coords": {
              "lat": 46.4825,
              "lng": 30.7233,
              "x": 81,
              "y": 42
            },
            "population": "1.0 M",
            "region": "Odessa",
            "description": "La Perle de la mer Noire célèbre pour l'escalier du Potemkine."
          },
          {
            "id": "kharkiv",
            "name": "Kharkiv",
            "countryId": "ukraine",
            "isCapital": false,
            "coords": {
              "lat": 49.9935,
              "lng": 36.2304,
              "x": 88,
              "y": 34
            },
            "population": "1.4 M",
            "region": "Kharkiv",
            "description": "Grand centre universitaire et scientifique de l'est."
          }
        ]
      },
      {
        "id": "albania",
        "name": "Albanie",
        "continentId": "europe",
        "capital": "Tirana",
        "capitalCoords": {
          "lat": 41.3275,
          "lng": 19.8187,
          "x": 74,
          "y": 72
        },
        "flag": "🇦🇱",
        "centerCoords": {
          "lat": 41.1533,
          "lng": 20.1683,
          "x": 74,
          "y": 72
        },
        "description": "Pays des Balkans aux superbes plages ioniennes et forteresses médiévales.",
        "cities": [
          {
            "id": "tirana",
            "name": "Tirana",
            "countryId": "albania",
            "isCapital": true,
            "coords": {
              "lat": 41.3275,
              "lng": 19.8187,
              "x": 74,
              "y": 72
            },
            "population": "560 k",
            "region": "Tirana",
            "description": "Capitale colorée réputée pour sa place Skanderbeg."
          },
          {
            "id": "durres",
            "name": "Durrës",
            "countryId": "albania",
            "isCapital": false,
            "coords": {
              "lat": 41.323,
              "lng": 19.4414,
              "x": 73,
              "y": 72
            },
            "population": "175 k",
            "region": "Durrës",
            "description": "Grand port antique sur l'Adriatique avec amphithéâtre romain."
          },
          {
            "id": "vlore",
            "name": "Vlorë",
            "countryId": "albania",
            "isCapital": false,
            "coords": {
              "lat": 40.4667,
              "lng": 19.4897,
              "x": 73,
              "y": 75
            },
            "population": "130 k",
            "region": "Vlorë",
            "description": "Station balnéaire marquant la rencontre des mers Adriatique et Ionienne."
          }
        ]
      },
      {
        "id": "bosnia",
        "name": "Bosnie-Herzégovine",
        "continentId": "europe",
        "capital": "Sarajevo",
        "capitalCoords": {
          "lat": 43.8563,
          "lng": 18.4131,
          "x": 70,
          "y": 64
        },
        "flag": "🇧🇦",
        "centerCoords": {
          "lat": 43.9159,
          "lng": 17.6791,
          "x": 70,
          "y": 64
        },
        "description": "Pays montagneux au riche carrefour des cultures orientales et occidentales.",
        "cities": [
          {
            "id": "sarajevo",
            "name": "Sarajevo",
            "countryId": "bosnia",
            "isCapital": true,
            "coords": {
              "lat": 43.8563,
              "lng": 18.4131,
              "x": 70,
              "y": 64
            },
            "population": "275 k",
            "region": "Sarajevo",
            "description": "Capitale emblématique avec son quartier ottoman Baščaršija."
          },
          {
            "id": "mostar",
            "name": "Mostar",
            "countryId": "bosnia",
            "isCapital": false,
            "coords": {
              "lat": 43.3438,
              "lng": 17.8078,
              "x": 69,
              "y": 66
            },
            "population": "105 k",
            "region": "Herzégovine",
            "description": "Célèbre pour son vieux pont ottoman (Stari Most)."
          },
          {
            "id": "banja_luka",
            "name": "Banja Luka",
            "countryId": "bosnia",
            "isCapital": false,
            "coords": {
              "lat": 44.7722,
              "lng": 17.191,
              "x": 68,
              "y": 61
            },
            "population": "185 k",
            "region": "Krajina",
            "description": "Deuxième ville du pays, entourée de forteresses verdoyantes."
          }
        ]
      },
      {
        "id": "montenegro",
        "name": "Monténégro",
        "continentId": "europe",
        "capital": "Podgorica",
        "capitalCoords": {
          "lat": 42.4304,
          "lng": 19.2594,
          "x": 73,
          "y": 68
        },
        "flag": "🇲🇪",
        "centerCoords": {
          "lat": 42.7087,
          "lng": 19.3744,
          "x": 73,
          "y": 68
        },
        "description": "Perle adriatique aux fjords spectaculaires et sommets calcaires grandioses.",
        "cities": [
          {
            "id": "podgorica",
            "name": "Podgorica",
            "countryId": "montenegro",
            "isCapital": true,
            "coords": {
              "lat": 42.4304,
              "lng": 19.2594,
              "x": 73,
              "y": 68
            },
            "population": "190 k",
            "region": "Podgorica",
            "description": "Capitale moderne baignée par six rivières."
          },
          {
            "id": "kotor",
            "name": "Kotor",
            "countryId": "montenegro",
            "isCapital": false,
            "coords": {
              "lat": 42.4247,
              "lng": 18.7712,
              "x": 72,
              "y": 68
            },
            "population": "13 k",
            "region": "Bouches de Kotor",
            "description": "Cité fortifiée médiévale au fond d'un fjord d'une beauté sublime."
          },
          {
            "id": "budva",
            "name": "Budva",
            "countryId": "montenegro",
            "isCapital": false,
            "coords": {
              "lat": 42.2881,
              "lng": 18.8425,
              "x": 72,
              "y": 69
            },
            "population": "22 k",
            "region": "Budva",
            "description": "Station balnéaire phare de la riviera monténégrine."
          }
        ]
      },
      {
        "id": "north_macedonia",
        "name": "Macédoine du Nord",
        "continentId": "europe",
        "capital": "Skopje",
        "capitalCoords": {
          "lat": 41.9981,
          "lng": 21.4254,
          "x": 77,
          "y": 70
        },
        "flag": "🇲🇰",
        "centerCoords": {
          "lat": 41.6086,
          "lng": 21.7453,
          "x": 77,
          "y": 71
        },
        "description": "Pays balkanique aux lacs millénaires et monuments néoclassiques.",
        "cities": [
          {
            "id": "skopje",
            "name": "Skopje",
            "countryId": "north_macedonia",
            "isCapital": true,
            "coords": {
              "lat": 41.9981,
              "lng": 21.4254,
              "x": 77,
              "y": 70
            },
            "population": "540 k",
            "region": "Skopje",
            "description": "Capitale dynamique ornée de statues monumentales et d'un vieux bazar."
          },
          {
            "id": "ohrid",
            "name": "Ohrid",
            "countryId": "north_macedonia",
            "isCapital": false,
            "coords": {
              "lat": 41.1172,
              "lng": 20.8016,
              "x": 76,
              "y": 73
            },
            "population": "55 k",
            "region": "Sud-Ouest",
            "description": "Joyau UNESCO au bord du plus vieux lac d'Europe."
          },
          {
            "id": "bitola",
            "name": "Bitola",
            "countryId": "north_macedonia",
            "isCapital": false,
            "coords": {
              "lat": 41.0319,
              "lng": 21.3347,
              "x": 77,
              "y": 73
            },
            "population": "74 k",
            "region": "Pélagonie",
            "description": "Ancienne cité des consuls avec un riche patrimoine ottoman."
          }
        ]
      },
      {
        "id": "kosovo",
        "name": "Kosovo",
        "continentId": "europe",
        "capital": "Pristina",
        "capitalCoords": {
          "lat": 42.6629,
          "lng": 21.1655,
          "x": 76,
          "y": 67
        },
        "flag": "🇽🇰",
        "centerCoords": {
          "lat": 42.6026,
          "lng": 20.903,
          "x": 76,
          "y": 67
        },
        "description": "Jeune nation balkanique au cœur de paysages montagneux verdoyants.",
        "cities": [
          {
            "id": "pristina",
            "name": "Pristina",
            "countryId": "kosovo",
            "isCapital": true,
            "coords": {
              "lat": 42.6629,
              "lng": 21.1655,
              "x": 76,
              "y": 67
            },
            "population": "215 k",
            "region": "Pristina",
            "description": "Capitale jeune avec le monument Newborn et la bibliothèque nationale."
          },
          {
            "id": "prizren",
            "name": "Prizren",
            "countryId": "kosovo",
            "isCapital": false,
            "coords": {
              "lat": 42.2153,
              "lng": 20.7415,
              "x": 75,
              "y": 69
            },
            "population": "180 k",
            "region": "Prizren",
            "description": "Capitale culturelle et historique au pied des monts Šar."
          }
        ]
      },
      {
        "id": "moldova",
        "name": "Moldavie",
        "continentId": "europe",
        "capital": "Chisinau",
        "capitalCoords": {
          "lat": 47.0105,
          "lng": 28.8638,
          "x": 88,
          "y": 49
        },
        "flag": "🇲🇩",
        "centerCoords": {
          "lat": 47.4116,
          "lng": 28.3699,
          "x": 88,
          "y": 49
        },
        "description": "Pays d'Europe de l'Est réputé pour ses immenses caves viticoles souterraines.",
        "cities": [
          {
            "id": "chisinau",
            "name": "Chisinau",
            "countryId": "moldova",
            "isCapital": true,
            "coords": {
              "lat": 47.0105,
              "lng": 28.8638,
              "x": 88,
              "y": 49
            },
            "population": "675 k",
            "region": "Chisinau",
            "description": "Capitale verdoyante bordée de parcs et monuments soviétiques."
          },
          {
            "id": "balti",
            "name": "Bălți",
            "countryId": "moldova",
            "isCapital": false,
            "coords": {
              "lat": 47.7617,
              "lng": 27.9289,
              "x": 87,
              "y": 46
            },
            "population": "145 k",
            "region": "Bălți",
            "description": "Capitale du nord de la Moldavie, pôle économique et universitaire."
          },
          {
            "id": "tiraspol",
            "name": "Tiraspol",
            "countryId": "moldova",
            "isCapital": false,
            "coords": {
              "lat": 46.8403,
              "lng": 29.6433,
              "x": 89,
              "y": 50
            },
            "population": "135 k",
            "region": "Transnistrie",
            "description": "Deuxième ville moldave sur la rive gauche du Dniestr."
          }
        ]
      },
      {
        "id": "belarus",
        "name": "Biélorussie",
        "continentId": "europe",
        "capital": "Minsk",
        "capitalCoords": {
          "lat": 53.9006,
          "lng": 27.559,
          "x": 87,
          "y": 31
        },
        "flag": "🇧🇾",
        "centerCoords": {
          "lat": 53.7098,
          "lng": 27.9534,
          "x": 87,
          "y": 31
        },
        "description": "Pays d'Europe orientale riche en vastes forêts primaires et forteresses.",
        "cities": [
          {
            "id": "minsk",
            "name": "Minsk",
            "countryId": "belarus",
            "isCapital": true,
            "coords": {
              "lat": 53.9006,
              "lng": 27.559,
              "x": 87,
              "y": 31
            },
            "population": "2.0 M",
            "region": "Minsk",
            "description": "Capitale monumentale traversée par la rivière Svislotch."
          },
          {
            "id": "brest_by",
            "name": "Brest",
            "countryId": "belarus",
            "isCapital": false,
            "coords": {
              "lat": 52.0976,
              "lng": 23.7341,
              "x": 83,
              "y": 37
            },
            "population": "340 k",
            "region": "Brest",
            "description": "Cité frontière célèbre pour sa forteresse héroïque."
          },
          {
            "id": "grodno",
            "name": "Grodno",
            "countryId": "belarus",
            "isCapital": false,
            "coords": {
              "lat": 53.6884,
              "lng": 23.8258,
              "x": 83,
              "y": 32
            },
            "population": "360 k",
            "region": "Grodno",
            "description": "Joyau architectural aux magnifiques châteaux royaux."
          }
        ]
      },
      {
        "id": "malta",
        "name": "Malte",
        "continentId": "europe",
        "capital": "La Valette",
        "capitalCoords": {
          "lat": 35.8989,
          "lng": 14.5146,
          "x": 58,
          "y": 88
        },
        "flag": "🇲🇹",
        "centerCoords": {
          "lat": 35.9375,
          "lng": 14.3754,
          "x": 58,
          "y": 88
        },
        "description": "Archipel méditerranéen aux forteresses des Chevaliers et eaux cristallines.",
        "cities": [
          {
            "id": "valletta",
            "name": "La Valette",
            "countryId": "malta",
            "isCapital": true,
            "coords": {
              "lat": 35.8989,
              "lng": 14.5146,
              "x": 58,
              "y": 88
            },
            "population": "6 k",
            "region": "Grand Port",
            "description": "Cité forteresse des chevaliers de l'Ordre de Malte, classée UNESCO."
          },
          {
            "id": "sliema",
            "name": "Sliema",
            "countryId": "malta",
            "isCapital": false,
            "coords": {
              "lat": 35.9122,
              "lng": 14.5042,
              "x": 58,
              "y": 88
            },
            "population": "23 k",
            "region": "Nord",
            "description": "Centre cosmopolite avec vue imprenable sur les remparts de La Valette."
          },
          {
            "id": "mdina",
            "name": "Mdina",
            "countryId": "malta",
            "isCapital": false,
            "coords": {
              "lat": 35.8869,
              "lng": 14.4025,
              "x": 58,
              "y": 88
            },
            "population": "300",
            "region": "Centre",
            "description": "La Cité Silencieuse, ancienne capitale médiévale fortifiée."
          }
        ]
      },
      {
        "id": "cyprus",
        "name": "Chypre",
        "continentId": "europe",
        "capital": "Nicosie",
        "capitalCoords": {
          "lat": 35.1856,
          "lng": 33.3823,
          "x": 95,
          "y": 86
        },
        "flag": "🇨🇾",
        "centerCoords": {
          "lat": 35.1264,
          "lng": 33.4299,
          "x": 95,
          "y": 86
        },
        "description": "Île légendaire d'Aphrodite au carrefour de l'Europe et du Levant.",
        "cities": [
          {
            "id": "nicosia",
            "name": "Nicosie",
            "countryId": "cyprus",
            "isCapital": true,
            "coords": {
              "lat": 35.1856,
              "lng": 33.3823,
              "x": 95,
              "y": 86
            },
            "population": "200 k",
            "region": "Nicosie",
            "description": "Dernière capitale divisée d'Europe, entourée de remparts vénitiens."
          },
          {
            "id": "limassol",
            "name": "Limassol",
            "countryId": "cyprus",
            "isCapital": false,
            "coords": {
              "lat": 34.7071,
              "lng": 33.0226,
              "x": 94,
              "y": 88
            },
            "population": "140 k",
            "region": "Limassol",
            "description": "Grand port marchand et station balnéaire cosmopolite."
          },
          {
            "id": "paphos",
            "name": "Paphos",
            "countryId": "cyprus",
            "isCapital": false,
            "coords": {
              "lat": 34.7754,
              "lng": 32.4245,
              "x": 93,
              "y": 88
            },
            "population": "65 k",
            "region": "Paphos",
            "description": "Berceau mythique d'Aphrodite aux somptueuses mosaïques romaines."
          }
        ]
      },
      {
        "id": "andorra",
        "name": "Andorre",
        "continentId": "europe",
        "capital": "Andorre-la-Vieille",
        "capitalCoords": {
          "lat": 42.5063,
          "lng": 1.5218,
          "x": 42,
          "y": 68
        },
        "flag": "🇦🇩",
        "centerCoords": {
          "lat": 42.5063,
          "lng": 1.5218,
          "x": 42,
          "y": 68
        },
        "description": "Principauté pyrénéenne réputée pour ses stations de ski et ses vallées.",
        "cities": [
          {
            "id": "andorra_la_vella",
            "name": "Andorre-la-Vieille",
            "countryId": "andorra",
            "isCapital": true,
            "coords": {
              "lat": 42.5063,
              "lng": 1.5218,
              "x": 42,
              "y": 68
            },
            "population": "23 k",
            "region": "Andorre-la-Vieille",
            "description": "Plus haute capitale d'Europe perchée dans les Pyrénées."
          },
          {
            "id": "escaldes",
            "name": "Escaldes-Engordany",
            "countryId": "andorra",
            "isCapital": false,
            "coords": {
              "lat": 42.5089,
              "lng": 1.5381,
              "x": 42,
              "y": 68
            },
            "population": "15 k",
            "region": "Escaldes",
            "description": "Station thermale renommée avec le centre Caldea."
          }
        ]
      },
      {
        "id": "monaco",
        "name": "Monaco",
        "continentId": "europe",
        "capital": "Monaco",
        "capitalCoords": {
          "lat": 43.7384,
          "lng": 7.4246,
          "x": 67,
          "y": 66
        },
        "flag": "🇲🇨",
        "centerCoords": {
          "lat": 43.7384,
          "lng": 7.4246,
          "x": 67,
          "y": 66
        },
        "description": "Principauté glamour de la Côte d'Azur réputée pour son Grand Prix.",
        "cities": [
          {
            "id": "monaco_city",
            "name": "Monaco-Ville",
            "countryId": "monaco",
            "isCapital": true,
            "coords": {
              "lat": 43.7311,
              "lng": 7.4228,
              "x": 67,
              "y": 66
            },
            "population": "39 k",
            "region": "Le Rocher",
            "description": "Le Rocher princier dominant le port Hercule et la Méditerranée."
          },
          {
            "id": "monte_carlo",
            "name": "Monte-Carlo",
            "countryId": "monaco",
            "isCapital": false,
            "coords": {
              "lat": 43.7398,
              "lng": 7.4273,
              "x": 67,
              "y": 66
            },
            "population": "15 k",
            "region": "Monte-Carlo",
            "description": "Quartier mythique du Casino et des palaces Belle Époque."
          }
        ]
      },
      {
        "id": "san_marino",
        "name": "Saint-Marin",
        "continentId": "europe",
        "capital": "Saint-Marin",
        "capitalCoords": {
          "lat": 43.9424,
          "lng": 12.4578,
          "x": 53,
          "y": 56
        },
        "flag": "🇸🇲",
        "centerCoords": {
          "lat": 43.9424,
          "lng": 12.4578,
          "x": 53,
          "y": 56
        },
        "description": "Plus ancienne république constitutionnelle au monde sur le mont Titano.",
        "cities": [
          {
            "id": "san_marino_city",
            "name": "Saint-Marin",
            "countryId": "san_marino",
            "isCapital": true,
            "coords": {
              "lat": 43.9424,
              "lng": 12.4578,
              "x": 53,
              "y": 56
            },
            "population": "4 k",
            "region": "Castello",
            "description": "Capitale médiévale perchée sur les falaises du mont Titano."
          },
          {
            "id": "serravalle",
            "name": "Serravalle",
            "countryId": "san_marino",
            "isCapital": false,
            "coords": {
              "lat": 43.9689,
              "lng": 12.4808,
              "x": 53,
              "y": 55
            },
            "population": "11 k",
            "region": "Serravalle",
            "description": "Plus grande localité de la république de Saint-Marin."
          }
        ]
      },
      {
        "id": "liechtenstein",
        "name": "Liechtenstein",
        "continentId": "europe",
        "capital": "Vaduz",
        "capitalCoords": {
          "lat": 47.141,
          "lng": 9.5209,
          "x": 51,
          "y": 48
        },
        "flag": "🇱🇮",
        "centerCoords": {
          "lat": 47.166,
          "lng": 9.5554,
          "x": 51,
          "y": 48
        },
        "description": "Principauté alpine nichée entre la Suisse et l'Autriche.",
        "cities": [
          {
            "id": "vaduz",
            "name": "Vaduz",
            "countryId": "liechtenstein",
            "isCapital": true,
            "coords": {
              "lat": 47.141,
              "lng": 9.5209,
              "x": 51,
              "y": 48
            },
            "population": "5.7 k",
            "region": "Oberland",
            "description": "Capitale alpine surmontée par le château princier médiéval."
          },
          {
            "id": "schaan",
            "name": "Schaan",
            "countryId": "liechtenstein",
            "isCapital": false,
            "coords": {
              "lat": 47.1681,
              "lng": 9.51,
              "x": 51,
              "y": 47
            },
            "population": "6.0 k",
            "region": "Unterland",
            "description": "Pôle industriel et économique le plus peuplé de la principauté."
          }
        ]
      },
      {
        "id": "vatican",
        "name": "Vatican",
        "continentId": "europe",
        "capital": "Cité du Vatican",
        "capitalCoords": {
          "lat": 41.9029,
          "lng": 12.4534,
          "x": 52,
          "y": 62
        },
        "flag": "🇻🇦",
        "centerCoords": {
          "lat": 41.9029,
          "lng": 12.4534,
          "x": 52,
          "y": 62
        },
        "description": "Plus petit État souverain du monde, cœur spirituel de l'Église catholique.",
        "cities": [
          {
            "id": "vatican_city",
            "name": "Cité du Vatican",
            "countryId": "vatican",
            "isCapital": true,
            "coords": {
              "lat": 41.9029,
              "lng": 12.4534,
              "x": 52,
              "y": 62
            },
            "population": "825",
            "region": "Vatican",
            "description": "Siège pontifical abritant la basilique Saint-Pierre et la chapelle Sixtine."
          }
        ]
      },
      {
        "id": "georgia",
        "name": "Géorgie",
        "continentId": "europe",
        "capital": "Tbilissi",
        "capitalCoords": {
          "lat": 41.7151,
          "lng": 44.8271,
          "x": 98,
          "y": 72
        },
        "flag": "🇬🇪",
        "centerCoords": {
          "lat": 42.3154,
          "lng": 43.3569,
          "x": 98,
          "y": 71
        },
        "description": "Pays caucasien berceau millénaire de la viticulture et des monastères troglodytes.",
        "cities": [
          {
            "id": "tbilisi",
            "name": "Tbilissi",
            "countryId": "georgia",
            "isCapital": true,
            "coords": {
              "lat": 41.7151,
              "lng": 44.8271,
              "x": 98,
              "y": 72
            },
            "population": "1.2 M",
            "region": "Tbilissi",
            "description": "Capitale aux bains de soufre et balcons ciselés surplombant la Koura."
          },
          {
            "id": "batumi",
            "name": "Batoumi",
            "countryId": "georgia",
            "isCapital": false,
            "coords": {
              "lat": 41.6168,
              "lng": 41.6367,
              "x": 96,
              "y": 73
            },
            "population": "170 k",
            "region": "Adjarie",
            "description": "Station balnéaire futuriste sur les rives de la mer Noire."
          },
          {
            "id": "kutaisi",
            "name": "Koutaïssi",
            "countryId": "georgia",
            "isCapital": false,
            "coords": {
              "lat": 42.2679,
              "lng": 42.6946,
              "x": 97,
              "y": 71
            },
            "population": "145 k",
            "region": "Iméréthie",
            "description": "Cité antique de la Toison d'Or abritant la cathédrale de Bagrati."
          }
        ]
      },
      {
        "id": "armenia",
        "name": "Arménie",
        "continentId": "europe",
        "capital": "Erevan",
        "capitalCoords": {
          "lat": 40.1811,
          "lng": 44.5136,
          "x": 98,
          "y": 76
        },
        "flag": "🇦🇲",
        "centerCoords": {
          "lat": 40.0691,
          "lng": 45.0382,
          "x": 98,
          "y": 76
        },
        "description": "Nation caucasienne première à adopter le christianisme, au pied du mont Ararat.",
        "cities": [
          {
            "id": "yerevan",
            "name": "Erevan",
            "countryId": "armenia",
            "isCapital": true,
            "coords": {
              "lat": 40.1811,
              "lng": 44.5136,
              "x": 98,
              "y": 76
            },
            "population": "1.1 M",
            "region": "Erevan",
            "description": "La Ville Rose aux édifices de tuf volcanique et place de la République."
          },
          {
            "id": "gyumri",
            "name": "Gyumri",
            "countryId": "armenia",
            "isCapital": false,
            "coords": {
              "lat": 40.7929,
              "lng": 43.8465,
              "x": 97,
              "y": 74
            },
            "population": "120 k",
            "region": "Chirak",
            "description": "Capitale des arts et de l'humour arménien."
          },
          {
            "id": "vanadzor",
            "name": "Vanadzor",
            "countryId": "armenia",
            "isCapital": false,
            "coords": {
              "lat": 40.8074,
              "lng": 44.497,
              "x": 98,
              "y": 74
            },
            "population": "80 k",
            "region": "Lorri",
            "description": "Troisième ville du pays entourée de forêts et montagnes pittoresques."
          }
        ]
      },
      {
        "id": "azerbaijan",
        "name": "Azerbaïdjan",
        "continentId": "europe",
        "capital": "Bakou",
        "capitalCoords": {
          "lat": 40.4093,
          "lng": 49.8671,
          "x": 99,
          "y": 75
        },
        "flag": "🇦🇿",
        "centerCoords": {
          "lat": 40.1431,
          "lng": 47.5769,
          "x": 99,
          "y": 76
        },
        "description": "La Terre de Feu caucasienne bordant la mer Caspienne.",
        "cities": [
          {
            "id": "baku",
            "name": "Bakou",
            "countryId": "azerbaijan",
            "isCapital": true,
            "coords": {
              "lat": 40.4093,
              "lng": 49.8671,
              "x": 99,
              "y": 75
            },
            "population": "2.3 M",
            "region": "Abşeron",
            "description": "Capitale caspienne alliant vieille ville médiévale et tours Flame."
          },
          {
            "id": "ganja",
            "name": "Gandja",
            "countryId": "azerbaijan",
            "isCapital": false,
            "coords": {
              "lat": 40.6828,
              "lng": 46.3606,
              "x": 98,
              "y": 75
            },
            "population": "335 k",
            "region": "Gandja-Gazakh",
            "description": "Deuxième ville d'Azerbaïdjan et berceau du poète Nizami."
          }
        ]
      }
    ]
  },
  {
    "id": "north_america",
    "name": "Amérique du Nord & Centrale",
    "code": "NA",
    "centerCoords": {
      "lat": 40,
      "lng": -100,
      "x": 23,
      "y": 35
    },
    "countries": [
      {
        "id": "usa",
        "name": "États-Unis",
        "continentId": "north_america",
        "capital": "Washington D.C.",
        "capitalCoords": {
          "lat": 38.9072,
          "lng": -77.0369,
          "x": 76,
          "y": 44
        },
        "flag": "🇺🇸",
        "centerCoords": {
          "lat": 37.0902,
          "lng": -95.7129,
          "x": 41,
          "y": 42
        },
        "description": "République fédérale de 50 États bordée par deux océans.",
        "cities": [
          {
            "id": "washington",
            "name": "Washington D.C.",
            "countryId": "usa",
            "isCapital": true,
            "coords": {
              "lat": 38.9072,
              "lng": -77.0369,
              "x": 76,
              "y": 44
            },
            "population": "690 k",
            "region": "DC",
            "description": "Capitale fédérale américaine."
          },
          {
            "id": "new_york",
            "name": "New York",
            "countryId": "usa",
            "isCapital": false,
            "coords": {
              "lat": 40.7128,
              "lng": -74.006,
              "x": 80,
              "y": 38
            },
            "population": "8.3 M",
            "region": "New York",
            "description": "Mégalopole de Manhattan et Times Square."
          },
          {
            "id": "los_angeles",
            "name": "Los Angeles",
            "countryId": "usa",
            "isCapital": false,
            "coords": {
              "lat": 34.0522,
              "lng": -118.2437,
              "x": 18,
              "y": 56
            },
            "population": "3.9 M",
            "region": "Californie",
            "description": "Capitale du cinéma à Hollywood."
          },
          {
            "id": "chicago",
            "name": "Chicago",
            "countryId": "usa",
            "isCapital": false,
            "coords": {
              "lat": 41.8781,
              "lng": -87.6298,
              "x": 58,
              "y": 38
            },
            "population": "2.7 M",
            "region": "Illinois",
            "description": "La Windy City au bord du lac Michigan."
          },
          {
            "id": "miami",
            "name": "Miami",
            "countryId": "usa",
            "isCapital": false,
            "coords": {
              "lat": 25.7617,
              "lng": -80.1918,
              "x": 78,
              "y": 82
            },
            "population": "440 k",
            "region": "Floride",
            "description": "Porte des Caraïbes sur l'Atlantique."
          }
        ]
      },
      {
        "id": "canada",
        "name": "Canada",
        "continentId": "north_america",
        "capital": "Ottawa",
        "capitalCoords": {
          "lat": 45.4215,
          "lng": -75.6972,
          "x": 72,
          "y": 62
        },
        "flag": "🇨🇦",
        "centerCoords": {
          "lat": 56.1304,
          "lng": -106.3468,
          "x": 40,
          "y": 22
        },
        "description": "Deuxième pays du monde par sa superficie, terre des grands espaces.",
        "cities": [
          {
            "id": "ottawa",
            "name": "Ottawa",
            "countryId": "canada",
            "isCapital": true,
            "coords": {
              "lat": 45.4215,
              "lng": -75.6972,
              "x": 72,
              "y": 62
            },
            "population": "1.0 M",
            "region": "Ontario",
            "description": "Capitale fédérale canadienne."
          },
          {
            "id": "toronto",
            "name": "Toronto",
            "countryId": "canada",
            "isCapital": false,
            "coords": {
              "lat": 43.6532,
              "lng": -79.3832,
              "x": 68,
              "y": 66
            },
            "population": "2.8 M",
            "region": "Ontario",
            "description": "Plus grande métropole du pays."
          },
          {
            "id": "montreal",
            "name": "Montréal",
            "countryId": "canada",
            "isCapital": false,
            "coords": {
              "lat": 45.5017,
              "lng": -73.5673,
              "x": 76,
              "y": 58
            },
            "population": "1.8 M",
            "region": "Québec",
            "description": "Plus grande ville francophone d'Amérique."
          },
          {
            "id": "vancouver",
            "name": "Vancouver",
            "countryId": "canada",
            "isCapital": false,
            "coords": {
              "lat": 49.2827,
              "lng": -123.1207,
              "x": 18,
              "y": 54
            },
            "population": "675 k",
            "region": "Colombie-Britannique",
            "description": "Grand port pacifique bordé de montagnes."
          }
        ]
      },
      {
        "id": "mexico",
        "name": "Mexique",
        "continentId": "north_america",
        "capital": "Mexico",
        "capitalCoords": {
          "lat": 19.4326,
          "lng": -99.1332,
          "x": 38,
          "y": 65
        },
        "flag": "🇲🇽",
        "centerCoords": {
          "lat": 23.6345,
          "lng": -102.5528,
          "x": 38,
          "y": 65
        },
        "description": "Terre des civilisations aztèques et mayas.",
        "cities": [
          {
            "id": "mexico_city",
            "name": "Mexico",
            "countryId": "mexico",
            "isCapital": true,
            "coords": {
              "lat": 19.4326,
              "lng": -99.1332,
              "x": 38,
              "y": 65
            },
            "population": "9.2 M",
            "region": "Mexico",
            "description": "Mégalopole historique fondée sur Tenochtitlan."
          },
          {
            "id": "guadalajara",
            "name": "Guadalajara",
            "countryId": "mexico",
            "isCapital": false,
            "coords": {
              "lat": 20.6597,
              "lng": -103.3496,
              "x": 34,
              "y": 63
            },
            "population": "1.5 M",
            "region": "Jalisco",
            "description": "Berceau des mariachis."
          },
          {
            "id": "monterrey",
            "name": "Monterrey",
            "countryId": "mexico",
            "isCapital": false,
            "coords": {
              "lat": 25.6866,
              "lng": -100.3161,
              "x": 37,
              "y": 54
            },
            "population": "1.1 M",
            "region": "Nuevo León",
            "description": "Capitale industrielle du nord."
          },
          {
            "id": "cancun",
            "name": "Cancún",
            "countryId": "mexico",
            "isCapital": false,
            "coords": {
              "lat": 21.1619,
              "lng": -86.8515,
              "x": 50,
              "y": 62
            },
            "population": "880 k",
            "region": "Quintana Roo",
            "description": "Paradis balnéaire des Caraïbes."
          }
        ]
      },
      {
        "id": "cuba",
        "name": "Cuba",
        "continentId": "north_america",
        "capital": "La Havane",
        "capitalCoords": {
          "lat": 23.1136,
          "lng": -82.3666,
          "x": 54,
          "y": 58
        },
        "flag": "🇨🇺",
        "centerCoords": {
          "lat": 21.5218,
          "lng": -77.7812,
          "x": 54,
          "y": 58
        },
        "description": "La plus grande île des Caraïbes renommée pour sa musique et son histoire.",
        "cities": [
          {
            "id": "havana",
            "name": "La Havane",
            "countryId": "cuba",
            "isCapital": true,
            "coords": {
              "lat": 23.1136,
              "lng": -82.3666,
              "x": 54,
              "y": 58
            },
            "population": "2.1 M",
            "region": "La Havane",
            "description": "Capitale bordant le Malecón."
          },
          {
            "id": "santiago_de_cuba",
            "name": "Santiago de Cuba",
            "countryId": "cuba",
            "isCapital": false,
            "coords": {
              "lat": 20.0169,
              "lng": -75.8302,
              "x": 62,
              "y": 64
            },
            "population": "430 k",
            "region": "Santiago",
            "description": "Berceau de la musique son."
          },
          {
            "id": "camaguey",
            "name": "Camagüey",
            "countryId": "cuba",
            "isCapital": false,
            "coords": {
              "lat": 21.3854,
              "lng": -77.9171,
              "x": 59,
              "y": 61
            },
            "population": "320 k",
            "region": "Camagüey",
            "description": "Cité coloniale des tinajones."
          }
        ]
      },
      {
        "id": "guatemala",
        "name": "Guatemala",
        "continentId": "north_america",
        "capital": "Guatemala",
        "capitalCoords": {
          "lat": 14.6349,
          "lng": -90.5069,
          "x": 44,
          "y": 72
        },
        "flag": "🇬🇹",
        "centerCoords": {
          "lat": 15.7835,
          "lng": -90.2308,
          "x": 44,
          "y": 72
        },
        "description": "Cœur du monde maya abritant les pyramides de Tikal et le lac Atitlán.",
        "cities": [
          {
            "id": "guatemala_city",
            "name": "Guatemala",
            "countryId": "guatemala",
            "isCapital": true,
            "coords": {
              "lat": 14.6349,
              "lng": -90.5069,
              "x": 44,
              "y": 72
            },
            "population": "1.2 M",
            "region": "Guatemala",
            "description": "Plus grande métropole d'Amérique centrale."
          },
          {
            "id": "quetzaltenango",
            "name": "Quetzaltenango",
            "countryId": "guatemala",
            "isCapital": false,
            "coords": {
              "lat": 14.8333,
              "lng": -91.5167,
              "x": 43,
              "y": 71
            },
            "population": "180 k",
            "region": "Quetzaltenango",
            "description": "Xela, cité des hautes terres mayas."
          },
          {
            "id": "antigua_guatemala",
            "name": "Antigua",
            "countryId": "guatemala",
            "isCapital": false,
            "coords": {
              "lat": 14.5586,
              "lng": -90.7295,
              "x": 44,
              "y": 72
            },
            "population": "45 k",
            "region": "Sacatepéquez",
            "description": "Joyau colonial baroque entouré de volcans."
          }
        ]
      },
      {
        "id": "panama",
        "name": "Panama",
        "continentId": "north_america",
        "capital": "Panama",
        "capitalCoords": {
          "lat": 8.9824,
          "lng": -79.5199,
          "x": 58,
          "y": 85
        },
        "flag": "🇵🇦",
        "centerCoords": {
          "lat": 8.5379,
          "lng": -80.7821,
          "x": 58,
          "y": 85
        },
        "description": "Isthme reliant l'Atlantique et le Pacifique par son canal.",
        "cities": [
          {
            "id": "panama_city",
            "name": "Panama",
            "countryId": "panama",
            "isCapital": true,
            "coords": {
              "lat": 8.9824,
              "lng": -79.5199,
              "x": 58,
              "y": 85
            },
            "population": "880 k",
            "region": "Panama",
            "description": "Capitale moderne au bord du canal."
          },
          {
            "id": "colon",
            "name": "Colón",
            "countryId": "panama",
            "isCapital": false,
            "coords": {
              "lat": 9.3598,
              "lng": -79.9013,
              "x": 57,
              "y": 84
            },
            "population": "200 k",
            "region": "Colón",
            "description": "Entrée atlantique du canal."
          },
          {
            "id": "david",
            "name": "David",
            "countryId": "panama",
            "isCapital": false,
            "coords": {
              "lat": 8.4273,
              "lng": -82.4312,
              "x": 54,
              "y": 86
            },
            "population": "145 k",
            "region": "Chiriquí",
            "description": "Cité prospère de l'ouest."
          }
        ]
      },
      {
        "id": "dominican_republic",
        "name": "République Dominicaine",
        "continentId": "north_america",
        "capital": "Saint-Domingue",
        "capitalCoords": {
          "lat": 18.4861,
          "lng": -69.9312,
          "x": 68,
          "y": 66
        },
        "flag": "🇩🇴",
        "centerCoords": {
          "lat": 18.7357,
          "lng": -70.1627,
          "x": 68,
          "y": 66
        },
        "description": "Terre de merengue, de bachata et des premières cités du Nouveau Monde.",
        "cities": [
          {
            "id": "santo_domingo",
            "name": "Saint-Domingue",
            "countryId": "dominican_republic",
            "isCapital": true,
            "coords": {
              "lat": 18.4861,
              "lng": -69.9312,
              "x": 68,
              "y": 66
            },
            "population": "3.0 M",
            "region": "District National",
            "description": "Première cité européenne d'Amérique avec sa zone coloniale."
          },
          {
            "id": "santiago_dr",
            "name": "Santiago de los Caballeros",
            "countryId": "dominican_republic",
            "isCapital": false,
            "coords": {
              "lat": 19.4517,
              "lng": -70.697,
              "x": 67,
              "y": 64
            },
            "population": "700 k",
            "region": "Santiago",
            "description": "Cœur économique de la vallée du Cibao."
          },
          {
            "id": "punta_cana",
            "name": "Punta Cana",
            "countryId": "dominican_republic",
            "isCapital": false,
            "coords": {
              "lat": 18.582,
              "lng": -68.4055,
              "x": 71,
              "y": 65
            },
            "population": "100 k",
            "region": "La Altagracia",
            "description": "Célèbre destination de plages paradisiaques."
          }
        ]
      },
      {
        "id": "jamaica",
        "name": "Jamaïque",
        "continentId": "north_america",
        "capital": "Kingston",
        "capitalCoords": {
          "lat": 17.9712,
          "lng": -76.7936,
          "x": 60,
          "y": 68
        },
        "flag": "🇯🇲",
        "centerCoords": {
          "lat": 18.1096,
          "lng": -77.2975,
          "x": 60,
          "y": 68
        },
        "description": "Berceau mondial du reggae et de Bob Marley dans les Caraïbes.",
        "cities": [
          {
            "id": "kingston",
            "name": "Kingston",
            "countryId": "jamaica",
            "isCapital": true,
            "coords": {
              "lat": 17.9712,
              "lng": -76.7936,
              "x": 60,
              "y": 68
            },
            "population": "670 k",
            "region": "Surrey",
            "description": "Capitale musicale au pied des Blue Mountains."
          },
          {
            "id": "montego_bay",
            "name": "Montego Bay",
            "countryId": "jamaica",
            "isCapital": false,
            "coords": {
              "lat": 18.4762,
              "lng": -77.8939,
              "x": 59,
              "y": 67
            },
            "population": "110 k",
            "region": "Cornwall",
            "description": "Capitale touristique de la côte nord."
          },
          {
            "id": "ocho_rios",
            "name": "Ocho Rios",
            "countryId": "jamaica",
            "isCapital": false,
            "coords": {
              "lat": 18.4074,
              "lng": -77.1031,
              "x": 60,
              "y": 67
            },
            "population": "16 k",
            "region": "Middlesex",
            "description": "Célèbre pour les chutes de la Dunn."
          }
        ]
      },
      {
        "id": "costa_rica",
        "name": "Costa Rica",
        "continentId": "north_america",
        "capital": "San José",
        "capitalCoords": {
          "lat": 9.9281,
          "lng": -84.0907,
          "x": 42,
          "y": 84
        },
        "flag": "🇨🇷",
        "centerCoords": {
          "lat": 9.7489,
          "lng": -83.7534,
          "x": 42,
          "y": 84
        },
        "description": "Pionnier mondial de l'écotourisme et de la préservation de la biodiversité.",
        "cities": [
          {
            "id": "san_jose_cr",
            "name": "San José",
            "countryId": "costa_rica",
            "isCapital": true,
            "coords": {
              "lat": 9.9281,
              "lng": -84.0907,
              "x": 42,
              "y": 84
            },
            "population": "340 k",
            "region": "San José",
            "description": "Capitale animée de la Vallée Centrale entourée de volcans."
          },
          {
            "id": "alajuela",
            "name": "Alajuela",
            "countryId": "costa_rica",
            "isCapital": false,
            "coords": {
              "lat": 10.0163,
              "lng": -84.2116,
              "x": 42,
              "y": 83
            },
            "population": "255 k",
            "region": "Alajuela",
            "description": "Cité des mangues et porte d'accès au volcan Poás."
          },
          {
            "id": "limon",
            "name": "Limón",
            "countryId": "costa_rica",
            "isCapital": false,
            "coords": {
              "lat": 9.9907,
              "lng": -83.036,
              "x": 43,
              "y": 84
            },
            "population": "61 k",
            "region": "Limón",
            "description": "Grand port caribéen à la culture afro-costaricienne vibrante."
          }
        ]
      },
      {
        "id": "honduras",
        "name": "Honduras",
        "continentId": "north_america",
        "capital": "Tegucigalpa",
        "capitalCoords": {
          "lat": 14.0723,
          "lng": -87.1921,
          "x": 38,
          "y": 78
        },
        "flag": "🇭🇳",
        "centerCoords": {
          "lat": 15.2,
          "lng": -86.2419,
          "x": 38,
          "y": 77
        },
        "description": "Pays d'Amérique centrale aux ruines mayas de Copán et barrières de corail.",
        "cities": [
          {
            "id": "tegucigalpa",
            "name": "Tegucigalpa",
            "countryId": "honduras",
            "isCapital": true,
            "coords": {
              "lat": 14.0723,
              "lng": -87.1921,
              "x": 38,
              "y": 78
            },
            "population": "1.1 M",
            "region": "Francisco Morazán",
            "description": "Capitale nichée dans une cuvette montagneuse verdoyante."
          },
          {
            "id": "san_pedro_sula",
            "name": "San Pedro Sula",
            "countryId": "honduras",
            "isCapital": false,
            "coords": {
              "lat": 15.5042,
              "lng": -88.025,
              "x": 37,
              "y": 76
            },
            "population": "720 k",
            "region": "Cortés",
            "description": "Moteur industriel et commercial du nord du pays."
          },
          {
            "id": "la_ceiba",
            "name": "La Ceiba",
            "countryId": "honduras",
            "isCapital": false,
            "coords": {
              "lat": 15.7597,
              "lng": -86.7822,
              "x": 38,
              "y": 75
            },
            "population": "200 k",
            "region": "Atlántida",
            "description": "Capitale de l'écotourisme côtier et porte vers les îles de la Baie."
          }
        ]
      },
      {
        "id": "el_salvador",
        "name": "Salvador",
        "continentId": "north_america",
        "capital": "San Salvador",
        "capitalCoords": {
          "lat": 13.6929,
          "lng": -89.2182,
          "x": 36,
          "y": 79
        },
        "flag": "🇸🇻",
        "centerCoords": {
          "lat": 13.7942,
          "lng": -88.8965,
          "x": 36,
          "y": 79
        },
        "description": "La Terre des Volcans, plus petit pays d'Amérique centrale.",
        "cities": [
          {
            "id": "san_salvador",
            "name": "San Salvador",
            "countryId": "el_salvador",
            "isCapital": true,
            "coords": {
              "lat": 13.6929,
              "lng": -89.2182,
              "x": 36,
              "y": 79
            },
            "population": "570 k",
            "region": "San Salvador",
            "description": "Capitale dynamique dominée par le volcan San Salvador."
          },
          {
            "id": "santa_ana",
            "name": "Santa Ana",
            "countryId": "el_salvador",
            "isCapital": false,
            "coords": {
              "lat": 13.9942,
              "lng": -89.5597,
              "x": 35,
              "y": 78
            },
            "population": "270 k",
            "region": "Santa Ana",
            "description": "Deuxième ville réputée pour sa cathédrale néogothique et son lac Coatepeque."
          }
        ]
      },
      {
        "id": "nicaragua",
        "name": "Nicaragua",
        "continentId": "north_america",
        "capital": "Managua",
        "capitalCoords": {
          "lat": 12.115,
          "lng": -86.2362,
          "x": 39,
          "y": 81
        },
        "flag": "🇳🇮",
        "centerCoords": {
          "lat": 12.8654,
          "lng": -85.2072,
          "x": 39,
          "y": 80
        },
        "description": "La Terre des Lacs et des Volcans au cœur de l'isthme centre-américain.",
        "cities": [
          {
            "id": "managua",
            "name": "Managua",
            "countryId": "nicaragua",
            "isCapital": true,
            "coords": {
              "lat": 12.115,
              "lng": -86.2362,
              "x": 39,
              "y": 81
            },
            "population": "1.0 M",
            "region": "Managua",
            "description": "Capitale côtoyant le vaste lac Xolotlán."
          },
          {
            "id": "leon",
            "name": "León",
            "countryId": "nicaragua",
            "isCapital": false,
            "coords": {
              "lat": 12.4379,
              "lng": -86.878,
              "x": 38,
              "y": 80
            },
            "population": "210 k",
            "region": "León",
            "description": "Foyer universitaire et culturel avec sa célèbre cathédrale blanche."
          },
          {
            "id": "granada_ni",
            "name": "Granada",
            "countryId": "nicaragua",
            "isCapital": false,
            "coords": {
              "lat": 11.9299,
              "lng": -85.956,
              "x": 39,
              "y": 81
            },
            "population": "130 k",
            "region": "Granada",
            "description": "Joyau colonial fondé en 1524 au bord du lac Nicaragua."
          }
        ]
      },
      {
        "id": "belize",
        "name": "Belize",
        "continentId": "north_america",
        "capital": "Belmopan",
        "capitalCoords": {
          "lat": 17.251,
          "lng": -88.759,
          "x": 36,
          "y": 73
        },
        "flag": "🇧🇿",
        "centerCoords": {
          "lat": 17.1899,
          "lng": -88.4976,
          "x": 36,
          "y": 73
        },
        "description": "Pays anglophone réputé pour son Grand Trou Bleu et sa barrière de corail.",
        "cities": [
          {
            "id": "belmopan",
            "name": "Belmopan",
            "countryId": "belize",
            "isCapital": true,
            "coords": {
              "lat": 17.251,
              "lng": -88.759,
              "x": 36,
              "y": 73
            },
            "population": "25 k",
            "region": "Cayo",
            "description": "Une des plus petites capitales nationales construite après l'ouragan Hattie."
          },
          {
            "id": "belize_city",
            "name": "Belize City",
            "countryId": "belize",
            "isCapital": false,
            "coords": {
              "lat": 17.5046,
              "lng": -88.1962,
              "x": 37,
              "y": 72
            },
            "population": "65 k",
            "region": "Belize",
            "description": "Centre économique et port historique des Caraïbes."
          }
        ]
      },
      {
        "id": "haiti",
        "name": "Haïti",
        "continentId": "north_america",
        "capital": "Port-au-Prince",
        "capitalCoords": {
          "lat": 18.5944,
          "lng": -72.3074,
          "x": 55,
          "y": 71
        },
        "flag": "🇭🇹",
        "centerCoords": {
          "lat": 18.9712,
          "lng": -72.2852,
          "x": 55,
          "y": 70
        },
        "description": "Première république noire indépendante, réputée pour sa créativité artistique.",
        "cities": [
          {
            "id": "port_au_prince",
            "name": "Port-au-Prince",
            "countryId": "haiti",
            "isCapital": true,
            "coords": {
              "lat": 18.5944,
              "lng": -72.3074,
              "x": 55,
              "y": 71
            },
            "population": "1.2 M",
            "region": "Ouest",
            "description": "Capitale caribéenne bordant le golfe de la Gonâve."
          },
          {
            "id": "cap_haitien",
            "name": "Cap-Haïtien",
            "countryId": "haiti",
            "isCapital": false,
            "coords": {
              "lat": 19.7578,
              "lng": -72.2042,
              "x": 55,
              "y": 69
            },
            "population": "280 k",
            "region": "Nord",
            "description": "Cité historique dominée par la monumentale Citadelle Laferrière."
          },
          {
            "id": "les_cayes",
            "name": "Les Cayes",
            "countryId": "haiti",
            "isCapital": false,
            "coords": {
              "lat": 18.1933,
              "lng": -73.746,
              "x": 53,
              "y": 72
            },
            "population": "125 k",
            "region": "Sud",
            "description": "Grand port de la péninsule de Tiburon."
          }
        ]
      },
      {
        "id": "bahamas",
        "name": "Bahamas",
        "continentId": "north_america",
        "capital": "Nassau",
        "capitalCoords": {
          "lat": 25.0443,
          "lng": -77.3504,
          "x": 51,
          "y": 59
        },
        "flag": "🇧🇸",
        "centerCoords": {
          "lat": 25.0343,
          "lng": -77.3963,
          "x": 51,
          "y": 59
        },
        "description": "Archipel corallien de plus de 700 îles et cayes aux eaux turquoise.",
        "cities": [
          {
            "id": "nassau",
            "name": "Nassau",
            "countryId": "bahamas",
            "isCapital": true,
            "coords": {
              "lat": 25.0443,
              "lng": -77.3504,
              "x": 51,
              "y": 59
            },
            "population": "275 k",
            "region": "New Providence",
            "description": "Capitale touristique sur l'île de New Providence avec Paradise Island."
          },
          {
            "id": "freeport",
            "name": "Freeport",
            "countryId": "bahamas",
            "isCapital": false,
            "coords": {
              "lat": 26.5333,
              "lng": -78.7,
              "x": 50,
              "y": 56
            },
            "population": "46 k",
            "region": "Grand Bahama",
            "description": "Port franc et centre balnéaire de Grand Bahama."
          }
        ]
      },
      {
        "id": "trinidad_and_tobago",
        "name": "Trinité-et-Tobago",
        "continentId": "north_america",
        "capital": "Port-d'Espagne",
        "capitalCoords": {
          "lat": 10.6549,
          "lng": -61.5019,
          "x": 67,
          "y": 83
        },
        "flag": "🇹🇹",
        "centerCoords": {
          "lat": 10.6918,
          "lng": -61.2225,
          "x": 67,
          "y": 83
        },
        "description": "Nation insulaire berceau du calypso, du steelpan et du carnaval.",
        "cities": [
          {
            "id": "port_of_spain",
            "name": "Port-d'Espagne",
            "countryId": "trinidad_and_tobago",
            "isCapital": true,
            "coords": {
              "lat": 10.6549,
              "lng": -61.5019,
              "x": 67,
              "y": 83
            },
            "population": "37 k",
            "region": "Port-d'Espagne",
            "description": "Capitale caribéenne vibrante bordant le golfe de Paria."
          },
          {
            "id": "san_fernando_tt",
            "name": "San Fernando",
            "countryId": "trinidad_and_tobago",
            "isCapital": false,
            "coords": {
              "lat": 10.2833,
              "lng": -61.4667,
              "x": 67,
              "y": 84
            },
            "population": "50 k",
            "region": "San Fernando",
            "description": "Deuxième ville et capitale industrielle du pays."
          },
          {
            "id": "chaguanas",
            "name": "Chaguanas",
            "countryId": "trinidad_and_tobago",
            "isCapital": false,
            "coords": {
              "lat": 10.5167,
              "lng": -61.4167,
              "x": 67,
              "y": 83
            },
            "population": "83 k",
            "region": "Chaguanas",
            "description": "Borough le plus peuplé au cœur de l'île de Trinité."
          }
        ]
      },
      {
        "id": "barbados",
        "name": "Barbade",
        "continentId": "north_america",
        "capital": "Bridgetown",
        "capitalCoords": {
          "lat": 13.106,
          "lng": -59.6132,
          "x": 70,
          "y": 80
        },
        "flag": "🇧🇧",
        "centerCoords": {
          "lat": 13.1939,
          "lng": -59.5432,
          "x": 70,
          "y": 80
        },
        "description": "Île la plus orientale des Caraïbes, célèbre pour son rhum et ses plages.",
        "cities": [
          {
            "id": "bridgetown",
            "name": "Bridgetown",
            "countryId": "barbados",
            "isCapital": true,
            "coords": {
              "lat": 13.106,
              "lng": -59.6132,
              "x": 70,
              "y": 80
            },
            "population": "110 k",
            "region": "Saint Michael",
            "description": "Capitale historique classée UNESCO avec sa garnison militaire."
          },
          {
            "id": "speightstown",
            "name": "Speightstown",
            "countryId": "barbados",
            "isCapital": false,
            "coords": {
              "lat": 13.25,
              "lng": -59.65,
              "x": 70,
              "y": 79
            },
            "population": "4 k",
            "region": "Saint Peter",
            "description": "Port pittoresque surnommé Little Bristol."
          }
        ]
      },
      {
        "id": "saint_lucia",
        "name": "Sainte-Lucie",
        "continentId": "north_america",
        "capital": "Castries",
        "capitalCoords": {
          "lat": 14.0101,
          "lng": -60.9875,
          "x": 68,
          "y": 78
        },
        "flag": "🇱🇨",
        "centerCoords": {
          "lat": 13.9094,
          "lng": -60.9789,
          "x": 68,
          "y": 78
        },
        "description": "Île volcanique iconique ornée des deux spectaculaires pitons inscrits à l'UNESCO.",
        "cities": [
          {
            "id": "castries",
            "name": "Castries",
            "countryId": "saint_lucia",
            "isCapital": true,
            "coords": {
              "lat": 14.0101,
              "lng": -60.9875,
              "x": 68,
              "y": 78
            },
            "population": "70 k",
            "region": "Castries",
            "description": "Capitale animée lovée au fond d'une baie protégée."
          },
          {
            "id": "soufriere_lc",
            "name": "Soufrière",
            "countryId": "saint_lucia",
            "isCapital": false,
            "coords": {
              "lat": 13.8561,
              "lng": -61.0566,
              "x": 68,
              "y": 78
            },
            "population": "8 k",
            "region": "Soufrière",
            "description": "Ancienne capitale au pied du volcan et des majestueux Pitons."
          }
        ]
      },
      {
        "id": "grenada",
        "name": "Grenade",
        "continentId": "north_america",
        "capital": "Saint-Georges",
        "capitalCoords": {
          "lat": 12.0561,
          "lng": -61.7486,
          "x": 67,
          "y": 81
        },
        "flag": "🇬🇩",
        "centerCoords": {
          "lat": 12.1165,
          "lng": -61.679,
          "x": 67,
          "y": 81
        },
        "description": "L'Île aux Épices réputée pour ses plantations de muscade et ses anses bleues.",
        "cities": [
          {
            "id": "st_georges",
            "name": "Saint-Georges",
            "countryId": "grenada",
            "isCapital": true,
            "coords": {
              "lat": 12.0561,
              "lng": -61.7486,
              "x": 67,
              "y": 81
            },
            "population": "33 k",
            "region": "Saint George",
            "description": "Capitale pittoresque bâtie autour d'un cratère volcanique submergé."
          }
        ]
      },
      {
        "id": "antigua_and_barbuda",
        "name": "Antigua-et-Barbuda",
        "continentId": "north_america",
        "capital": "Saint John's",
        "capitalCoords": {
          "lat": 17.1274,
          "lng": -61.8468,
          "x": 67,
          "y": 73
        },
        "flag": "🇦🇬",
        "centerCoords": {
          "lat": 17.0608,
          "lng": -61.7964,
          "x": 67,
          "y": 73
        },
        "description": "Paradis tropical renommé pour ses 365 plages de sable blanc.",
        "cities": [
          {
            "id": "st_johns",
            "name": "Saint John's",
            "countryId": "antigua_and_barbuda",
            "isCapital": true,
            "coords": {
              "lat": 17.1274,
              "lng": -61.8468,
              "x": 67,
              "y": 73
            },
            "population": "22 k",
            "region": "Saint John",
            "description": "Capitale caribéenne avec sa cathédrale baroque à deux tours."
          }
        ]
      },
      {
        "id": "saint_kitts_and_nevis",
        "name": "Saint-Christophe-et-Niévès",
        "continentId": "north_america",
        "capital": "Basseterre",
        "capitalCoords": {
          "lat": 17.3026,
          "lng": -62.7177,
          "x": 66,
          "y": 72
        },
        "flag": "🇰🇳",
        "centerCoords": {
          "lat": 17.3578,
          "lng": -62.783,
          "x": 66,
          "y": 72
        },
        "description": "Plus petit État souverain des Amériques par sa superficie et sa population.",
        "cities": [
          {
            "id": "basseterre",
            "name": "Basseterre",
            "countryId": "saint_kitts_and_nevis",
            "isCapital": true,
            "coords": {
              "lat": 17.3026,
              "lng": -62.7177,
              "x": 66,
              "y": 72
            },
            "population": "13 k",
            "region": "Saint George Basseterre",
            "description": "Capitale historique dotée d'un centre victorien Circus inspiré de Piccadilly."
          }
        ]
      },
      {
        "id": "dominica",
        "name": "Dominique",
        "continentId": "north_america",
        "capital": "Roseau",
        "capitalCoords": {
          "lat": 15.3017,
          "lng": -61.3881,
          "x": 68,
          "y": 76
        },
        "flag": "🇩🇲",
        "centerCoords": {
          "lat": 15.415,
          "lng": -61.371,
          "x": 68,
          "y": 76
        },
        "description": "L'Île Nature des Caraïbes avec cascades, sources chaudes et forêt tropicale.",
        "cities": [
          {
            "id": "roseau",
            "name": "Roseau",
            "countryId": "dominica",
            "isCapital": true,
            "coords": {
              "lat": 15.3017,
              "lng": -61.3881,
              "x": 68,
              "y": 76
            },
            "population": "15 k",
            "region": "Saint George",
            "description": "Capitale côtière préservée entourée par la mer des Caraïbes et la jungle."
          }
        ]
      },
      {
        "id": "saint_vincent",
        "name": "Saint-Vincent-et-les-Grenadines",
        "continentId": "north_america",
        "capital": "Kingstown",
        "capitalCoords": {
          "lat": 13.16,
          "lng": -61.2248,
          "x": 67,
          "y": 79
        },
        "flag": "🇻🇨",
        "centerCoords": {
          "lat": 12.9843,
          "lng": -61.2872,
          "x": 67,
          "y": 79
        },
        "description": "Chapelet d'îles paradisiaques réputé pour la voile et le volcan de la Soufrière.",
        "cities": [
          {
            "id": "kingstown",
            "name": "Kingstown",
            "countryId": "saint_vincent",
            "isCapital": true,
            "coords": {
              "lat": 13.16,
              "lng": -61.2248,
              "x": 67,
              "y": 79
            },
            "population": "13 k",
            "region": "Saint George",
            "description": "La Cité des Arches, capitale marchande de l'archipel."
          }
        ]
      },
      {
        "id": "puerto_rico",
        "name": "Porto Rico",
        "continentId": "north_america",
        "capital": "San Juan",
        "capitalCoords": {
          "lat": 18.4655,
          "lng": -66.1057,
          "x": 61,
          "y": 71
        },
        "flag": "🇵🇷",
        "centerCoords": {
          "lat": 18.2208,
          "lng": -66.5901,
          "x": 61,
          "y": 71
        },
        "description": "Territoire caribéen célèbre pour le fort El Morro, la salsa et la forêt El Yunque.",
        "cities": [
          {
            "id": "san_juan",
            "name": "San Juan",
            "countryId": "puerto_rico",
            "isCapital": true,
            "coords": {
              "lat": 18.4655,
              "lng": -66.1057,
              "x": 61,
              "y": 71
            },
            "population": "340 k",
            "region": "San Juan",
            "description": "Capitale coloniale espagnole fortifiée du XVIe siècle."
          },
          {
            "id": "ponce",
            "name": "Ponce",
            "countryId": "puerto_rico",
            "isCapital": false,
            "coords": {
              "lat": 18.0111,
              "lng": -66.6141,
              "x": 60,
              "y": 72
            },
            "population": "130 k",
            "region": "Ponce",
            "description": "La Perle du Sud avec son architecture néoclassique créole."
          }
        ]
      },
      {
        "id": "greenland",
        "name": "Groenland",
        "continentId": "north_america",
        "capital": "Nuuk",
        "capitalCoords": {
          "lat": 64.1814,
          "lng": -51.6941,
          "x": 77,
          "y": 15
        },
        "flag": "🇬🇱",
        "centerCoords": {
          "lat": 71.7069,
          "lng": -42.6043,
          "x": 86,
          "y": 8
        },
        "description": "Plus grande île du monde, territoire autonome d'immenses calottes glaciaires.",
        "cities": [
          {
            "id": "nuuk",
            "name": "Nuuk",
            "countryId": "greenland",
            "isCapital": true,
            "coords": {
              "lat": 64.1814,
              "lng": -51.6941,
              "x": 77,
              "y": 15
            },
            "population": "19 k",
            "region": "Sermersooq",
            "description": "Capitale la plus septentrionale, nichée dans un majestueux réseau de fjords."
          },
          {
            "id": "ilulissat",
            "name": "Ilulissat",
            "countryId": "greenland",
            "isCapital": false,
            "coords": {
              "lat": 69.2167,
              "lng": -51.1,
              "x": 78,
              "y": 10
            },
            "population": "4.8 k",
            "region": "Avannaata",
            "description": "Célèbre pour son fjord de glace classé UNESCO et ses icebergs géants."
          }
        ]
      },
      {
        "id": "curacao",
        "name": "Curaçao",
        "continentId": "north_america",
        "capital": "Willemstad",
        "capitalCoords": {
          "lat": 12.1224,
          "lng": -68.9339,
          "x": 58,
          "y": 81
        },
        "flag": "🇨🇼",
        "centerCoords": {
          "lat": 12.1696,
          "lng": -68.99,
          "x": 58,
          "y": 81
        },
        "description": "Île néerlandaise des Caraïbes aux façades coloniales pastel classées UNESCO.",
        "cities": [
          {
            "id": "willemstad",
            "name": "Willemstad",
            "countryId": "curacao",
            "isCapital": true,
            "coords": {
              "lat": 12.1224,
              "lng": -68.9339,
              "x": 58,
              "y": 81
            },
            "population": "150 k",
            "region": "Willemstad",
            "description": "Capitale aux quais bordés de bâtisses néerlandaises colorées Handelskade."
          }
        ]
      },
      {
        "id": "aruba",
        "name": "Aruba",
        "continentId": "north_america",
        "capital": "Oranjestad",
        "capitalCoords": {
          "lat": 12.5211,
          "lng": -70.0355,
          "x": 57,
          "y": 81
        },
        "flag": "🇦🇼",
        "centerCoords": {
          "lat": 12.5211,
          "lng": -69.9683,
          "x": 57,
          "y": 81
        },
        "description": "Île caribéenne baignée d'alizés réputée pour ses arbres Divi-divi et ses plages.",
        "cities": [
          {
            "id": "oranjestad",
            "name": "Oranjestad",
            "countryId": "aruba",
            "isCapital": true,
            "coords": {
              "lat": 12.5211,
              "lng": -70.0355,
              "x": 57,
              "y": 81
            },
            "population": "35 k",
            "region": "Oranjestad",
            "description": "Capitale au charme hollandais avec ses façades ornementées."
          }
        ]
      },
      {
        "id": "bermuda",
        "name": "Bermudes",
        "continentId": "north_america",
        "capital": "Hamilton",
        "capitalCoords": {
          "lat": 32.2949,
          "lng": -64.783,
          "x": 63,
          "y": 48
        },
        "flag": "🇧🇲",
        "centerCoords": {
          "lat": 32.3078,
          "lng": -64.7505,
          "x": 63,
          "y": 48
        },
        "description": "Archipel atlantique réputé pour ses plages de sable rose et ses récifs coralliens.",
        "cities": [
          {
            "id": "hamilton_bm",
            "name": "Hamilton",
            "countryId": "bermuda",
            "isCapital": true,
            "coords": {
              "lat": 32.2949,
              "lng": -64.783,
              "x": 63,
              "y": 48
            },
            "population": "1 k",
            "region": "Pembroke",
            "description": "Capitale financière et maritime bordant un port protégé."
          },
          {
            "id": "st_georges_bm",
            "name": "St. George's",
            "countryId": "bermuda",
            "isCapital": false,
            "coords": {
              "lat": 32.3814,
              "lng": -64.6781,
              "x": 64,
              "y": 47
            },
            "population": "1.5 k",
            "region": "St. George's",
            "description": "Plus ancienne colonie anglaise continue du Nouveau Monde, classée UNESCO."
          }
        ]
      }
    ]
  },
  {
    "id": "south_america",
    "name": "Amérique du Sud",
    "code": "SA",
    "centerCoords": {
      "lat": -15,
      "lng": -60,
      "x": 32,
      "y": 65
    },
    "countries": [
      {
        "id": "brazil",
        "name": "Brésil",
        "continentId": "south_america",
        "capital": "Brasília",
        "capitalCoords": {
          "lat": -15.7975,
          "lng": -47.8919,
          "x": 54,
          "y": 46
        },
        "flag": "🇧🇷",
        "centerCoords": {
          "lat": -14.235,
          "lng": -51.9253,
          "x": 38,
          "y": 34
        },
        "description": "Plus vaste pays d'Amérique latine, réputé pour l'Amazonie et le carnaval.",
        "cities": [
          {
            "id": "brasilia",
            "name": "Brasília",
            "countryId": "brazil",
            "isCapital": true,
            "coords": {
              "lat": -15.7975,
              "lng": -47.8919,
              "x": 54,
              "y": 46
            },
            "population": "3.0 M",
            "region": "DF",
            "description": "Capitale futuriste dessinée par Niemeyer."
          },
          {
            "id": "sao_paulo",
            "name": "São Paulo",
            "countryId": "brazil",
            "isCapital": false,
            "coords": {
              "lat": -23.5505,
              "lng": -46.6333,
              "x": 56,
              "y": 70
            },
            "population": "12.3 M",
            "region": "São Paulo",
            "description": "Mégalopole financière du Brésil."
          },
          {
            "id": "rio_de_janeiro",
            "name": "Rio de Janeiro",
            "countryId": "brazil",
            "isCapital": false,
            "coords": {
              "lat": -22.9068,
              "lng": -43.1729,
              "x": 64,
              "y": 67
            },
            "population": "6.7 M",
            "region": "Rio de Janeiro",
            "description": "Célèbre pour le Corcovado et Copacabana."
          },
          {
            "id": "salvador",
            "name": "Salvador",
            "countryId": "brazil",
            "isCapital": false,
            "coords": {
              "lat": -12.9777,
              "lng": -38.5016,
              "x": 70,
              "y": 42
            },
            "population": "2.9 M",
            "region": "Bahia",
            "description": "Berceau afro-brésilien."
          }
        ]
      },
      {
        "id": "argentina",
        "name": "Argentine",
        "continentId": "south_america",
        "capital": "Buenos Aires",
        "capitalCoords": {
          "lat": -34.6037,
          "lng": -58.3816,
          "x": 58,
          "y": 65
        },
        "flag": "🇦🇷",
        "centerCoords": {
          "lat": -38.4161,
          "lng": -63.6167,
          "x": 58,
          "y": 65
        },
        "description": "Terre de tango, de pampa et de glaciers patagoniens.",
        "cities": [
          {
            "id": "buenos_aires",
            "name": "Buenos Aires",
            "countryId": "argentina",
            "isCapital": true,
            "coords": {
              "lat": -34.6037,
              "lng": -58.3816,
              "x": 58,
              "y": 65
            },
            "population": "3.1 M",
            "region": "Buenos Aires",
            "description": "Capitale élégante sur le Río de la Plata."
          },
          {
            "id": "cordoba_arg",
            "name": "Córdoba",
            "countryId": "argentina",
            "isCapital": false,
            "coords": {
              "lat": -31.4201,
              "lng": -64.1888,
              "x": 52,
              "y": 60
            },
            "population": "1.4 M",
            "region": "Córdoba",
            "description": "Cité universitaire historique."
          },
          {
            "id": "rosario",
            "name": "Rosario",
            "countryId": "argentina",
            "isCapital": false,
            "coords": {
              "lat": -32.9468,
              "lng": -60.6393,
              "x": 56,
              "y": 62
            },
            "population": "1.2 M",
            "region": "Santa Fe",
            "description": "Grand port fluvial sur le Paraná."
          },
          {
            "id": "mendoza",
            "name": "Mendoza",
            "countryId": "argentina",
            "isCapital": false,
            "coords": {
              "lat": -32.8895,
              "lng": -68.8458,
              "x": 47,
              "y": 62
            },
            "population": "1.1 M",
            "region": "Mendoza",
            "description": "Capitale du vin au pied de l'Aconcagua."
          }
        ]
      },
      {
        "id": "colombia",
        "name": "Colombie",
        "continentId": "south_america",
        "capital": "Bogotá",
        "capitalCoords": {
          "lat": 4.711,
          "lng": -74.0721,
          "x": 26,
          "y": 22
        },
        "flag": "🇨🇴",
        "centerCoords": {
          "lat": 4.5709,
          "lng": -74.2973,
          "x": 26,
          "y": 22
        },
        "description": "Pays andin réputé pour son café et ses deux façades océaniques.",
        "cities": [
          {
            "id": "bogota",
            "name": "Bogotá",
            "countryId": "colombia",
            "isCapital": true,
            "coords": {
              "lat": 4.711,
              "lng": -74.0721,
              "x": 26,
              "y": 22
            },
            "population": "7.9 M",
            "region": "Cundinamarca",
            "description": "Capitale perchée à 2600m d'altitude."
          },
          {
            "id": "medellin",
            "name": "Medellín",
            "countryId": "colombia",
            "isCapital": false,
            "coords": {
              "lat": 6.2442,
              "lng": -75.5812,
              "x": 25,
              "y": 19
            },
            "population": "2.5 M",
            "region": "Antioquia",
            "description": "La Ville de l'éternel printemps."
          },
          {
            "id": "cartagena",
            "name": "Carthagène",
            "countryId": "colombia",
            "isCapital": false,
            "coords": {
              "lat": 10.391,
              "lng": -75.4794,
              "x": 25,
              "y": 13
            },
            "population": "1.0 M",
            "region": "Bolívar",
            "description": "Cité coloniale fortifiée sur les Caraïbes."
          },
          {
            "id": "cali",
            "name": "Cali",
            "countryId": "colombia",
            "isCapital": false,
            "coords": {
              "lat": 3.4516,
              "lng": -76.532,
              "x": 24,
              "y": 24
            },
            "population": "2.2 M",
            "region": "Valle del Cauca",
            "description": "Capitale mondiale de la salsa."
          }
        ]
      },
      {
        "id": "peru",
        "name": "Pérou",
        "continentId": "south_america",
        "capital": "Lima",
        "capitalCoords": {
          "lat": -12.0464,
          "lng": -77.0428,
          "x": 20,
          "y": 40
        },
        "flag": "🇵🇪",
        "centerCoords": {
          "lat": -9.19,
          "lng": -75.0152,
          "x": 20,
          "y": 40
        },
        "description": "Terre des Incas abritant le Machu Picchu et Cusco.",
        "cities": [
          {
            "id": "lima",
            "name": "Lima",
            "countryId": "peru",
            "isCapital": true,
            "coords": {
              "lat": -12.0464,
              "lng": -77.0428,
              "x": 20,
              "y": 40
            },
            "population": "9.7 M",
            "region": "Lima",
            "description": "Capitale gastronomique au bord du Pacifique."
          },
          {
            "id": "cusco",
            "name": "Cusco",
            "countryId": "peru",
            "isCapital": false,
            "coords": {
              "lat": -13.5319,
              "lng": -71.9675,
              "x": 26,
              "y": 42
            },
            "population": "430 k",
            "region": "Cusco",
            "description": "Ancienne capitale de l'Empire inca."
          },
          {
            "id": "arequipa",
            "name": "Arequipa",
            "countryId": "peru",
            "isCapital": false,
            "coords": {
              "lat": -16.409,
              "lng": -71.5375,
              "x": 27,
              "y": 46
            },
            "population": "1.0 M",
            "region": "Arequipa",
            "description": "La Ville Blanche au pied du volcan Misti."
          }
        ]
      },
      {
        "id": "chile",
        "name": "Chili",
        "continentId": "south_america",
        "capital": "Santiago",
        "capitalCoords": {
          "lat": -33.4489,
          "lng": -70.6693,
          "x": 38,
          "y": 70
        },
        "flag": "🇨🇱",
        "centerCoords": {
          "lat": -35.6751,
          "lng": -71.543,
          "x": 38,
          "y": 70
        },
        "description": "Ruban géographique de 4300 km entre les Andes et le Pacifique.",
        "cities": [
          {
            "id": "santiago_chile",
            "name": "Santiago",
            "countryId": "chile",
            "isCapital": true,
            "coords": {
              "lat": -33.4489,
              "lng": -70.6693,
              "x": 38,
              "y": 70
            },
            "population": "6.2 M",
            "region": "Santiago",
            "description": "Capitale chilienne entourée des sommets andins."
          },
          {
            "id": "valparaiso",
            "name": "Valparaíso",
            "countryId": "chile",
            "isCapital": false,
            "coords": {
              "lat": -33.0472,
              "lng": -71.6127,
              "x": 37,
              "y": 69
            },
            "population": "300 k",
            "region": "Valparaíso",
            "description": "Cité portuaire aux collines colorées."
          },
          {
            "id": "antofagasta",
            "name": "Antofagasta",
            "countryId": "chile",
            "isCapital": false,
            "coords": {
              "lat": -23.6509,
              "lng": -70.3975,
              "x": 39,
              "y": 55
            },
            "population": "390 k",
            "region": "Antofagasta",
            "description": "Capitale du désert d'Atacama."
          }
        ]
      },
      {
        "id": "venezuela",
        "name": "Venezuela",
        "continentId": "south_america",
        "capital": "Caracas",
        "capitalCoords": {
          "lat": 10.4806,
          "lng": -66.9036,
          "x": 36,
          "y": 15
        },
        "flag": "🇻🇪",
        "centerCoords": {
          "lat": 6.4238,
          "lng": -66.5897,
          "x": 36,
          "y": 15
        },
        "description": "Pays abritant le Salto Ángel, la plus haute chute d'eau du monde.",
        "cities": [
          {
            "id": "caracas",
            "name": "Caracas",
            "countryId": "venezuela",
            "isCapital": true,
            "coords": {
              "lat": 10.4806,
              "lng": -66.9036,
              "x": 36,
              "y": 15
            },
            "population": "2.9 M",
            "region": "Capitale",
            "description": "Capitale située dans une vallée montagneuse."
          },
          {
            "id": "maracaibo",
            "name": "Maracaibo",
            "countryId": "venezuela",
            "isCapital": false,
            "coords": {
              "lat": 10.6427,
              "lng": -71.6125,
              "x": 32,
              "y": 14
            },
            "population": "2.2 M",
            "region": "Zulia",
            "description": "Grande métropole pétrolière sur le lac Maracaibo."
          },
          {
            "id": "valencia_ven",
            "name": "Valencia",
            "countryId": "venezuela",
            "isCapital": false,
            "coords": {
              "lat": 10.162,
              "lng": -68.0077,
              "x": 35,
              "y": 16
            },
            "population": "1.5 M",
            "region": "Carabobo",
            "description": "Grand pôle industriel vénézuélien."
          }
        ]
      },
      {
        "id": "bolivia",
        "name": "Bolivie",
        "continentId": "south_america",
        "capital": "Sucre",
        "capitalCoords": {
          "lat": -19.0196,
          "lng": -65.2619,
          "x": 34,
          "y": 50
        },
        "flag": "🇧🇴",
        "centerCoords": {
          "lat": -16.2902,
          "lng": -63.5887,
          "x": 34,
          "y": 50
        },
        "description": "Terre de l'Altiplano et du spectaculaire désert de sel Salar d'Uyuni.",
        "cities": [
          {
            "id": "sucre",
            "name": "Sucre",
            "countryId": "bolivia",
            "isCapital": true,
            "coords": {
              "lat": -19.0196,
              "lng": -65.2619,
              "x": 34,
              "y": 50
            },
            "population": "300 k",
            "region": "Chuquisaca",
            "description": "Capitale constitutionnelle et ville blanche coloniale."
          },
          {
            "id": "la_paz",
            "name": "La Paz",
            "countryId": "bolivia",
            "isCapital": false,
            "coords": {
              "lat": -16.4897,
              "lng": -68.1193,
              "x": 30,
              "y": 46
            },
            "population": "950 k",
            "region": "La Paz",
            "description": "Siège du gouvernement à 3600m d'altitude."
          },
          {
            "id": "santa_cruz_bol",
            "name": "Santa Cruz",
            "countryId": "bolivia",
            "isCapital": false,
            "coords": {
              "lat": -17.8146,
              "lng": -63.1561,
              "x": 38,
              "y": 48
            },
            "population": "1.7 M",
            "region": "Santa Cruz",
            "description": "Plus grande ville et moteur économique des plaines orientales."
          }
        ]
      },
      {
        "id": "paraguay",
        "name": "Paraguay",
        "continentId": "south_america",
        "capital": "Asunción",
        "capitalCoords": {
          "lat": -25.2637,
          "lng": -57.5759,
          "x": 48,
          "y": 58
        },
        "flag": "🇵🇾",
        "centerCoords": {
          "lat": -23.4425,
          "lng": -58.4438,
          "x": 48,
          "y": 58
        },
        "description": "Pays au cœur de l'Amérique du Sud traversé par le fleuve Paraguay.",
        "cities": [
          {
            "id": "asuncion",
            "name": "Asunción",
            "countryId": "paraguay",
            "isCapital": true,
            "coords": {
              "lat": -25.2637,
              "lng": -57.5759,
              "x": 48,
              "y": 58
            },
            "population": "520 k",
            "region": "Capitale",
            "description": "Capitale sur les rives du fleuve Paraguay."
          },
          {
            "id": "ciudad_del_este",
            "name": "Ciudad del Este",
            "countryId": "paraguay",
            "isCapital": false,
            "coords": {
              "lat": -25.5097,
              "lng": -54.6111,
              "x": 52,
              "y": 58
            },
            "population": "300 k",
            "region": "Alto Paraná",
            "description": "Cité commerçante au tripoint frontalier près d'Iguazú."
          },
          {
            "id": "encarnacion",
            "name": "Encarnación",
            "countryId": "paraguay",
            "isCapital": false,
            "coords": {
              "lat": -27.3306,
              "lng": -55.8667,
              "x": 50,
              "y": 61
            },
            "population": "130 k",
            "region": "Itapúa",
            "description": "La Perle du Sud et capitale du carnaval paraguayen."
          }
        ]
      },
      {
        "id": "ecuador",
        "name": "Équateur",
        "continentId": "south_america",
        "capital": "Quito",
        "capitalCoords": {
          "lat": -0.1807,
          "lng": -78.4678,
          "x": 26,
          "y": 22
        },
        "flag": "🇪🇨",
        "centerCoords": {
          "lat": -1.8312,
          "lng": -78.1834,
          "x": 26,
          "y": 24
        },
        "description": "Pays andin traversé par l'équateur, abritant les célèbres îles Galápagos.",
        "cities": [
          {
            "id": "quito",
            "name": "Quito",
            "countryId": "ecuador",
            "isCapital": true,
            "coords": {
              "lat": -0.1807,
              "lng": -78.4678,
              "x": 26,
              "y": 22
            },
            "population": "2.0 M",
            "region": "Pichincha",
            "description": "Deuxième plus haute capitale du monde, au centre colonial préservé."
          },
          {
            "id": "guayaquil",
            "name": "Guayaquil",
            "countryId": "ecuador",
            "isCapital": false,
            "coords": {
              "lat": -2.1894,
              "lng": -79.8891,
              "x": 24,
              "y": 25
            },
            "population": "2.7 M",
            "region": "Guayas",
            "description": "Premier port maritime et poumon économique du pays."
          },
          {
            "id": "cuenca",
            "name": "Cuenca",
            "countryId": "ecuador",
            "isCapital": false,
            "coords": {
              "lat": -2.9001,
              "lng": -79.0059,
              "x": 25,
              "y": 27
            },
            "population": "400 k",
            "region": "Azuay",
            "description": "Joyau colonial classé UNESCO et berceau des chapeaux Panama."
          }
        ]
      },
      {
        "id": "uruguay",
        "name": "Uruguay",
        "continentId": "south_america",
        "capital": "Montevideo",
        "capitalCoords": {
          "lat": -34.9011,
          "lng": -56.1645,
          "x": 62,
          "y": 79
        },
        "flag": "🇺🇾",
        "centerCoords": {
          "lat": -32.5228,
          "lng": -55.7658,
          "x": 63,
          "y": 75
        },
        "description": "Nation riveraine du Río de la Plata renommée pour sa douceur de vivre.",
        "cities": [
          {
            "id": "montevideo",
            "name": "Montevideo",
            "countryId": "uruguay",
            "isCapital": true,
            "coords": {
              "lat": -34.9011,
              "lng": -56.1645,
              "x": 62,
              "y": 79
            },
            "population": "1.4 M",
            "region": "Montevideo",
            "description": "Capitale sur le Río de la Plata avec sa célèbre Rambla."
          },
          {
            "id": "punta_del_este",
            "name": "Punta del Este",
            "countryId": "uruguay",
            "isCapital": false,
            "coords": {
              "lat": -34.9667,
              "lng": -54.95,
              "x": 64,
              "y": 79
            },
            "population": "20 k",
            "region": "Maldonado",
            "description": "Station balnéaire glamour réputée pour la sculpture La Mano."
          },
          {
            "id": "salto_uy",
            "name": "Salto",
            "countryId": "uruguay",
            "isCapital": false,
            "coords": {
              "lat": -31.3833,
              "lng": -57.9667,
              "x": 59,
              "y": 73
            },
            "population": "105 k",
            "region": "Salto",
            "description": "Deuxième ville du pays au bord du fleuve Uruguay."
          }
        ]
      },
      {
        "id": "guyana",
        "name": "Guyana",
        "continentId": "south_america",
        "capital": "Georgetown",
        "capitalCoords": {
          "lat": 6.8013,
          "lng": -58.1551,
          "x": 58,
          "y": 11
        },
        "flag": "🇬🇾",
        "centerCoords": {
          "lat": 4.8604,
          "lng": -58.9302,
          "x": 57,
          "y": 14
        },
        "description": "Seul pays anglophone d'Amérique du Sud, abritant les spectaculaires chutes de Kaieteur.",
        "cities": [
          {
            "id": "georgetown_gy",
            "name": "Georgetown",
            "countryId": "guyana",
            "isCapital": true,
            "coords": {
              "lat": 6.8013,
              "lng": -58.1551,
              "x": 58,
              "y": 11
            },
            "population": "200 k",
            "region": "Demerara-Mahaica",
            "description": "Capitale caribéenne avec sa cathédrale Saint-Georges en bois."
          },
          {
            "id": "linden",
            "name": "Linden",
            "countryId": "guyana",
            "isCapital": false,
            "coords": {
              "lat": 6,
              "lng": -58.3,
              "x": 58,
              "y": 12
            },
            "population": "45 k",
            "region": "Upper Demerara-Berbice",
            "description": "Deuxième ville et pôle minier du pays."
          }
        ]
      },
      {
        "id": "suriname",
        "name": "Suriname",
        "continentId": "south_america",
        "capital": "Paramaribo",
        "capitalCoords": {
          "lat": 5.852,
          "lng": -55.2038,
          "x": 62,
          "y": 12
        },
        "flag": "🇸🇷",
        "centerCoords": {
          "lat": 3.9193,
          "lng": -56.0278,
          "x": 61,
          "y": 16
        },
        "description": "Pays néerlandophone d'Amérique du Sud recouvert à plus de 90% par la forêt amazonienne.",
        "cities": [
          {
            "id": "paramaribo",
            "name": "Paramaribo",
            "countryId": "suriname",
            "isCapital": true,
            "coords": {
              "lat": 5.852,
              "lng": -55.2038,
              "x": 62,
              "y": 12
            },
            "population": "240 k",
            "region": "Paramaribo",
            "description": "Capitale multiculturelle au centre-ville historique en bois classé UNESCO."
          },
          {
            "id": "lelydorp",
            "name": "Lelydorp",
            "countryId": "suriname",
            "isCapital": false,
            "coords": {
              "lat": 5.7,
              "lng": -55.2333,
              "x": 62,
              "y": 13
            },
            "population": "20 k",
            "region": "Wanica",
            "description": "Deuxième agglomération la plus importante du Suriname."
          }
        ]
      },
      {
        "id": "french_guiana",
        "name": "Guyane française",
        "continentId": "south_america",
        "capital": "Cayenne",
        "capitalCoords": {
          "lat": 4.9372,
          "lng": -52.326,
          "x": 67,
          "y": 14
        },
        "flag": "🇬🇫",
        "centerCoords": {
          "lat": 3.9339,
          "lng": -53.1258,
          "x": 65,
          "y": 16
        },
        "description": "Territoire français d'Amazonie abritant le Centre Spatial Guyanais de Kourou.",
        "cities": [
          {
            "id": "cayenne",
            "name": "Cayenne",
            "countryId": "french_guiana",
            "isCapital": true,
            "coords": {
              "lat": 4.9372,
              "lng": -52.326,
              "x": 67,
              "y": 14
            },
            "population": "65 k",
            "region": "Guyane",
            "description": "Chef-lieu réputé pour sa place des Palmistes et son carnaval créole."
          },
          {
            "id": "kourou",
            "name": "Kourou",
            "countryId": "french_guiana",
            "isCapital": false,
            "coords": {
              "lat": 5.1612,
              "lng": -52.6496,
              "x": 66,
              "y": 13
            },
            "population": "26 k",
            "region": "Guyane",
            "description": "Port spatial de l'Europe et point de départ pour les îles du Salut."
          },
          {
            "id": "saint_laurent_du_maroni",
            "name": "Saint-Laurent-du-Maroni",
            "countryId": "french_guiana",
            "isCapital": false,
            "coords": {
              "lat": 5.5,
              "lng": -54.0333,
              "x": 64,
              "y": 13
            },
            "population": "47 k",
            "region": "Guyane",
            "description": "Cité fluviale frontière sur les rives du Maroni."
          }
        ]
      }
    ]
  },
  {
    "id": "asia",
    "name": "Asie",
    "code": "AS",
    "centerCoords": {
      "lat": 35,
      "lng": 100,
      "x": 72,
      "y": 35
    },
    "countries": [
      {
        "id": "japan",
        "name": "Japon",
        "continentId": "asia",
        "capital": "Tokyo",
        "capitalCoords": {
          "lat": 35.6762,
          "lng": 139.6503,
          "x": 64,
          "y": 48
        },
        "flag": "🇯🇵",
        "centerCoords": {
          "lat": 36.2048,
          "lng": 138.2529,
          "x": 64,
          "y": 48
        },
        "description": "Archipel volcanique alliant traditions millénaires et modernité.",
        "cities": [
          {
            "id": "tokyo",
            "name": "Tokyo",
            "countryId": "japan",
            "isCapital": true,
            "coords": {
              "lat": 35.6762,
              "lng": 139.6503,
              "x": 64,
              "y": 48
            },
            "population": "14 M",
            "region": "Kanto",
            "description": "Mégalopole la plus peuplée du monde."
          },
          {
            "id": "osaka",
            "name": "Osaka",
            "countryId": "japan",
            "isCapital": false,
            "coords": {
              "lat": 34.6937,
              "lng": 135.5023,
              "x": 46,
              "y": 60
            },
            "population": "2.7 M",
            "region": "Kansai",
            "description": "Capitale gastronomique du Kansai."
          },
          {
            "id": "kyoto",
            "name": "Kyoto",
            "countryId": "japan",
            "isCapital": false,
            "coords": {
              "lat": 35.0116,
              "lng": 135.7681,
              "x": 48,
              "y": 58
            },
            "population": "1.5 M",
            "region": "Kansai",
            "description": "Cité des sanctuaires impériaux."
          },
          {
            "id": "sapporo",
            "name": "Sapporo",
            "countryId": "japan",
            "isCapital": false,
            "coords": {
              "lat": 43.0618,
              "lng": 141.3545,
              "x": 74,
              "y": 18
            },
            "population": "1.9 M",
            "region": "Hokkaido",
            "description": "Capitale d'Hokkaido."
          }
        ]
      },
      {
        "id": "china",
        "name": "Chine",
        "continentId": "asia",
        "capital": "Pékin",
        "capitalCoords": {
          "lat": 39.9042,
          "lng": 116.4074,
          "x": 65,
          "y": 35
        },
        "flag": "🇨🇳",
        "centerCoords": {
          "lat": 35.8617,
          "lng": 104.1954,
          "x": 65,
          "y": 35
        },
        "description": "Civilisation millénaire et puissance économique mondiale.",
        "cities": [
          {
            "id": "beijing",
            "name": "Pékin",
            "countryId": "china",
            "isCapital": true,
            "coords": {
              "lat": 39.9042,
              "lng": 116.4074,
              "x": 65,
              "y": 35
            },
            "population": "21.5 M",
            "region": "Pékin",
            "description": "Capitale impériale avec la Cité Interdite."
          },
          {
            "id": "shanghai",
            "name": "Shanghai",
            "countryId": "china",
            "isCapital": false,
            "coords": {
              "lat": 31.2304,
              "lng": 121.4737,
              "x": 74,
              "y": 48
            },
            "population": "26 M",
            "region": "Shanghai",
            "description": "Mégalopole du delta du Yangtsé."
          },
          {
            "id": "guangzhou",
            "name": "Canton",
            "countryId": "china",
            "isCapital": false,
            "coords": {
              "lat": 23.1291,
              "lng": 113.2644,
              "x": 68,
              "y": 65
            },
            "population": "15 M",
            "region": "Guangdong",
            "description": "Cœur manufacturier du sud."
          },
          {
            "id": "shenzhen",
            "name": "Shenzhen",
            "countryId": "china",
            "isCapital": false,
            "coords": {
              "lat": 22.5431,
              "lng": 114.0579,
              "x": 69,
              "y": 66
            },
            "population": "13 M",
            "region": "Guangdong",
            "description": "Capitale technologique mondiale."
          }
        ]
      },
      {
        "id": "india",
        "name": "Inde",
        "continentId": "asia",
        "capital": "New Delhi",
        "capitalCoords": {
          "lat": 28.6139,
          "lng": 77.209,
          "x": 40,
          "y": 48
        },
        "flag": "🇮🇳",
        "centerCoords": {
          "lat": 20.5937,
          "lng": 78.9629,
          "x": 40,
          "y": 48
        },
        "description": "Pays le plus peuplé du monde à la culture millénaire.",
        "cities": [
          {
            "id": "new_delhi",
            "name": "New Delhi",
            "countryId": "india",
            "isCapital": true,
            "coords": {
              "lat": 28.6139,
              "lng": 77.209,
              "x": 40,
              "y": 48
            },
            "population": "32 M",
            "region": "Delhi",
            "description": "Capitale fédérale de l'Inde."
          },
          {
            "id": "mumbai",
            "name": "Mumbai",
            "countryId": "india",
            "isCapital": false,
            "coords": {
              "lat": 19.076,
              "lng": 72.8777,
              "x": 35,
              "y": 62
            },
            "population": "21 M",
            "region": "Maharashtra",
            "description": "Capitale économique et de Bollywood."
          },
          {
            "id": "bengaluru",
            "name": "Bengaluru",
            "countryId": "india",
            "isCapital": false,
            "coords": {
              "lat": 12.9716,
              "lng": 77.5946,
              "x": 41,
              "y": 75
            },
            "population": "12 M",
            "region": "Karnataka",
            "description": "La Silicon Valley indienne."
          },
          {
            "id": "kolkata",
            "name": "Kolkata",
            "countryId": "india",
            "isCapital": false,
            "coords": {
              "lat": 22.5726,
              "lng": 88.3639,
              "x": 55,
              "y": 57
            },
            "population": "14 M",
            "region": "Bengale",
            "description": "Cité culturelle sur le Hooghly."
          }
        ]
      },
      {
        "id": "south_korea",
        "name": "Corée du Sud",
        "continentId": "asia",
        "capital": "Séoul",
        "capitalCoords": {
          "lat": 37.5665,
          "lng": 126.978,
          "x": 68,
          "y": 38
        },
        "flag": "🇰🇷",
        "centerCoords": {
          "lat": 35.9078,
          "lng": 127.7669,
          "x": 68,
          "y": 38
        },
        "description": "Pionnier mondial des technologies de pointe et de la K-pop.",
        "cities": [
          {
            "id": "seoul",
            "name": "Séoul",
            "countryId": "south_korea",
            "isCapital": true,
            "coords": {
              "lat": 37.5665,
              "lng": 126.978,
              "x": 68,
              "y": 38
            },
            "population": "9.7 M",
            "region": "Séoul",
            "description": "Mégalopole ultra-connectée."
          },
          {
            "id": "busan",
            "name": "Busan",
            "countryId": "south_korea",
            "isCapital": false,
            "coords": {
              "lat": 35.1796,
              "lng": 129.0756,
              "x": 71,
              "y": 44
            },
            "population": "3.4 M",
            "region": "Busan",
            "description": "Principal port maritime du pays."
          },
          {
            "id": "incheon",
            "name": "Incheon",
            "countryId": "south_korea",
            "isCapital": false,
            "coords": {
              "lat": 37.4563,
              "lng": 126.7052,
              "x": 67,
              "y": 38
            },
            "population": "3.0 M",
            "region": "Incheon",
            "description": "Grand hub aéroportuaire."
          }
        ]
      },
      {
        "id": "indonesia",
        "name": "Indonésie",
        "continentId": "asia",
        "capital": "Jakarta",
        "capitalCoords": {
          "lat": -6.2088,
          "lng": 106.8456,
          "x": 62,
          "y": 78
        },
        "flag": "🇮🇩",
        "centerCoords": {
          "lat": -0.7893,
          "lng": 113.9213,
          "x": 62,
          "y": 78
        },
        "description": "Plus grand archipel de la planète avec plus de 17 000 îles.",
        "cities": [
          {
            "id": "jakarta",
            "name": "Jakarta",
            "countryId": "indonesia",
            "isCapital": true,
            "coords": {
              "lat": -6.2088,
              "lng": 106.8456,
              "x": 62,
              "y": 78
            },
            "population": "10.5 M",
            "region": "Java",
            "description": "Mégalopole sur l'île de Java."
          },
          {
            "id": "surabaya",
            "name": "Surabaya",
            "countryId": "indonesia",
            "isCapital": false,
            "coords": {
              "lat": -7.2575,
              "lng": 112.7521,
              "x": 68,
              "y": 80
            },
            "population": "2.9 M",
            "region": "Java",
            "description": "Deuxième ville portuaire."
          },
          {
            "id": "bandung",
            "name": "Bandung",
            "countryId": "indonesia",
            "isCapital": false,
            "coords": {
              "lat": -6.9175,
              "lng": 107.6191,
              "x": 63,
              "y": 79
            },
            "population": "2.5 M",
            "region": "Java",
            "description": "Cité des volcans et du thé."
          }
        ]
      },
      {
        "id": "thailand",
        "name": "Thaïlande",
        "continentId": "asia",
        "capital": "Bangkok",
        "capitalCoords": {
          "lat": 13.7563,
          "lng": 100.5018,
          "x": 55,
          "y": 62
        },
        "flag": "🇹🇭",
        "centerCoords": {
          "lat": 15.87,
          "lng": 100.9925,
          "x": 55,
          "y": 62
        },
        "description": "Le Pays du Sourire, réputé pour ses temples et ses îles.",
        "cities": [
          {
            "id": "bangkok",
            "name": "Bangkok",
            "countryId": "thailand",
            "isCapital": true,
            "coords": {
              "lat": 13.7563,
              "lng": 100.5018,
              "x": 55,
              "y": 62
            },
            "population": "10.5 M",
            "region": "Bangkok",
            "description": "Capitale sur la Chao Phraya."
          },
          {
            "id": "chiang_mai",
            "name": "Chiang Mai",
            "countryId": "thailand",
            "isCapital": false,
            "coords": {
              "lat": 18.7883,
              "lng": 98.9853,
              "x": 53,
              "y": 52
            },
            "population": "130 k",
            "region": "Nord",
            "description": "Capitale culturelle du nord."
          },
          {
            "id": "phuket",
            "name": "Phuket",
            "countryId": "thailand",
            "isCapital": false,
            "coords": {
              "lat": 7.8804,
              "lng": 98.3923,
              "x": 52,
              "y": 75
            },
            "population": "80 k",
            "region": "Sud",
            "description": "Grande île touristique."
          }
        ]
      },
      {
        "id": "vietnam",
        "name": "Vietnam",
        "continentId": "asia",
        "capital": "Hanoï",
        "capitalCoords": {
          "lat": 21.0285,
          "lng": 105.8542,
          "x": 60,
          "y": 50
        },
        "flag": "🇻🇳",
        "centerCoords": {
          "lat": 14.0583,
          "lng": 108.2772,
          "x": 60,
          "y": 50
        },
        "description": "Pays d'Asie du Sud-Est célèbre pour la baie d'Halong.",
        "cities": [
          {
            "id": "hanoi",
            "name": "Hanoï",
            "countryId": "vietnam",
            "isCapital": true,
            "coords": {
              "lat": 21.0285,
              "lng": 105.8542,
              "x": 60,
              "y": 50
            },
            "population": "8.4 M",
            "region": "Nord",
            "description": "Capitale millénaire aux vieux quartiers."
          },
          {
            "id": "ho_chi_minh_city",
            "name": "Hô Chi Minh-Ville",
            "countryId": "vietnam",
            "isCapital": false,
            "coords": {
              "lat": 10.8231,
              "lng": 106.6297,
              "x": 62,
              "y": 70
            },
            "population": "9.3 M",
            "region": "Sud",
            "description": "Poumon économique du sud."
          },
          {
            "id": "da_nang",
            "name": "Da Nang",
            "countryId": "vietnam",
            "isCapital": false,
            "coords": {
              "lat": 16.0544,
              "lng": 108.2022,
              "x": 62,
              "y": 60
            },
            "population": "1.2 M",
            "region": "Centre",
            "description": "Grande cité côtière centrale."
          }
        ]
      },
      {
        "id": "philippines",
        "name": "Philippines",
        "continentId": "asia",
        "capital": "Manille",
        "capitalCoords": {
          "lat": 14.5995,
          "lng": 120.9842,
          "x": 74,
          "y": 62
        },
        "flag": "🇵🇭",
        "centerCoords": {
          "lat": 12.8797,
          "lng": 121.774,
          "x": 74,
          "y": 62
        },
        "description": "Archipel de 7 000 îles tropicales réputé pour ses récifs coralliens.",
        "cities": [
          {
            "id": "manila",
            "name": "Manille",
            "countryId": "philippines",
            "isCapital": true,
            "coords": {
              "lat": 14.5995,
              "lng": 120.9842,
              "x": 74,
              "y": 62
            },
            "population": "1.8 M",
            "region": "Luzon",
            "description": "Capitale sur la baie de Manille avec Intramuros."
          },
          {
            "id": "quezon_city",
            "name": "Quezon City",
            "countryId": "philippines",
            "isCapital": false,
            "coords": {
              "lat": 14.676,
              "lng": 121.0437,
              "x": 74,
              "y": 61
            },
            "population": "2.9 M",
            "region": "Luzon",
            "description": "Plus grande ville de l'agglomération."
          },
          {
            "id": "cebu_city",
            "name": "Cebu",
            "countryId": "philippines",
            "isCapital": false,
            "coords": {
              "lat": 10.3157,
              "lng": 123.8854,
              "x": 77,
              "y": 70
            },
            "population": "960 k",
            "region": "Visayas",
            "description": "Cœur historique et commercial des Visayas."
          },
          {
            "id": "davao_city",
            "name": "Davao",
            "countryId": "philippines",
            "isCapital": false,
            "coords": {
              "lat": 7.1907,
              "lng": 125.4578,
              "x": 79,
              "y": 78
            },
            "population": "1.8 M",
            "region": "Mindanao",
            "description": "Grande métropole du sud au pied du mont Apo."
          }
        ]
      },
      {
        "id": "singapore",
        "name": "Singapour",
        "continentId": "asia",
        "capital": "Singapour",
        "capitalCoords": {
          "lat": 1.3521,
          "lng": 103.8198,
          "x": 58,
          "y": 82
        },
        "flag": "🇸🇬",
        "centerCoords": {
          "lat": 1.3521,
          "lng": 103.8198,
          "x": 58,
          "y": 82
        },
        "description": "Cité-État insulaire futuriste et hub financier mondial d'Asie du Sud-Est.",
        "cities": [
          {
            "id": "singapore_city",
            "name": "Singapour",
            "countryId": "singapore",
            "isCapital": true,
            "coords": {
              "lat": 1.3521,
              "lng": 103.8198,
              "x": 58,
              "y": 82
            },
            "population": "5.9 M",
            "region": "Singapour",
            "description": "La Cité-Jardin avec Marina Bay Sands et Gardens by the Bay."
          },
          {
            "id": "jurong",
            "name": "Jurong",
            "countryId": "singapore",
            "isCapital": false,
            "coords": {
              "lat": 1.3329,
              "lng": 103.7436,
              "x": 57,
              "y": 82
            },
            "population": "250 k",
            "region": "Ouest",
            "description": "Grand pôle industriel et portuaire de l'ouest."
          },
          {
            "id": "woodlands",
            "name": "Woodlands",
            "countryId": "singapore",
            "isCapital": false,
            "coords": {
              "lat": 1.4382,
              "lng": 103.7891,
              "x": 58,
              "y": 81
            },
            "population": "260 k",
            "region": "Nord",
            "description": "Porte d'entrée vers la Malaisie voisine."
          }
        ]
      },
      {
        "id": "malaysia",
        "name": "Malaisie",
        "continentId": "asia",
        "capital": "Kuala Lumpur",
        "capitalCoords": {
          "lat": 3.139,
          "lng": 101.6869,
          "x": 56,
          "y": 78
        },
        "flag": "🇲🇾",
        "centerCoords": {
          "lat": 4.2105,
          "lng": 101.9758,
          "x": 56,
          "y": 78
        },
        "description": "Pays d'Asie du Sud-Est mêlant traditions malaises, chinoises et indiennes.",
        "cities": [
          {
            "id": "kuala_lumpur",
            "name": "Kuala Lumpur",
            "countryId": "malaysia",
            "isCapital": true,
            "coords": {
              "lat": 3.139,
              "lng": 101.6869,
              "x": 56,
              "y": 78
            },
            "population": "1.8 M",
            "region": "Kuala Lumpur",
            "description": "Capitale fédérale dominée par les tours jumelles Petronas."
          },
          {
            "id": "george_town",
            "name": "George Town",
            "countryId": "malaysia",
            "isCapital": false,
            "coords": {
              "lat": 5.4141,
              "lng": 100.3288,
              "x": 54,
              "y": 74
            },
            "population": "700 k",
            "region": "Penang",
            "description": "Capitale gastronomique classée au patrimoine de l'UNESCO."
          },
          {
            "id": "johor_bahru",
            "name": "Johor Bahru",
            "countryId": "malaysia",
            "isCapital": false,
            "coords": {
              "lat": 1.4927,
              "lng": 103.7414,
              "x": 57,
              "y": 81
            },
            "population": "850 k",
            "region": "Johor",
            "description": "Cité du sud frontalière avec Singapour."
          }
        ]
      },
      {
        "id": "saudi_arabia",
        "name": "Arabie Saoudite",
        "continentId": "asia",
        "capital": "Riyad",
        "capitalCoords": {
          "lat": 24.7136,
          "lng": 46.6753,
          "x": 22,
          "y": 55
        },
        "flag": "🇸🇦",
        "centerCoords": {
          "lat": 23.8859,
          "lng": 45.0792,
          "x": 22,
          "y": 55
        },
        "description": "Royaume de la péninsule arabique abritant les deux lieux saints de l'islam.",
        "cities": [
          {
            "id": "riyadh",
            "name": "Riyad",
            "countryId": "saudi_arabia",
            "isCapital": true,
            "coords": {
              "lat": 24.7136,
              "lng": 46.6753,
              "x": 22,
              "y": 55
            },
            "population": "7.5 M",
            "region": "Riyad",
            "description": "Capitale futuriste avec la tour Kingdom Centre."
          },
          {
            "id": "jeddah",
            "name": "Djeddah",
            "countryId": "saudi_arabia",
            "isCapital": false,
            "coords": {
              "lat": 21.4858,
              "lng": 39.1925,
              "x": 18,
              "y": 58
            },
            "population": "4.7 M",
            "region": "La Mecque",
            "description": "Port historique sur la mer Rouge et porte vers La Mecque."
          },
          {
            "id": "mecca",
            "name": "La Mecque",
            "countryId": "saudi_arabia",
            "isCapital": false,
            "coords": {
              "lat": 21.3891,
              "lng": 39.8579,
              "x": 18,
              "y": 58
            },
            "population": "2.0 M",
            "region": "La Mecque",
            "description": "Ville la plus sainte de l'islam abritant la Kaaba."
          },
          {
            "id": "medina",
            "name": "Médine",
            "countryId": "saudi_arabia",
            "isCapital": false,
            "coords": {
              "lat": 24.5247,
              "lng": 39.5692,
              "x": 18,
              "y": 55
            },
            "population": "1.5 M",
            "region": "Médine",
            "description": "Deuxième ville sainte abritant la mosquée du Prophète."
          }
        ]
      },
      {
        "id": "uae",
        "name": "Émirats Arabes Unis",
        "continentId": "asia",
        "capital": "Abou Dabi",
        "capitalCoords": {
          "lat": 24.4539,
          "lng": 54.3773,
          "x": 28,
          "y": 55
        },
        "flag": "🇦🇪",
        "centerCoords": {
          "lat": 23.4241,
          "lng": 53.8478,
          "x": 28,
          "y": 56
        },
        "description": "Fédération de 7 émirats célèbre pour ses gratte-ciel vertigineux et son dynamisme.",
        "cities": [
          {
            "id": "abu_dhabi",
            "name": "Abou Dabi",
            "countryId": "uae",
            "isCapital": true,
            "coords": {
              "lat": 24.4539,
              "lng": 54.3773,
              "x": 28,
              "y": 55
            },
            "population": "1.5 M",
            "region": "Abou Dabi",
            "description": "Capitale fédérale avec la grande mosquée Sheikh Zayed et le Louvre."
          },
          {
            "id": "dubai",
            "name": "Dubaï",
            "countryId": "uae",
            "isCapital": false,
            "coords": {
              "lat": 25.2048,
              "lng": 55.2708,
              "x": 29,
              "y": 54
            },
            "population": "3.6 M",
            "region": "Dubaï",
            "description": "Mégalopole futuriste avec le Burj Khalifa et Palm Jumeirah."
          },
          {
            "id": "sharjah",
            "name": "Charjah",
            "countryId": "uae",
            "isCapital": false,
            "coords": {
              "lat": 25.3463,
              "lng": 55.4209,
              "x": 29,
              "y": 54
            },
            "population": "1.4 M",
            "region": "Charjah",
            "description": "Capitale culturelle et artistique des Émirats."
          }
        ]
      },
      {
        "id": "turkey",
        "name": "Turquie",
        "continentId": "asia",
        "capital": "Ankara",
        "capitalCoords": {
          "lat": 39.9334,
          "lng": 32.8597,
          "x": 12,
          "y": 39
        },
        "flag": "🇹🇷",
        "centerCoords": {
          "lat": 38.9637,
          "lng": 35.2433,
          "x": 14,
          "y": 40
        },
        "description": "Pont majestueux entre Orient et Occident, héritière des empires byzantin et ottoman.",
        "cities": [
          {
            "id": "ankara",
            "name": "Ankara",
            "countryId": "turkey",
            "isCapital": true,
            "coords": {
              "lat": 39.9334,
              "lng": 32.8597,
              "x": 12,
              "y": 39
            },
            "population": "5.7 M",
            "region": "Anatolie centrale",
            "description": "Capitale politique abritant l'Anıtkabir."
          },
          {
            "id": "istanbul",
            "name": "Istanbul",
            "countryId": "turkey",
            "isCapital": false,
            "coords": {
              "lat": 41.0082,
              "lng": 28.9784,
              "x": 9,
              "y": 37
            },
            "population": "15.8 M",
            "region": "Marmara",
            "description": "Mégalopole transcontinentale sur le Bosphore avec Sainte-Sophie."
          },
          {
            "id": "izmir",
            "name": "Izmir",
            "countryId": "turkey",
            "isCapital": false,
            "coords": {
              "lat": 38.4237,
              "lng": 27.1428,
              "x": 8,
              "y": 41
            },
            "population": "4.4 M",
            "region": "Égée",
            "description": "Grande cité portuaire égéenne et berceau antique de Smyrne."
          },
          {
            "id": "antalya",
            "name": "Antalya",
            "countryId": "turkey",
            "isCapital": false,
            "coords": {
              "lat": 36.8969,
              "lng": 30.7133,
              "x": 11,
              "y": 43
            },
            "population": "2.6 M",
            "region": "Méditerranée",
            "description": "Joyau de la Riviera turque aux eaux turquoise."
          }
        ]
      },
      {
        "id": "israel",
        "name": "Israël",
        "continentId": "asia",
        "capital": "Jérusalem",
        "capitalCoords": {
          "lat": 31.7683,
          "lng": 35.2137,
          "x": 14,
          "y": 48
        },
        "flag": "🇮🇱",
        "centerCoords": {
          "lat": 31.0461,
          "lng": 34.8516,
          "x": 14,
          "y": 49
        },
        "description": "Terre Sainte historique aux rivages de la Méditerranée et de la mer Morte.",
        "cities": [
          {
            "id": "jerusalem",
            "name": "Jérusalem",
            "countryId": "israel",
            "isCapital": true,
            "coords": {
              "lat": 31.7683,
              "lng": 35.2137,
              "x": 14,
              "y": 48
            },
            "population": "950 k",
            "region": "Jérusalem",
            "description": "Cité trois fois sainte abritant le Mur des Lamentations et le Saint-Sépulcre."
          },
          {
            "id": "tel_aviv",
            "name": "Tel Aviv",
            "countryId": "israel",
            "isCapital": false,
            "coords": {
              "lat": 32.0853,
              "lng": 34.7818,
              "x": 13,
              "y": 48
            },
            "population": "470 k",
            "region": "Tel Aviv",
            "description": "Métropole méditerranéenne vibrante, pôle tech et architecture Bauhaus."
          },
          {
            "id": "haifa",
            "name": "Haïfa",
            "countryId": "israel",
            "isCapital": false,
            "coords": {
              "lat": 32.794,
              "lng": 34.9896,
              "x": 13,
              "y": 47
            },
            "population": "280 k",
            "region": "Haïfa",
            "description": "Grand port étagé sur le mont Carmel avec les jardins baha'is."
          }
        ]
      },
      {
        "id": "jordan",
        "name": "Jordanie",
        "continentId": "asia",
        "capital": "Amman",
        "capitalCoords": {
          "lat": 31.9454,
          "lng": 35.9284,
          "x": 15,
          "y": 48
        },
        "flag": "🇯🇴",
        "centerCoords": {
          "lat": 30.5852,
          "lng": 36.2384,
          "x": 15,
          "y": 49
        },
        "description": "Royaume hachémite abritant la mythique cité nabatéenne de Pétra et le désert du Wadi Rum.",
        "cities": [
          {
            "id": "amman",
            "name": "Amman",
            "countryId": "jordan",
            "isCapital": true,
            "coords": {
              "lat": 31.9454,
              "lng": 35.9284,
              "x": 15,
              "y": 48
            },
            "population": "4.0 M",
            "region": "Amman",
            "description": "Capitale millénaire aux collines blanches et citadelle romaine."
          },
          {
            "id": "zarqa",
            "name": "Zarqa",
            "countryId": "jordan",
            "isCapital": false,
            "coords": {
              "lat": 32.0728,
              "lng": 36.088,
              "x": 15,
              "y": 48
            },
            "population": "635 k",
            "region": "Zarqa",
            "description": "Deuxième centre urbain et industriel du royaume."
          },
          {
            "id": "aqaba",
            "name": "Aqaba",
            "countryId": "jordan",
            "isCapital": false,
            "coords": {
              "lat": 29.5321,
              "lng": 35.0063,
              "x": 14,
              "y": 50
            },
            "population": "190 k",
            "region": "Aqaba",
            "description": "Unique débouché maritime jordanien sur la mer Rouge."
          }
        ]
      },
      {
        "id": "lebanon",
        "name": "Liban",
        "continentId": "asia",
        "capital": "Beyrouth",
        "capitalCoords": {
          "lat": 33.8938,
          "lng": 35.5018,
          "x": 14,
          "y": 46
        },
        "flag": "🇱🇧",
        "centerCoords": {
          "lat": 33.8547,
          "lng": 35.8623,
          "x": 14,
          "y": 46
        },
        "description": "Le Pays des Cèdres, carrefour culturel méditerranéen et gastronomique.",
        "cities": [
          {
            "id": "beirut",
            "name": "Beyrouth",
            "countryId": "lebanon",
            "isCapital": true,
            "coords": {
              "lat": 33.8938,
              "lng": 35.5018,
              "x": 14,
              "y": 46
            },
            "population": "2.4 M",
            "region": "Beyrouth",
            "description": "Capitale cosmopolite méditerranéenne surnommée la Paris du Moyen-Orient."
          },
          {
            "id": "tripoli_lb",
            "name": "Tripoli",
            "countryId": "lebanon",
            "isCapital": false,
            "coords": {
              "lat": 34.4367,
              "lng": 35.8497,
              "x": 14,
              "y": 45
            },
            "population": "500 k",
            "region": "Nord",
            "description": "Deuxième ville réputée pour sa citadelle mamelouke et ses souks."
          },
          {
            "id": "byblos",
            "name": "Byblos",
            "countryId": "lebanon",
            "isCapital": false,
            "coords": {
              "lat": 34.123,
              "lng": 35.6519,
              "x": 14,
              "y": 46
            },
            "population": "40 k",
            "region": "Mont-Liban",
            "description": "Une des plus anciennes cités continuellement habitées au monde, classée UNESCO."
          }
        ]
      },
      {
        "id": "iraq",
        "name": "Irak",
        "continentId": "asia",
        "capital": "Bagdad",
        "capitalCoords": {
          "lat": 33.3152,
          "lng": 44.3661,
          "x": 21,
          "y": 46
        },
        "flag": "🇮🇶",
        "centerCoords": {
          "lat": 33.2232,
          "lng": 43.6793,
          "x": 20,
          "y": 46
        },
        "description": "Berceau de la Mésopotamie antique entre le Tigre et l'Euphrate.",
        "cities": [
          {
            "id": "baghdad",
            "name": "Bagdad",
            "countryId": "iraq",
            "isCapital": true,
            "coords": {
              "lat": 33.3152,
              "lng": 44.3661,
              "x": 21,
              "y": 46
            },
            "population": "7.5 M",
            "region": "Bagdad",
            "description": "Capitale historique légendaire des Mille et Une Nuits sur le Tigre."
          },
          {
            "id": "basra",
            "name": "Bassorah",
            "countryId": "iraq",
            "isCapital": false,
            "coords": {
              "lat": 30.5081,
              "lng": 47.7835,
              "x": 23,
              "y": 49
            },
            "population": "2.9 M",
            "region": "Bassorah",
            "description": "Grand port méridional sur le Chatt-el-Arab."
          },
          {
            "id": "erbil",
            "name": "Erbil",
            "countryId": "iraq",
            "isCapital": false,
            "coords": {
              "lat": 36.1911,
              "lng": 44.0092,
              "x": 21,
              "y": 43
            },
            "population": "1.6 M",
            "region": "Kurdistan",
            "description": "Capitale du Kurdistan irakien avec sa citadelle millénaire classée UNESCO."
          }
        ]
      },
      {
        "id": "iran",
        "name": "Iran",
        "continentId": "asia",
        "capital": "Téhéran",
        "capitalCoords": {
          "lat": 35.6892,
          "lng": 51.389,
          "x": 26,
          "y": 44
        },
        "flag": "🇮🇷",
        "centerCoords": {
          "lat": 32.4279,
          "lng": 53.688,
          "x": 27,
          "y": 47
        },
        "description": "Terre de l'antique Perse aux palais somptueux, coupoles turquoise et bazars.",
        "cities": [
          {
            "id": "tehran",
            "name": "Téhéran",
            "countryId": "iran",
            "isCapital": true,
            "coords": {
              "lat": 35.6892,
              "lng": 51.389,
              "x": 26,
              "y": 44
            },
            "population": "9.0 M",
            "region": "Téhéran",
            "description": "Capitale tentaculaire au pied du massif de l'Alborz."
          },
          {
            "id": "isfahan",
            "name": "Ispahan",
            "countryId": "iran",
            "isCapital": false,
            "coords": {
              "lat": 32.6546,
              "lng": 51.668,
              "x": 26,
              "y": 47
            },
            "population": "2.0 M",
            "region": "Ispahan",
            "description": "La moitié du monde avec sa place Naqsh-e Jahan et ses ponts illuminés."
          },
          {
            "id": "shiraz",
            "name": "Shiraz",
            "countryId": "iran",
            "isCapital": false,
            "coords": {
              "lat": 29.5918,
              "lng": 52.5837,
              "x": 27,
              "y": 50
            },
            "population": "1.6 M",
            "region": "Fars",
            "description": "Cité des poètes et des roses, porte de la mythique Persépolis."
          },
          {
            "id": "mashhad",
            "name": "Mashhad",
            "countryId": "iran",
            "isCapital": false,
            "coords": {
              "lat": 36.297,
              "lng": 59.6062,
              "x": 31,
              "y": 44
            },
            "population": "3.1 M",
            "region": "Khorasan",
            "description": "Deuxième ville iranienne et important sanctuaire pèlerin."
          }
        ]
      },
      {
        "id": "qatar",
        "name": "Qatar",
        "continentId": "asia",
        "capital": "Doha",
        "capitalCoords": {
          "lat": 25.2854,
          "lng": 51.531,
          "x": 26,
          "y": 54
        },
        "flag": "🇶🇦",
        "centerCoords": {
          "lat": 25.3548,
          "lng": 51.1839,
          "x": 26,
          "y": 54
        },
        "description": "Péninsule du golfe Arabo-Persique réputée pour son architecture futuriste et son musée d'art islamique.",
        "cities": [
          {
            "id": "doha",
            "name": "Doha",
            "countryId": "qatar",
            "isCapital": true,
            "coords": {
              "lat": 25.2854,
              "lng": 51.531,
              "x": 26,
              "y": 54
            },
            "population": "1.2 M",
            "region": "Doha",
            "description": "Capitale ultra-moderne bordant sa corniche en demi-lune."
          },
          {
            "id": "al_rayyan",
            "name": "Al Rayyan",
            "countryId": "qatar",
            "isCapital": false,
            "coords": {
              "lat": 25.2919,
              "lng": 51.4244,
              "x": 26,
              "y": 54
            },
            "population": "600 k",
            "region": "Al Rayyan",
            "description": "Cité éducative et sportive majeure du Qatar."
          }
        ]
      },
      {
        "id": "kuwait",
        "name": "Koweït",
        "continentId": "asia",
        "capital": "Koweït",
        "capitalCoords": {
          "lat": 29.3759,
          "lng": 47.9774,
          "x": 24,
          "y": 50
        },
        "flag": "🇰🇼",
        "centerCoords": {
          "lat": 29.3117,
          "lng": 47.4818,
          "x": 23,
          "y": 50
        },
        "description": "Émirat du golfe Arabique réputé pour les emblématiques Kuwait Towers.",
        "cities": [
          {
            "id": "kuwait_city",
            "name": "Koweït",
            "countryId": "kuwait",
            "isCapital": true,
            "coords": {
              "lat": 29.3759,
              "lng": 47.9774,
              "x": 24,
              "y": 50
            },
            "population": "3.0 M",
            "region": "Al Asimah",
            "description": "Capitale côtière dominée par les tours Kuwait Towers."
          },
          {
            "id": "al_ahmadi",
            "name": "Al Ahmadi",
            "countryId": "kuwait",
            "isCapital": false,
            "coords": {
              "lat": 29.0769,
              "lng": 48.0839,
              "x": 24,
              "y": 51
            },
            "population": "630 k",
            "region": "Al Ahmadi",
            "description": "Cœur de l'industrie pétrolière koweïtienne."
          }
        ]
      },
      {
        "id": "oman",
        "name": "Oman",
        "continentId": "asia",
        "capital": "Mascate",
        "capitalCoords": {
          "lat": 23.588,
          "lng": 58.3829,
          "x": 31,
          "y": 56
        },
        "flag": "🇴🇲",
        "centerCoords": {
          "lat": 21.4735,
          "lng": 55.9754,
          "x": 29,
          "y": 58
        },
        "description": "Sultanat des mille et une nuits entre fjords d'Arabie, wadis et dunes de sable.",
        "cities": [
          {
            "id": "muscat",
            "name": "Mascate",
            "countryId": "oman",
            "isCapital": true,
            "coords": {
              "lat": 23.588,
              "lng": 58.3829,
              "x": 31,
              "y": 56
            },
            "population": "1.4 M",
            "region": "Mascate",
            "description": "Capitale élégante entre montagnes escarpées et mer d'Oman."
          },
          {
            "id": "salalah",
            "name": "Salalah",
            "countryId": "oman",
            "isCapital": false,
            "coords": {
              "lat": 17.0151,
              "lng": 54.0924,
              "x": 28,
              "y": 62
            },
            "population": "340 k",
            "region": "Dhofar",
            "description": "Oasis subtropicale verdoyante pendant la mousson du Khareef."
          },
          {
            "id": "nizwa",
            "name": "Nizwa",
            "countryId": "oman",
            "isCapital": false,
            "coords": {
              "lat": 22.9333,
              "lng": 57.5333,
              "x": 30,
              "y": 56
            },
            "population": "85 k",
            "region": "Ad Dakhiliyah",
            "description": "Ancienne capitale historique et cité fortifiée renommée pour son fort."
          }
        ]
      },
      {
        "id": "bahrain",
        "name": "Bahreïn",
        "continentId": "asia",
        "capital": "Manama",
        "capitalCoords": {
          "lat": 26.2285,
          "lng": 50.586,
          "x": 25,
          "y": 53
        },
        "flag": "🇧🇭",
        "centerCoords": {
          "lat": 26.0667,
          "lng": 50.5577,
          "x": 25,
          "y": 53
        },
        "description": "Royaume insulaire du golfe persique riche d'une tradition perlière millénaire.",
        "cities": [
          {
            "id": "manama",
            "name": "Manama",
            "countryId": "bahrain",
            "isCapital": true,
            "coords": {
              "lat": 26.2285,
              "lng": 50.586,
              "x": 25,
              "y": 53
            },
            "population": "200 k",
            "region": "Capitale",
            "description": "Centre financier avec le Bahrain World Trade Center et le fort Qal'at al-Bahrain."
          },
          {
            "id": "riffa",
            "name": "Riffa",
            "countryId": "bahrain",
            "isCapital": false,
            "coords": {
              "lat": 26.13,
              "lng": 50.555,
              "x": 25,
              "y": 53
            },
            "population": "115 k",
            "region": "Sud",
            "description": "Deuxième ville abritant le château de Riffa."
          }
        ]
      },
      {
        "id": "yemen",
        "name": "Yémen",
        "continentId": "asia",
        "capital": "Sanaa",
        "capitalCoords": {
          "lat": 15.3694,
          "lng": 44.191,
          "x": 21,
          "y": 63
        },
        "flag": "🇾🇪",
        "centerCoords": {
          "lat": 15.5527,
          "lng": 48.5164,
          "x": 24,
          "y": 63
        },
        "description": "L'Arabie heureuse antique aux maisons-tours en pisé et à l'île mythique de Socotra.",
        "cities": [
          {
            "id": "sanaa",
            "name": "Sanaa",
            "countryId": "yemen",
            "isCapital": true,
            "coords": {
              "lat": 15.3694,
              "lng": 44.191,
              "x": 21,
              "y": 63
            },
            "population": "2.5 M",
            "region": "Sanaa",
            "description": "Vieille ville féerique aux maisons tours en pisé classée UNESCO."
          },
          {
            "id": "aden",
            "name": "Aden",
            "countryId": "yemen",
            "isCapital": false,
            "coords": {
              "lat": 12.7855,
              "lng": 45.0187,
              "x": 21,
              "y": 65
            },
            "population": "1.0 M",
            "region": "Aden",
            "description": "Port stratégique historique au fond d'un cratère volcanique éteint."
          },
          {
            "id": "taiz",
            "name": "Taïz",
            "countryId": "yemen",
            "isCapital": false,
            "coords": {
              "lat": 13.5795,
              "lng": 44.0209,
              "x": 21,
              "y": 65
            },
            "population": "600 k",
            "region": "Taïz",
            "description": "Capitale culturelle étagée au pied du mont Sabir."
          }
        ]
      },
      {
        "id": "syria",
        "name": "Syrie",
        "continentId": "asia",
        "capital": "Damas",
        "capitalCoords": {
          "lat": 33.5138,
          "lng": 36.2765,
          "x": 15,
          "y": 46
        },
        "flag": "🇸🇾",
        "centerCoords": {
          "lat": 34.8021,
          "lng": 38.9968,
          "x": 17,
          "y": 45
        },
        "description": "Terre millénaire de civilisations abritant Palmyre et la mosquée des Omeyyades.",
        "cities": [
          {
            "id": "damascus",
            "name": "Damas",
            "countryId": "syria",
            "isCapital": true,
            "coords": {
              "lat": 33.5138,
              "lng": 36.2765,
              "x": 15,
              "y": 46
            },
            "population": "2.5 M",
            "region": "Damas",
            "description": "Une des plus anciennes capitales du monde avec la mosquée des Omeyyades."
          },
          {
            "id": "aleppo",
            "name": "Alep",
            "countryId": "syria",
            "isCapital": false,
            "coords": {
              "lat": 36.2021,
              "lng": 37.1343,
              "x": 15,
              "y": 43
            },
            "population": "2.0 M",
            "region": "Alep",
            "description": "Cité carrefour de la Route de la Soie dominée par sa citadelle géante."
          },
          {
            "id": "homs",
            "name": "Homs",
            "countryId": "syria",
            "isCapital": false,
            "coords": {
              "lat": 34.7324,
              "lng": 36.7137,
              "x": 15,
              "y": 45
            },
            "population": "900 k",
            "region": "Homs",
            "description": "Cité historique sur le fleuve Oronte, proche du Krak des Chevaliers."
          }
        ]
      },
      {
        "id": "kazakhstan",
        "name": "Kazakhstan",
        "continentId": "asia",
        "capital": "Astana",
        "capitalCoords": {
          "lat": 51.1694,
          "lng": 71.4491,
          "x": 38,
          "y": 30
        },
        "flag": "🇰🇿",
        "centerCoords": {
          "lat": 48.0196,
          "lng": 66.9237,
          "x": 35,
          "y": 33
        },
        "description": "Plus grand pays enclavé du monde s'étendant des steppes d'Asie centrale aux monts Altaï.",
        "cities": [
          {
            "id": "astana",
            "name": "Astana",
            "countryId": "kazakhstan",
            "isCapital": true,
            "coords": {
              "lat": 51.1694,
              "lng": 71.4491,
              "x": 38,
              "y": 30
            },
            "population": "1.3 M",
            "region": "Astana",
            "description": "Capitale futuriste aux créations architecturales monumentales de Norman Foster."
          },
          {
            "id": "almaty",
            "name": "Almaty",
            "countryId": "kazakhstan",
            "isCapital": false,
            "coords": {
              "lat": 43.222,
              "lng": 76.8512,
              "x": 41,
              "y": 37
            },
            "population": "2.0 M",
            "region": "Almaty",
            "description": "Plus grande métropole kazakhe au pied des sommets enneigés du Tian Shan."
          },
          {
            "id": "shymkent",
            "name": "Chymkent",
            "countryId": "kazakhstan",
            "isCapital": false,
            "coords": {
              "lat": 42.3417,
              "lng": 69.5901,
              "x": 37,
              "y": 38
            },
            "population": "1.1 M",
            "region": "Turkestan",
            "description": "Troisième ville du pays et carrefour historique de la Route de la Soie."
          }
        ]
      },
      {
        "id": "uzbekistan",
        "name": "Ouzbékistan",
        "continentId": "asia",
        "capital": "Tachkent",
        "capitalCoords": {
          "lat": 41.2995,
          "lng": 69.2401,
          "x": 37,
          "y": 39
        },
        "flag": "🇺🇿",
        "centerCoords": {
          "lat": 41.3775,
          "lng": 64.5853,
          "x": 34,
          "y": 39
        },
        "description": "Cœur battant de la Route de la Soie avec les coupoles bleues de Samarcande et Boukhara.",
        "cities": [
          {
            "id": "tashkent",
            "name": "Tachkent",
            "countryId": "uzbekistan",
            "isCapital": true,
            "coords": {
              "lat": 41.2995,
              "lng": 69.2401,
              "x": 37,
              "y": 39
            },
            "population": "2.9 M",
            "region": "Tachkent",
            "description": "Capitale d'Asie centrale au métro richement décoré."
          },
          {
            "id": "samarkand",
            "name": "Samarcande",
            "countryId": "uzbekistan",
            "isCapital": false,
            "coords": {
              "lat": 39.627,
              "lng": 66.975,
              "x": 35,
              "y": 40
            },
            "population": "550 k",
            "region": "Samarcande",
            "description": "Joyau de la Route de la Soie avec la majestueuse place du Régistan."
          },
          {
            "id": "bukhara",
            "name": "Boukhara",
            "countryId": "uzbekistan",
            "isCapital": false,
            "coords": {
              "lat": 39.7681,
              "lng": 64.4556,
              "x": 34,
              "y": 40
            },
            "population": "280 k",
            "region": "Boukhara",
            "description": "Cité musée vivante aux 140 monuments architecturaux classés UNESCO."
          },
          {
            "id": "khiva",
            "name": "Khiva",
            "countryId": "uzbekistan",
            "isCapital": false,
            "coords": {
              "lat": 41.3783,
              "lng": 60.3639,
              "x": 31,
              "y": 39
            },
            "population": "90 k",
            "region": "Khorezm",
            "description": "Cité fortifiée intacte d'Itchan Kala au cœur du désert."
          }
        ]
      },
      {
        "id": "turkmenistan",
        "name": "Turkménistan",
        "continentId": "asia",
        "capital": "Achgabat",
        "capitalCoords": {
          "lat": 37.9601,
          "lng": 58.3261,
          "x": 30,
          "y": 42
        },
        "flag": "🇹🇲",
        "centerCoords": {
          "lat": 38.9697,
          "lng": 59.5563,
          "x": 31,
          "y": 41
        },
        "description": "Pays désertique du Karakoum célèbre pour ses palais de marbre blanc et le cratère de Darvaza.",
        "cities": [
          {
            "id": "ashgabat",
            "name": "Achgabat",
            "countryId": "turkmenistan",
            "isCapital": true,
            "coords": {
              "lat": 37.9601,
              "lng": 58.3261,
              "x": 30,
              "y": 42
            },
            "population": "1.0 M",
            "region": "Ahal",
            "description": "La Ville Blanche détenant le record de bâtiments en marbre blanc."
          },
          {
            "id": "turkmenabat",
            "name": "Türkmenabat",
            "countryId": "turkmenistan",
            "isCapital": false,
            "coords": {
              "lat": 39.0733,
              "lng": 63.5786,
              "x": 33,
              "y": 41
            },
            "population": "410 k",
            "region": "Lebap",
            "description": "Deuxième ville du pays sur les rives de l'Amou-Daria."
          }
        ]
      },
      {
        "id": "kyrgyzstan",
        "name": "Kirghizistan",
        "continentId": "asia",
        "capital": "Bichkek",
        "capitalCoords": {
          "lat": 42.8746,
          "lng": 74.5698,
          "x": 40,
          "y": 37
        },
        "flag": "🇰🇬",
        "centerCoords": {
          "lat": 41.2044,
          "lng": 74.7661,
          "x": 40,
          "y": 39
        },
        "description": "Le Pays des Monts Célestes et des nomades cavaliers autour du lac Yssyk Koul.",
        "cities": [
          {
            "id": "bishkek",
            "name": "Bichkek",
            "countryId": "kyrgyzstan",
            "isCapital": true,
            "coords": {
              "lat": 42.8746,
              "lng": 74.5698,
              "x": 40,
              "y": 37
            },
            "population": "1.1 M",
            "region": "Bichkek",
            "description": "Capitale aux larges avenues bordées d'arbres au pied des monts Ala-Too."
          },
          {
            "id": "osh",
            "name": "Och",
            "countryId": "kyrgyzstan",
            "isCapital": false,
            "coords": {
              "lat": 40.514,
              "lng": 72.8161,
              "x": 39,
              "y": 39
            },
            "population": "300 k",
            "region": "Och",
            "description": "Cité trimillénaire dominée par la montagne sacrée Soulaïman-Too."
          }
        ]
      },
      {
        "id": "tajikistan",
        "name": "Tadjikistan",
        "continentId": "asia",
        "capital": "Douchanbé",
        "capitalCoords": {
          "lat": 38.5598,
          "lng": 68.787,
          "x": 37,
          "y": 41
        },
        "flag": "🇹🇯",
        "centerCoords": {
          "lat": 38.861,
          "lng": 71.2761,
          "x": 38,
          "y": 41
        },
        "description": "Toit du monde aux sommets vertigineux du Pamir et lacs turquoise.",
        "cities": [
          {
            "id": "dushanbe",
            "name": "Douchanbé",
            "countryId": "tajikistan",
            "isCapital": true,
            "coords": {
              "lat": 38.5598,
              "lng": 68.787,
              "x": 37,
              "y": 41
            },
            "population": "860 k",
            "region": "Douchanbé",
            "description": "Capitale verdoyante avec le deuxième plus haut mât de drapeau au monde."
          },
          {
            "id": "khujand",
            "name": "Khodjent",
            "countryId": "tajikistan",
            "isCapital": false,
            "coords": {
              "lat": 40.2826,
              "lng": 69.6222,
              "x": 37,
              "y": 40
            },
            "population": "180 k",
            "region": "Sughd",
            "description": "Ancienne Alexandrie Eschate fondée par Alexandre le Grand."
          }
        ]
      },
      {
        "id": "mongolia",
        "name": "Mongolie",
        "continentId": "asia",
        "capital": "Oulan-Bator",
        "capitalCoords": {
          "lat": 47.8864,
          "lng": 106.9057,
          "x": 60,
          "y": 33
        },
        "flag": "🇲🇳",
        "centerCoords": {
          "lat": 46.8625,
          "lng": 103.8467,
          "x": 58,
          "y": 34
        },
        "description": "Terre du Ciel Bleu infini, berceau de Gengis Khan et des steppes nomades.",
        "cities": [
          {
            "id": "ulaanbaatar",
            "name": "Oulan-Bator",
            "countryId": "mongolia",
            "isCapital": true,
            "coords": {
              "lat": 47.8864,
              "lng": 106.9057,
              "x": 60,
              "y": 33
            },
            "population": "1.5 M",
            "region": "Oulan-Bator",
            "description": "Capitale la plus froide du monde alliant yourtes et tours modernes."
          },
          {
            "id": "erdenet",
            "name": "Erdenet",
            "countryId": "mongolia",
            "isCapital": false,
            "coords": {
              "lat": 49.0333,
              "lng": 104.0833,
              "x": 58,
              "y": 32
            },
            "population": "100 k",
            "region": "Orkhon",
            "description": "Deuxième ville et grand pôle minier du cuivre."
          }
        ]
      },
      {
        "id": "pakistan",
        "name": "Pakistan",
        "continentId": "asia",
        "capital": "Islamabad",
        "capitalCoords": {
          "lat": 33.6844,
          "lng": 73.0479,
          "x": 39,
          "y": 46
        },
        "flag": "🇵🇰",
        "centerCoords": {
          "lat": 30.3753,
          "lng": 69.3451,
          "x": 37,
          "y": 49
        },
        "description": "Pays des sommets légendaires du Karakoram (K2) et de la civilisation de l'Indus.",
        "cities": [
          {
            "id": "islamabad",
            "name": "Islamabad",
            "countryId": "pakistan",
            "isCapital": true,
            "coords": {
              "lat": 33.6844,
              "lng": 73.0479,
              "x": 39,
              "y": 46
            },
            "population": "1.2 M",
            "region": "Territoire fédéral",
            "description": "Capitale moderne et planifiée au pied des collines de Margalla."
          },
          {
            "id": "karachi",
            "name": "Karachi",
            "countryId": "pakistan",
            "isCapital": false,
            "coords": {
              "lat": 24.8607,
              "lng": 67.0011,
              "x": 35,
              "y": 55
            },
            "population": "16.0 M",
            "region": "Sind",
            "description": "Mégalopole maritime et poumon économique vibrant sur la mer d'Arabie."
          },
          {
            "id": "lahore",
            "name": "Lahore",
            "countryId": "pakistan",
            "isCapital": false,
            "coords": {
              "lat": 31.5204,
              "lng": 74.3587,
              "x": 40,
              "y": 48
            },
            "population": "13.0 M",
            "region": "Pendjab",
            "description": "Cœur culturel historique abritant le fort moghol et la mosquée Badshahi."
          }
        ]
      },
      {
        "id": "bangladesh",
        "name": "Bangladesh",
        "continentId": "asia",
        "capital": "Dacca",
        "capitalCoords": {
          "lat": 23.8103,
          "lng": 90.4125,
          "x": 50,
          "y": 56
        },
        "flag": "🇧🇩",
        "centerCoords": {
          "lat": 23.685,
          "lng": 90.3563,
          "x": 50,
          "y": 56
        },
        "description": "Pays verdoyant sur le plus vaste delta du monde au confluent du Gange et du Brahmapoutre.",
        "cities": [
          {
            "id": "dhaka",
            "name": "Dacca",
            "countryId": "bangladesh",
            "isCapital": true,
            "coords": {
              "lat": 23.8103,
              "lng": 90.4125,
              "x": 50,
              "y": 56
            },
            "population": "10.2 M",
            "region": "Dacca",
            "description": "La Ville des Mosquées et des rickshaws, ruche humaine bouillonnante."
          },
          {
            "id": "chittagong",
            "name": "Chittagong",
            "countryId": "bangladesh",
            "isCapital": false,
            "coords": {
              "lat": 22.3569,
              "lng": 91.7832,
              "x": 51,
              "y": 57
            },
            "population": "3.2 M",
            "region": "Chittagong",
            "description": "Principal port maritime du pays sur le golfe du Bengale."
          },
          {
            "id": "sylhet",
            "name": "Sylhet",
            "countryId": "bangladesh",
            "isCapital": false,
            "coords": {
              "lat": 24.8949,
              "lng": 91.8687,
              "x": 51,
              "y": 55
            },
            "population": "530 k",
            "region": "Sylhet",
            "description": "Capitale du thé entourée de collines ondulantes de plantations vertes."
          }
        ]
      },
      {
        "id": "sri_lanka",
        "name": "Sri Lanka",
        "continentId": "asia",
        "capital": "Sri Jayawardenepura Kotte",
        "capitalCoords": {
          "lat": 6.9271,
          "lng": 79.8612,
          "x": 44,
          "y": 72
        },
        "flag": "🇱🇰",
        "centerCoords": {
          "lat": 7.8731,
          "lng": 80.7718,
          "x": 45,
          "y": 71
        },
        "description": "La Perle de l'océan Indien réputée pour ses plantations de thé de Ceylan et le rocher de Sigiriya.",
        "cities": [
          {
            "id": "colombo",
            "name": "Colombo",
            "countryId": "sri_lanka",
            "isCapital": true,
            "coords": {
              "lat": 6.9271,
              "lng": 79.8612,
              "x": 44,
              "y": 72
            },
            "population": "750 k",
            "region": "Ouest",
            "description": "Capitale économique côtière mêlant gratte-ciel et édifices coloniaux."
          },
          {
            "id": "kandy",
            "name": "Kandy",
            "countryId": "sri_lanka",
            "isCapital": false,
            "coords": {
              "lat": 7.2906,
              "lng": 80.6337,
              "x": 45,
              "y": 72
            },
            "population": "125 k",
            "region": "Centre",
            "description": "Cité sacrée des collines abritant le temple de la Dent de Bouddha."
          },
          {
            "id": "galle",
            "name": "Galle",
            "countryId": "sri_lanka",
            "isCapital": false,
            "coords": {
              "lat": 6.0535,
              "lng": 80.221,
              "x": 44,
              "y": 73
            },
            "population": "99 k",
            "region": "Sud",
            "description": "Joyau fortifié hollandais du XVIIe siècle classé UNESCO."
          }
        ]
      },
      {
        "id": "nepal",
        "name": "Népal",
        "continentId": "asia",
        "capital": "Katmandou",
        "capitalCoords": {
          "lat": 27.7172,
          "lng": 85.324,
          "x": 47,
          "y": 52
        },
        "flag": "🇳🇵",
        "centerCoords": {
          "lat": 28.3949,
          "lng": 84.124,
          "x": 46,
          "y": 51
        },
        "description": "Royaume himalayen abritant le mont Everest et les temples séculaires de la vallée de Katmandou.",
        "cities": [
          {
            "id": "kathmandu",
            "name": "Katmandou",
            "countryId": "nepal",
            "isCapital": true,
            "coords": {
              "lat": 27.7172,
              "lng": 85.324,
              "x": 47,
              "y": 52
            },
            "population": "1.4 M",
            "region": "Bagmati",
            "description": "Capitale légendaire avec sa place Durbar et ses stupas Swayambhunath."
          },
          {
            "id": "pokhara",
            "name": "Pokhara",
            "countryId": "nepal",
            "isCapital": false,
            "coords": {
              "lat": 28.2096,
              "lng": 83.9856,
              "x": 46,
              "y": 51
            },
            "population": "520 k",
            "region": "Gandaki",
            "description": "Porte d'accès au sanctuaire des Annapurnas au bord du lac Phewa."
          },
          {
            "id": "lalitpur",
            "name": "Lalitpur (Patan)",
            "countryId": "nepal",
            "isCapital": false,
            "coords": {
              "lat": 27.671,
              "lng": 85.3228,
              "x": 47,
              "y": 52
            },
            "population": "300 k",
            "region": "Bagmati",
            "description": "La Cité de la Beauté réputée pour ses artisans et temples newars."
          }
        ]
      },
      {
        "id": "bhutan",
        "name": "Bhoutan",
        "continentId": "asia",
        "capital": "Thimphou",
        "capitalCoords": {
          "lat": 27.4728,
          "lng": 89.6393,
          "x": 50,
          "y": 52
        },
        "flag": "🇧🇹",
        "centerCoords": {
          "lat": 27.5142,
          "lng": 90.4336,
          "x": 50,
          "y": 52
        },
        "description": "Le Royaume du Dragon Tonnerre, pionnier du Bonheur National Brut dans l'Himalaya.",
        "cities": [
          {
            "id": "thimphu",
            "name": "Thimphou",
            "countryId": "bhutan",
            "isCapital": true,
            "coords": {
              "lat": 27.4728,
              "lng": 89.6393,
              "x": 50,
              "y": 52
            },
            "population": "115 k",
            "region": "Thimphou",
            "description": "Unique capitale au monde sans aucun feu de circulation."
          },
          {
            "id": "paro",
            "name": "Paro",
            "countryId": "bhutan",
            "isCapital": false,
            "coords": {
              "lat": 27.4287,
              "lng": 89.4164,
              "x": 50,
              "y": 52
            },
            "population": "11 k",
            "region": "Paro",
            "description": "Vallée sacrée abritant le spectaculaire monastère du Nid du Tigre (Taktsang)."
          }
        ]
      },
      {
        "id": "myanmar",
        "name": "Birmanie (Myanmar)",
        "continentId": "asia",
        "capital": "Naypyidaw",
        "capitalCoords": {
          "lat": 19.7633,
          "lng": 96.0785,
          "x": 54,
          "y": 60
        },
        "flag": "🇲🇲",
        "centerCoords": {
          "lat": 21.9162,
          "lng": 95.956,
          "x": 54,
          "y": 58
        },
        "description": "Le Pays d'Or aux mille pagodes scintillantes de Bagan et au lac Inle.",
        "cities": [
          {
            "id": "naypyidaw",
            "name": "Naypyidaw",
            "countryId": "myanmar",
            "isCapital": true,
            "coords": {
              "lat": 19.7633,
              "lng": 96.0785,
              "x": 54,
              "y": 60
            },
            "population": "1.2 M",
            "region": "Naypyidaw",
            "description": "Capitale monumentale aux avenues à 20 voies et pagode Uppatasanti."
          },
          {
            "id": "yangon",
            "name": "Rangoun (Yangon)",
            "countryId": "myanmar",
            "isCapital": false,
            "coords": {
              "lat": 16.8661,
              "lng": 96.1951,
              "x": 54,
              "y": 63
            },
            "population": "5.4 M",
            "region": "Yangon",
            "description": "Plus grande ville du pays abritant la fabuleuse pagode Shwedagon."
          },
          {
            "id": "mandalay",
            "name": "Mandalay",
            "countryId": "myanmar",
            "isCapital": false,
            "coords": {
              "lat": 21.9588,
              "lng": 96.0891,
              "x": 54,
              "y": 58
            },
            "population": "1.4 M",
            "region": "Mandalay",
            "description": "Dernière capitale royale sur les rives de l'Irrawaddy."
          }
        ]
      },
      {
        "id": "cambodia",
        "name": "Cambodge",
        "continentId": "asia",
        "capital": "Phnom Penh",
        "capitalCoords": {
          "lat": 11.5564,
          "lng": 104.9282,
          "x": 59,
          "y": 68
        },
        "flag": "🇰🇭",
        "centerCoords": {
          "lat": 12.5657,
          "lng": 104.991,
          "x": 59,
          "y": 67
        },
        "description": "Royaume khmer abritant les majestueux temples d'Angkor classés UNESCO.",
        "cities": [
          {
            "id": "phnom_penh",
            "name": "Phnom Penh",
            "countryId": "cambodia",
            "isCapital": true,
            "coords": {
              "lat": 11.5564,
              "lng": 104.9282,
              "x": 59,
              "y": 68
            },
            "population": "2.3 M",
            "region": "Phnom Penh",
            "description": "Capitale royale au confluent du Mékong et du Tonlé Sap."
          },
          {
            "id": "siem_reap",
            "name": "Siem Reap",
            "countryId": "cambodia",
            "isCapital": false,
            "coords": {
              "lat": 13.3671,
              "lng": 103.8448,
              "x": 58,
              "y": 66
            },
            "population": "250 k",
            "region": "Siem Reap",
            "description": "Porte d'entrée mondiale vers les temples légendaires d'Angkor Wat."
          },
          {
            "id": "battambang",
            "name": "Battambang",
            "countryId": "cambodia",
            "isCapital": false,
            "coords": {
              "lat": 13.0957,
              "lng": 103.2022,
              "x": 58,
              "y": 66
            },
            "population": "150 k",
            "region": "Battambang",
            "description": "Deuxième ville réputée pour ses édifices coloniaux et son train de bambou."
          }
        ]
      },
      {
        "id": "laos",
        "name": "Laos",
        "continentId": "asia",
        "capital": "Vientiane",
        "capitalCoords": {
          "lat": 17.9757,
          "lng": 102.6331,
          "x": 57,
          "y": 61
        },
        "flag": "🇱🇦",
        "centerCoords": {
          "lat": 19.8563,
          "lng": 102.4955,
          "x": 57,
          "y": 60
        },
        "description": "Le Pays du Million d'Éléphants au fil du Mékong et temples dorés de Luang Prabang.",
        "cities": [
          {
            "id": "vientiane",
            "name": "Vientiane",
            "countryId": "laos",
            "isCapital": true,
            "coords": {
              "lat": 17.9757,
              "lng": 102.6331,
              "x": 57,
              "y": 61
            },
            "population": "820 k",
            "region": "Vientiane",
            "description": "Capitale paisible sur le Mékong avec le grand stupa Pha That Luang."
          },
          {
            "id": "luang_prabang",
            "name": "Luang Prabang",
            "countryId": "laos",
            "isCapital": false,
            "coords": {
              "lat": 19.8893,
              "lng": 102.134,
              "x": 57,
              "y": 59
            },
            "population": "55 k",
            "region": "Luang Prabang",
            "description": "Ancienne cité royale classée UNESCO célèbre pour ses bonzes et cascades de Kuang Si."
          },
          {
            "id": "pakse",
            "name": "Paksé",
            "countryId": "laos",
            "isCapital": false,
            "coords": {
              "lat": 15.1213,
              "lng": 105.7821,
              "x": 59,
              "y": 64
            },
            "population": "90 k",
            "region": "Champassak",
            "description": "Porte vers le plateau des Bolaven et les 4000 îles du Mékong."
          }
        ]
      },
      {
        "id": "maldives",
        "name": "Maldives",
        "continentId": "asia",
        "capital": "Malé",
        "capitalCoords": {
          "lat": 4.1755,
          "lng": 73.5093,
          "x": 40,
          "y": 75
        },
        "flag": "🇲🇻",
        "centerCoords": {
          "lat": 3.2028,
          "lng": 73.2207,
          "x": 40,
          "y": 76
        },
        "description": "Archipel corallien de 26 atolls aux lagons translucides et pilotis de rêve.",
        "cities": [
          {
            "id": "male",
            "name": "Malé",
            "countryId": "maldives",
            "isCapital": true,
            "coords": {
              "lat": 4.1755,
              "lng": 73.5093,
              "x": 40,
              "y": 75
            },
            "population": "250 k",
            "region": "Malé",
            "description": "Une des îles capitales les plus densément peuplées au monde."
          },
          {
            "id": "addu_city",
            "name": "Addu City",
            "countryId": "maldives",
            "isCapital": false,
            "coords": {
              "lat": -0.63,
              "lng": 73.1586,
              "x": 40,
              "y": 79
            },
            "population": "33 k",
            "region": "Atoll Seenu",
            "description": "Atoll le plus méridional situé au sud de l'équateur."
          }
        ]
      },
      {
        "id": "taiwan",
        "name": "Taïwan",
        "continentId": "asia",
        "capital": "Taipei",
        "capitalCoords": {
          "lat": 25.033,
          "lng": 121.5654,
          "x": 69,
          "y": 55
        },
        "flag": "🇹🇼",
        "centerCoords": {
          "lat": 23.6978,
          "lng": 120.9605,
          "x": 68,
          "y": 56
        },
        "description": "Île de haute technologie aux marchés de nuit animés et aux spectaculaires gorges de Taroko.",
        "cities": [
          {
            "id": "taipei",
            "name": "Taipei",
            "countryId": "taiwan",
            "isCapital": true,
            "coords": {
              "lat": 25.033,
              "lng": 121.5654,
              "x": 69,
              "y": 55
            },
            "population": "2.6 M",
            "region": "Taipei",
            "description": "Capitale dynamique avec le gratte-ciel Taipei 101 et le musée du Palais national."
          },
          {
            "id": "kaohsiung",
            "name": "Kaohsiung",
            "countryId": "taiwan",
            "isCapital": false,
            "coords": {
              "lat": 22.6273,
              "lng": 120.3014,
              "x": 68,
              "y": 58
            },
            "population": "2.7 M",
            "region": "Kaohsiung",
            "description": "Grand port du sud réputé pour son centre artistique Pier-2."
          },
          {
            "id": "taichung",
            "name": "Taichung",
            "countryId": "taiwan",
            "isCapital": false,
            "coords": {
              "lat": 24.1477,
              "lng": 120.6736,
              "x": 68,
              "y": 56
            },
            "population": "2.8 M",
            "region": "Taichung",
            "description": "Cœur culturel du centre de Taïwan et berceau du Bubble Tea."
          }
        ]
      },
      {
        "id": "hong_kong",
        "name": "Hong Kong",
        "continentId": "asia",
        "capital": "Hong Kong",
        "capitalCoords": {
          "lat": 22.3193,
          "lng": 114.1694,
          "x": 64,
          "y": 58
        },
        "flag": "🇭🇰",
        "centerCoords": {
          "lat": 22.3193,
          "lng": 114.1694,
          "x": 64,
          "y": 58
        },
        "description": "Mégalopole verticale iconique célèbre pour sa baie Victoria et ses gratte-ciel scintillants.",
        "cities": [
          {
            "id": "hong_kong_city",
            "name": "Hong Kong (Central)",
            "countryId": "hong_kong",
            "isCapital": true,
            "coords": {
              "lat": 22.28,
              "lng": 114.1588,
              "x": 64,
              "y": 58
            },
            "population": "7.4 M",
            "region": "Hong Kong",
            "description": "Cœur financier vibrant dominé par Victoria Peak et la baie Victoria."
          },
          {
            "id": "kowloon",
            "name": "Kowloon",
            "countryId": "hong_kong",
            "isCapital": false,
            "coords": {
              "lat": 22.3204,
              "lng": 114.1726,
              "x": 64,
              "y": 58
            },
            "population": "2.2 M",
            "region": "Kowloon",
            "description": "Quartier légendaire aux marchés de nuit et front de mer Tsim Sha Tsui."
          }
        ]
      },
      {
        "id": "macau",
        "name": "Macao",
        "continentId": "asia",
        "capital": "Macao",
        "capitalCoords": {
          "lat": 22.1987,
          "lng": 113.5439,
          "x": 64,
          "y": 58
        },
        "flag": "🇲🇴",
        "centerCoords": {
          "lat": 22.1987,
          "lng": 113.5439,
          "x": 64,
          "y": 58
        },
        "description": "Ancien comptoir portugais célèbre pour ses ruines de Saint-Paul et ses casinos spectaculaires.",
        "cities": [
          {
            "id": "macau_city",
            "name": "Macao",
            "countryId": "macau",
            "isCapital": true,
            "coords": {
              "lat": 22.1987,
              "lng": 113.5439,
              "x": 64,
              "y": 58
            },
            "population": "680 k",
            "region": "Macao",
            "description": "Capitale mondiale du jeu et centre historique luso-chinois classé UNESCO."
          }
        ]
      },
      {
        "id": "brunei",
        "name": "Brunei",
        "continentId": "asia",
        "capital": "Bandar Seri Begawan",
        "capitalCoords": {
          "lat": 4.9031,
          "lng": 114.9398,
          "x": 65,
          "y": 74
        },
        "flag": "🇧🇳",
        "centerCoords": {
          "lat": 4.5353,
          "lng": 114.7277,
          "x": 65,
          "y": 74
        },
        "description": "Riche sultanat de l'île de Bornéo aux somptueuses mosquées à dômes dorés.",
        "cities": [
          {
            "id": "bandar_seri_begawan",
            "name": "Bandar Seri Begawan",
            "countryId": "brunei",
            "isCapital": true,
            "coords": {
              "lat": 4.9031,
              "lng": 114.9398,
              "x": 65,
              "y": 74
            },
            "population": "100 k",
            "region": "Brunei-Muara",
            "description": "Capitale du sultanat avec la mosquée Omar Ali Saifuddien et le village sur pilotis Kampong Ayer."
          },
          {
            "id": "kuala_belait",
            "name": "Kuala Belait",
            "countryId": "brunei",
            "isCapital": false,
            "coords": {
              "lat": 4.5833,
              "lng": 114.2333,
              "x": 65,
              "y": 74
            },
            "population": "30 k",
            "region": "Belait",
            "description": "Pôle pétrolier à l'embouchure de la rivière Belait."
          }
        ]
      },
      {
        "id": "timor_leste",
        "name": "Timor oriental",
        "continentId": "asia",
        "capital": "Dili",
        "capitalCoords": {
          "lat": -8.5569,
          "lng": 125.5603,
          "x": 72,
          "y": 84
        },
        "flag": "🇹🇱",
        "centerCoords": {
          "lat": -8.8742,
          "lng": 125.7275,
          "x": 72,
          "y": 84
        },
        "description": "Jeune nation insulaire lusophone d'Asie du Sud-Est aux récifs coralliens immaculés.",
        "cities": [
          {
            "id": "dili",
            "name": "Dili",
            "countryId": "timor_leste",
            "isCapital": true,
            "coords": {
              "lat": -8.5569,
              "lng": 125.5603,
              "x": 72,
              "y": 84
            },
            "population": "280 k",
            "region": "Dili",
            "description": "Capitale côtière dominée par la statue géante du Cristo Rei."
          },
          {
            "id": "baucau",
            "name": "Baucau",
            "countryId": "timor_leste",
            "isCapital": false,
            "coords": {
              "lat": -8.4711,
              "lng": 126.4583,
              "x": 73,
              "y": 84
            },
            "population": "46 k",
            "region": "Baucau",
            "description": "Deuxième ville réputée pour ses édifices coloniaux portugais."
          }
        ]
      },
      {
        "id": "afghanistan",
        "name": "Afghanistan",
        "continentId": "asia",
        "capital": "Kaboul",
        "capitalCoords": {
          "lat": 34.5553,
          "lng": 69.2075,
          "x": 37,
          "y": 45
        },
        "flag": "🇦🇫",
        "centerCoords": {
          "lat": 33.9391,
          "lng": 67.71,
          "x": 36,
          "y": 46
        },
        "description": "Pays montagneux de l'Hindou Kouch au carrefour millénaire des civilisations d'Asie centrale.",
        "cities": [
          {
            "id": "kabul",
            "name": "Kaboul",
            "countryId": "afghanistan",
            "isCapital": true,
            "coords": {
              "lat": 34.5553,
              "lng": 69.2075,
              "x": 37,
              "y": 45
            },
            "population": "4.6 M",
            "region": "Kaboul",
            "description": "Capitale historique nichée dans une vallée à 1800 m d'altitude."
          },
          {
            "id": "herat",
            "name": "Hérat",
            "countryId": "afghanistan",
            "isCapital": false,
            "coords": {
              "lat": 34.3529,
              "lng": 62.204,
              "x": 33,
              "y": 45
            },
            "population": "575 k",
            "region": "Hérat",
            "description": "Perle du Khorassan antique avec sa grande mosquée du Vendredi."
          },
          {
            "id": "mazar_i_sharif",
            "name": "Mazar-i-Sharif",
            "countryId": "afghanistan",
            "isCapital": false,
            "coords": {
              "lat": 36.7061,
              "lng": 67.1122,
              "x": 36,
              "y": 43
            },
            "population": "500 k",
            "region": "Balkh",
            "description": "Cité du nord célèbre pour la Mosquée Bleue de Hazrat Ali."
          }
        ]
      },
      {
        "id": "north_korea",
        "name": "Corée du Nord",
        "continentId": "asia",
        "capital": "Pyongyang",
        "capitalCoords": {
          "lat": 39.0392,
          "lng": 125.7625,
          "x": 72,
          "y": 40
        },
        "flag": "🇰🇵",
        "centerCoords": {
          "lat": 40.3399,
          "lng": 127.5101,
          "x": 73,
          "y": 39
        },
        "description": "Pays d'Asie de l'Est réputé pour sa tour du Juche et ses monuments monumentaux.",
        "cities": [
          {
            "id": "pyongyang",
            "name": "Pyongyang",
            "countryId": "north_korea",
            "isCapital": true,
            "coords": {
              "lat": 39.0392,
              "lng": 125.7625,
              "x": 72,
              "y": 40
            },
            "population": "3.0 M",
            "region": "Pyongyang",
            "description": "Capitale traversée par le fleuve Taedong avec la tour du Juche."
          },
          {
            "id": "hamhung",
            "name": "Hamhŭng",
            "countryId": "north_korea",
            "isCapital": false,
            "coords": {
              "lat": 39.9167,
              "lng": 127.5333,
              "x": 73,
              "y": 39
            },
            "population": "770 k",
            "region": "Hamgyong du Sud",
            "description": "Deuxième ville et pôle industriel majeur de la côte est."
          },
          {
            "id": "kaesong",
            "name": "Kaesŏng",
            "countryId": "north_korea",
            "isCapital": false,
            "coords": {
              "lat": 37.9667,
              "lng": 126.55,
              "x": 72,
              "y": 41
            },
            "population": "300 k",
            "region": "Hwanghae du Nord",
            "description": "Ancienne capitale de la dynastie Koryo proche de la zone démilitarisée."
          }
        ]
      },
      {
        "id": "palestine",
        "name": "Palestine",
        "continentId": "asia",
        "capital": "Jérusalem-Est / Ramallah",
        "capitalCoords": {
          "lat": 31.9038,
          "lng": 35.2034,
          "x": 14,
          "y": 48
        },
        "flag": "🇵🇸",
        "centerCoords": {
          "lat": 31.9522,
          "lng": 35.2332,
          "x": 14,
          "y": 48
        },
        "description": "Terre d'histoire millénaire abritant les oliviers séculaires et la basilique de la Nativité à Bethléem.",
        "cities": [
          {
            "id": "ramallah",
            "name": "Ramallah",
            "countryId": "palestine",
            "isCapital": true,
            "coords": {
              "lat": 31.9038,
              "lng": 35.2034,
              "x": 14,
              "y": 48
            },
            "population": "40 k",
            "region": "Cisjordanie",
            "description": "Centre administratif et culturel de la Cisjordanie."
          },
          {
            "id": "gaza",
            "name": "Gaza",
            "countryId": "palestine",
            "isCapital": false,
            "coords": {
              "lat": 31.5017,
              "lng": 34.4668,
              "x": 13,
              "y": 49
            },
            "population": "590 k",
            "region": "Bande de Gaza",
            "description": "Cité côtière méditerranéenne historique."
          },
          {
            "id": "bethlehem",
            "name": "Bethléem",
            "countryId": "palestine",
            "isCapital": false,
            "coords": {
              "lat": 31.7054,
              "lng": 35.2024,
              "x": 14,
              "y": 48
            },
            "population": "30 k",
            "region": "Cisjordanie",
            "description": "Berceau biblique abritant la basilique de la Nativité classée UNESCO."
          }
        ]
      }
    ]
  },
  {
    "id": "africa",
    "name": "Afrique",
    "code": "AF",
    "centerCoords": {
      "lat": 0,
      "lng": 20,
      "x": 53,
      "y": 55
    },
    "countries": [
      {
        "id": "egypt",
        "name": "Égypte",
        "continentId": "africa",
        "capital": "Le Caire",
        "capitalCoords": {
          "lat": 30.0444,
          "lng": 31.2357,
          "x": 62,
          "y": 25
        },
        "flag": "🇪🇬",
        "centerCoords": {
          "lat": 26.8206,
          "lng": 30.8025,
          "x": 62,
          "y": 25
        },
        "description": "Terre des pharaons, des pyramides et du Nil.",
        "cities": [
          {
            "id": "cairo",
            "name": "Le Caire",
            "countryId": "egypt",
            "isCapital": true,
            "coords": {
              "lat": 30.0444,
              "lng": 31.2357,
              "x": 62,
              "y": 25
            },
            "population": "10 M",
            "region": "Le Caire",
            "description": "Capitale millénaire aux portes des pyramides de Gizeh."
          },
          {
            "id": "alexandria",
            "name": "Alexandrie",
            "countryId": "egypt",
            "isCapital": false,
            "coords": {
              "lat": 31.2001,
              "lng": 29.9187,
              "x": 60,
              "y": 23
            },
            "population": "5.2 M",
            "region": "Alexandrie",
            "description": "Grand port méditerranéen fondé par Alexandre."
          },
          {
            "id": "luxor",
            "name": "Louxor",
            "countryId": "egypt",
            "isCapital": false,
            "coords": {
              "lat": 25.6872,
              "lng": 32.6396,
              "x": 64,
              "y": 35
            },
            "population": "500 k",
            "region": "Louxor",
            "description": "L'antique Thèbes et la Vallée des Rois."
          }
        ]
      },
      {
        "id": "morocco",
        "name": "Maroc",
        "continentId": "africa",
        "capital": "Rabat",
        "capitalCoords": {
          "lat": 34.0209,
          "lng": -6.8416,
          "x": 28,
          "y": 20
        },
        "flag": "🇲🇦",
        "centerCoords": {
          "lat": 31.7917,
          "lng": -7.0926,
          "x": 28,
          "y": 20
        },
        "description": "Royaume aux villes impériales et médinas séculaires.",
        "cities": [
          {
            "id": "rabat",
            "name": "Rabat",
            "countryId": "morocco",
            "isCapital": true,
            "coords": {
              "lat": 34.0209,
              "lng": -6.8416,
              "x": 28,
              "y": 20
            },
            "population": "580 k",
            "region": "Rabat",
            "description": "Capitale royale avec la Tour Hassan."
          },
          {
            "id": "casablanca",
            "name": "Casablanca",
            "countryId": "morocco",
            "isCapital": false,
            "coords": {
              "lat": 33.5731,
              "lng": -7.5898,
              "x": 27,
              "y": 22
            },
            "population": "3.7 M",
            "region": "Casablanca",
            "description": "Poumon économique abritant la mosquée Hassan II."
          },
          {
            "id": "marrakech",
            "name": "Marrakech",
            "countryId": "morocco",
            "isCapital": false,
            "coords": {
              "lat": 31.6295,
              "lng": -7.9811,
              "x": 26,
              "y": 27
            },
            "population": "1.0 M",
            "region": "Marrakech",
            "description": "La Ville Rouge célèbre pour Jemaa el-Fna."
          }
        ]
      },
      {
        "id": "south_africa",
        "name": "Afrique du Sud",
        "continentId": "africa",
        "capital": "Pretoria",
        "capitalCoords": {
          "lat": -25.7479,
          "lng": 28.2293,
          "x": 62,
          "y": 84
        },
        "flag": "🇿🇦",
        "centerCoords": {
          "lat": -30.5595,
          "lng": 22.9375,
          "x": 62,
          "y": 84
        },
        "description": "La Nation Arc-en-Ciel, pays des grands safaris.",
        "cities": [
          {
            "id": "pretoria",
            "name": "Pretoria",
            "countryId": "south_africa",
            "isCapital": true,
            "coords": {
              "lat": -25.7479,
              "lng": 28.2293,
              "x": 62,
              "y": 84
            },
            "population": "750 k",
            "region": "Gauteng",
            "description": "Capitale administrative aux jacarandas."
          },
          {
            "id": "cape_town",
            "name": "Le Cap",
            "countryId": "south_africa",
            "isCapital": false,
            "coords": {
              "lat": -33.9249,
              "lng": 18.4241,
              "x": 48,
              "y": 92
            },
            "population": "4.6 M",
            "region": "Cap",
            "description": "Capitale législative sous la Montagne de la Table."
          },
          {
            "id": "johannesburg",
            "name": "Johannesbourg",
            "countryId": "south_africa",
            "isCapital": false,
            "coords": {
              "lat": -26.2041,
              "lng": 28.0473,
              "x": 62,
              "y": 85
            },
            "population": "5.6 M",
            "region": "Gauteng",
            "description": "Mégalopole économique d'Afrique australe."
          }
        ]
      },
      {
        "id": "senegal",
        "name": "Sénégal",
        "continentId": "africa",
        "capital": "Dakar",
        "capitalCoords": {
          "lat": 14.7167,
          "lng": -17.4677,
          "x": 12,
          "y": 44
        },
        "flag": "🇸🇳",
        "centerCoords": {
          "lat": 14.4974,
          "lng": -14.4524,
          "x": 12,
          "y": 44
        },
        "description": "Pays de la Teranga à la pointe ouest de l'Afrique.",
        "cities": [
          {
            "id": "dakar",
            "name": "Dakar",
            "countryId": "senegal",
            "isCapital": true,
            "coords": {
              "lat": 14.7167,
              "lng": -17.4677,
              "x": 12,
              "y": 44
            },
            "population": "3.1 M",
            "region": "Dakar",
            "description": "Capitale sur la presqu'île du Cap-Vert face à Gorée."
          },
          {
            "id": "touba",
            "name": "Touba",
            "countryId": "senegal",
            "isCapital": false,
            "coords": {
              "lat": 14.8647,
              "lng": -15.8756,
              "x": 15,
              "y": 43
            },
            "population": "800 k",
            "region": "Diourbel",
            "description": "Ville sainte abritant sa grande mosquée."
          },
          {
            "id": "saint_louis_senegal",
            "name": "Saint-Louis",
            "countryId": "senegal",
            "isCapital": false,
            "coords": {
              "lat": 16.0326,
              "lng": -16.4818,
              "x": 14,
              "y": 40
            },
            "population": "210 k",
            "region": "Saint-Louis",
            "description": "Ancienne capitale coloniale sur le fleuve."
          }
        ]
      },
      {
        "id": "ivory_coast",
        "name": "Côte d'Ivoire",
        "continentId": "africa",
        "capital": "Yamoussoukro",
        "capitalCoords": {
          "lat": 6.8276,
          "lng": -5.2893,
          "x": 28,
          "y": 56
        },
        "flag": "🇨🇮",
        "centerCoords": {
          "lat": 7.54,
          "lng": -5.5471,
          "x": 28,
          "y": 56
        },
        "description": "Premier producteur mondial de cacao et moteur économique régional.",
        "cities": [
          {
            "id": "yamoussoukro",
            "name": "Yamoussoukro",
            "countryId": "ivory_coast",
            "isCapital": true,
            "coords": {
              "lat": 6.8276,
              "lng": -5.2893,
              "x": 28,
              "y": 56
            },
            "population": "350 k",
            "region": "Bélier",
            "description": "Capitale abritant la monumentale basilique."
          },
          {
            "id": "abidjan",
            "name": "Abidjan",
            "countryId": "ivory_coast",
            "isCapital": false,
            "coords": {
              "lat": 5.36,
              "lng": -4.0083,
              "x": 30,
              "y": 58
            },
            "population": "5.6 M",
            "region": "Lagunes",
            "description": "La Perle des lagunes et cœur économique."
          },
          {
            "id": "bouake",
            "name": "Bouaké",
            "countryId": "ivory_coast",
            "isCapital": false,
            "coords": {
              "lat": 7.6905,
              "lng": -5.0396,
              "x": 28,
              "y": 54
            },
            "population": "680 k",
            "region": "Gbêkê",
            "description": "Grand carrefour commercial du centre."
          }
        ]
      },
      {
        "id": "nigeria",
        "name": "Nigeria",
        "continentId": "africa",
        "capital": "Abuja",
        "capitalCoords": {
          "lat": 9.0765,
          "lng": 7.3986,
          "x": 42,
          "y": 52
        },
        "flag": "🇳🇬",
        "centerCoords": {
          "lat": 9.082,
          "lng": 8.6753,
          "x": 42,
          "y": 52
        },
        "description": "Le Géant d'Afrique, pays le plus peuplé du continent.",
        "cities": [
          {
            "id": "abuja",
            "name": "Abuja",
            "countryId": "nigeria",
            "isCapital": true,
            "coords": {
              "lat": 9.0765,
              "lng": 7.3986,
              "x": 42,
              "y": 52
            },
            "population": "3.6 M",
            "region": "FCT",
            "description": "Capitale fédérale planifiée."
          },
          {
            "id": "lagos",
            "name": "Lagos",
            "countryId": "nigeria",
            "isCapital": false,
            "coords": {
              "lat": 6.5244,
              "lng": 3.3792,
              "x": 38,
              "y": 57
            },
            "population": "15.4 M",
            "region": "Lagos",
            "description": "Plus grande mégalopole d'Afrique subsaharienne."
          },
          {
            "id": "kano",
            "name": "Kano",
            "countryId": "nigeria",
            "isCapital": false,
            "coords": {
              "lat": 12.0022,
              "lng": 8.592,
              "x": 44,
              "y": 47
            },
            "population": "4.1 M",
            "region": "Kano",
            "description": "Cité commerçante millénaire du nord."
          }
        ]
      },
      {
        "id": "kenya",
        "name": "Kenya",
        "continentId": "africa",
        "capital": "Nairobi",
        "capitalCoords": {
          "lat": -1.2921,
          "lng": 36.8219,
          "x": 74,
          "y": 58
        },
        "flag": "🇰🇪",
        "centerCoords": {
          "lat": -0.0236,
          "lng": 37.9062,
          "x": 74,
          "y": 58
        },
        "description": "Terre de safaris dans le Masai Mara et de grands coureurs.",
        "cities": [
          {
            "id": "nairobi",
            "name": "Nairobi",
            "countryId": "kenya",
            "isCapital": true,
            "coords": {
              "lat": -1.2921,
              "lng": 36.8219,
              "x": 74,
              "y": 58
            },
            "population": "4.4 M",
            "region": "Nairobi",
            "description": "Capitale entourée d'un parc national avec faune sauvage."
          },
          {
            "id": "mombasa",
            "name": "Mombasa",
            "countryId": "kenya",
            "isCapital": false,
            "coords": {
              "lat": -4.0435,
              "lng": 39.6682,
              "x": 77,
              "y": 63
            },
            "population": "1.2 M",
            "region": "Côte",
            "description": "Grand port swahili de l'océan Indien."
          },
          {
            "id": "kisumu",
            "name": "Kisumu",
            "countryId": "kenya",
            "isCapital": false,
            "coords": {
              "lat": -0.0917,
              "lng": 34.768,
              "x": 72,
              "y": 57
            },
            "population": "400 k",
            "region": "Nyanza",
            "description": "Port kényan sur le lac Victoria."
          }
        ]
      },
      {
        "id": "algeria",
        "name": "Algérie",
        "continentId": "africa",
        "capital": "Alger",
        "capitalCoords": {
          "lat": 36.7538,
          "lng": 3.0588,
          "x": 42,
          "y": 15
        },
        "flag": "🇩🇿",
        "centerCoords": {
          "lat": 28.0339,
          "lng": 1.6596,
          "x": 42,
          "y": 24
        },
        "description": "Plus vaste pays d'Afrique et du bassin méditerranéen.",
        "cities": [
          {
            "id": "algiers",
            "name": "Alger",
            "countryId": "algeria",
            "isCapital": true,
            "coords": {
              "lat": 36.7538,
              "lng": 3.0588,
              "x": 42,
              "y": 15
            },
            "population": "3.0 M",
            "region": "Alger",
            "description": "Alger la Blanche sur sa baie méditerranéenne."
          },
          {
            "id": "oran",
            "name": "Oran",
            "countryId": "algeria",
            "isCapital": false,
            "coords": {
              "lat": 35.6987,
              "lng": -0.6349,
              "x": 37,
              "y": 17
            },
            "population": "1.5 M",
            "region": "Oran",
            "description": "El Bahia, berceau du raï."
          },
          {
            "id": "constantine",
            "name": "Constantine",
            "countryId": "algeria",
            "isCapital": false,
            "coords": {
              "lat": 36.365,
              "lng": 6.6147,
              "x": 46,
              "y": 16
            },
            "population": "940 k",
            "region": "Constantine",
            "description": "La Ville des ponts suspendus."
          }
        ]
      },
      {
        "id": "tunisia",
        "name": "Tunisie",
        "continentId": "africa",
        "capital": "Tunis",
        "capitalCoords": {
          "lat": 36.8065,
          "lng": 10.1815,
          "x": 52,
          "y": 16
        },
        "flag": "🇹🇳",
        "centerCoords": {
          "lat": 33.8869,
          "lng": 9.5375,
          "x": 52,
          "y": 20
        },
        "description": "Terre antique de Carthage aux plages méditerranéennes et oasis du Sud.",
        "cities": [
          {
            "id": "tunis",
            "name": "Tunis",
            "countryId": "tunisia",
            "isCapital": true,
            "coords": {
              "lat": 36.8065,
              "lng": 10.1815,
              "x": 52,
              "y": 16
            },
            "population": "1.0 M",
            "region": "Tunis",
            "description": "Capitale méditerranéenne proche de Carthage et Sidi Bou Saïd."
          },
          {
            "id": "sfax",
            "name": "Sfax",
            "countryId": "tunisia",
            "isCapital": false,
            "coords": {
              "lat": 34.7406,
              "lng": 10.7603,
              "x": 53,
              "y": 22
            },
            "population": "330 k",
            "region": "Sfax",
            "description": "Deuxième ville et grand port d'exportation d'huile d'olive."
          },
          {
            "id": "sousse",
            "name": "Sousse",
            "countryId": "tunisia",
            "isCapital": false,
            "coords": {
              "lat": 35.8256,
              "lng": 10.6369,
              "x": 53,
              "y": 19
            },
            "population": "270 k",
            "region": "Sousse",
            "description": "La Perle du Sahel au riche patrimoine classé par l'UNESCO."
          }
        ]
      },
      {
        "id": "cameroon",
        "name": "Cameroun",
        "continentId": "africa",
        "capital": "Yaoundé",
        "capitalCoords": {
          "lat": 3.848,
          "lng": 11.5021,
          "x": 46,
          "y": 62
        },
        "flag": "🇨🇲",
        "centerCoords": {
          "lat": 7.3697,
          "lng": 12.3547,
          "x": 46,
          "y": 62
        },
        "description": "L'Afrique en miniature, réputé pour sa diversité écologique et culturelle.",
        "cities": [
          {
            "id": "yaounde",
            "name": "Yaoundé",
            "countryId": "cameroon",
            "isCapital": true,
            "coords": {
              "lat": 3.848,
              "lng": 11.5021,
              "x": 46,
              "y": 62
            },
            "population": "2.8 M",
            "region": "Centre",
            "description": "Capitale aux sept collines entourée de forêts tropicales."
          },
          {
            "id": "douala",
            "name": "Douala",
            "countryId": "cameroon",
            "isCapital": false,
            "coords": {
              "lat": 4.0511,
              "lng": 9.7679,
              "x": 44,
              "y": 61
            },
            "population": "3.7 M",
            "region": "Littoral",
            "description": "Principal port et poumon économique du Cameroun sur le Wouri."
          },
          {
            "id": "garoua",
            "name": "Garoua",
            "countryId": "cameroon",
            "isCapital": false,
            "coords": {
              "lat": 9.3,
              "lng": 13.4,
              "x": 48,
              "y": 51
            },
            "population": "600 k",
            "region": "Nord",
            "description": "Grand port fluvial sur la Bénoué au nord."
          }
        ]
      },
      {
        "id": "ethiopia",
        "name": "Éthiopie",
        "continentId": "africa",
        "capital": "Addis-Abeba",
        "capitalCoords": {
          "lat": 9.032,
          "lng": 38.7469,
          "x": 74,
          "y": 50
        },
        "flag": "🇪🇹",
        "centerCoords": {
          "lat": 9.145,
          "lng": 40.4897,
          "x": 74,
          "y": 50
        },
        "description": "Seul pays d'Afrique jamais colonisé, berceau de l'humanité et du café.",
        "cities": [
          {
            "id": "addis_ababa",
            "name": "Addis-Abeba",
            "countryId": "ethiopia",
            "isCapital": true,
            "coords": {
              "lat": 9.032,
              "lng": 38.7469,
              "x": 74,
              "y": 50
            },
            "population": "5.0 M",
            "region": "Addis-Abeba",
            "description": "Capitale diplomatique de l'Union Africaine à 2400m d'altitude."
          },
          {
            "id": "dire_dawa",
            "name": "Dire Dawa",
            "countryId": "ethiopia",
            "isCapital": false,
            "coords": {
              "lat": 9.5931,
              "lng": 41.8661,
              "x": 78,
              "y": 49
            },
            "population": "440 k",
            "region": "Dire Dawa",
            "description": "Important carrefour ferroviaire et commercial de l'est."
          },
          {
            "id": "gondar",
            "name": "Gondar",
            "countryId": "ethiopia",
            "isCapital": false,
            "coords": {
              "lat": 12.6,
              "lng": 37.4667,
              "x": 73,
              "y": 44
            },
            "population": "360 k",
            "region": "Amhara",
            "description": "La Cité des châteaux médiévaux éthiopiens."
          }
        ]
      },
      {
        "id": "tanzania",
        "name": "Tanzanie",
        "continentId": "africa",
        "capital": "Dodoma",
        "capitalCoords": {
          "lat": -6.163,
          "lng": 35.7516,
          "x": 73,
          "y": 68
        },
        "flag": "🇹🇿",
        "centerCoords": {
          "lat": -6.369,
          "lng": 34.8888,
          "x": 73,
          "y": 68
        },
        "description": "Terre du Kilimandjaro, du parc du Serengeti et de l'archipel de Zanzibar.",
        "cities": [
          {
            "id": "dodoma",
            "name": "Dodoma",
            "countryId": "tanzania",
            "isCapital": true,
            "coords": {
              "lat": -6.163,
              "lng": 35.7516,
              "x": 73,
              "y": 68
            },
            "population": "410 k",
            "region": "Dodoma",
            "description": "Capitale législative et politique au centre du pays."
          },
          {
            "id": "dar_es_salaam",
            "name": "Dar es Salam",
            "countryId": "tanzania",
            "isCapital": false,
            "coords": {
              "lat": -6.7924,
              "lng": 39.2083,
              "x": 78,
              "y": 69
            },
            "population": "6.4 M",
            "region": "Dar es Salaam",
            "description": "La Maison de la paix et plus grande métropole côtière."
          },
          {
            "id": "arusha",
            "name": "Arusha",
            "countryId": "tanzania",
            "isCapital": false,
            "coords": {
              "lat": -3.3869,
              "lng": 36.683,
              "x": 74,
              "y": 62
            },
            "population": "420 k",
            "region": "Arusha",
            "description": "Porte d'entrée des safaris du Serengeti et du Kilimandjaro."
          }
        ]
      },
      {
        "id": "madagascar",
        "name": "Madagascar",
        "continentId": "africa",
        "capital": "Antananarivo",
        "capitalCoords": {
          "lat": -18.8792,
          "lng": 47.5079,
          "x": 74,
          "y": 70
        },
        "flag": "🇲🇬",
        "centerCoords": {
          "lat": -18.7669,
          "lng": 46.8691,
          "x": 74,
          "y": 70
        },
        "description": "La Grande Île sanctuaire unique de biodiversité aux lémuriens et allées de baobabs.",
        "cities": [
          {
            "id": "antananarivo",
            "name": "Antananarivo",
            "countryId": "madagascar",
            "isCapital": true,
            "coords": {
              "lat": -18.8792,
              "lng": 47.5079,
              "x": 74,
              "y": 70
            },
            "population": "1.3 M",
            "region": "Analamanga",
            "description": "La Ville des Mille perchée sur les collines avec le palais de la Reine (Rova)."
          },
          {
            "id": "toamasina",
            "name": "Toamasina (Tamatave)",
            "countryId": "madagascar",
            "isCapital": false,
            "coords": {
              "lat": -18.1499,
              "lng": 49.4023,
              "x": 76,
              "y": 69
            },
            "population": "325 k",
            "region": "Atsinanana",
            "description": "Premier port maritime du pays sur l'océan Indien."
          },
          {
            "id": "antsirabe",
            "name": "Antsirabe",
            "countryId": "madagascar",
            "isCapital": false,
            "coords": {
              "lat": -19.8659,
              "lng": 47.0333,
              "x": 74,
              "y": 71
            },
            "population": "250 k",
            "region": "Vakinankaratra",
            "description": "La Ville d'Eau réputée pour ses sources thermales et ses pousse-pousse."
          },
          {
            "id": "mahajanga",
            "name": "Mahajanga (Majunga)",
            "countryId": "madagascar",
            "isCapital": false,
            "coords": {
              "lat": -15.7167,
              "lng": 46.3167,
              "x": 73,
              "y": 66
            },
            "population": "245 k",
            "region": "Boeny",
            "description": "Cité côtière du canal du Mozambique ornée d'un baobab géant tricentenaire."
          }
        ]
      },
      {
        "id": "angola",
        "name": "Angola",
        "continentId": "africa",
        "capital": "Luanda",
        "capitalCoords": {
          "lat": -8.839,
          "lng": 13.2894,
          "x": 50,
          "y": 58
        },
        "flag": "🇦🇴",
        "centerCoords": {
          "lat": -11.2027,
          "lng": 17.8739,
          "x": 53,
          "y": 61
        },
        "description": "Pays lusophone d'Afrique australe aux spectaculaires chutes de Kalandula.",
        "cities": [
          {
            "id": "luanda",
            "name": "Luanda",
            "countryId": "angola",
            "isCapital": true,
            "coords": {
              "lat": -8.839,
              "lng": 13.2894,
              "x": 50,
              "y": 58
            },
            "population": "8.3 M",
            "region": "Luanda",
            "description": "Capitale atlantique avec sa marginale et sa forteresse Saint-Michel."
          },
          {
            "id": "huambo",
            "name": "Huambo",
            "countryId": "angola",
            "isCapital": false,
            "coords": {
              "lat": -12.7761,
              "lng": 15.7392,
              "x": 52,
              "y": 63
            },
            "population": "670 k",
            "region": "Huambo",
            "description": "Deuxième ville située sur le haut plateau central angolais."
          },
          {
            "id": "benguela",
            "name": "Benguela",
            "countryId": "angola",
            "isCapital": false,
            "coords": {
              "lat": -12.5763,
              "lng": 13.4055,
              "x": 50,
              "y": 63
            },
            "population": "550 k",
            "region": "Benguela",
            "description": "Cité côtière historique et point de départ du chemin de fer de Benguela."
          }
        ]
      },
      {
        "id": "mozambique",
        "name": "Mozambique",
        "continentId": "africa",
        "capital": "Maputo",
        "capitalCoords": {
          "lat": -25.9692,
          "lng": 32.5732,
          "x": 64,
          "y": 79
        },
        "flag": "🇲🇿",
        "centerCoords": {
          "lat": -18.6657,
          "lng": 35.5296,
          "x": 66,
          "y": 70
        },
        "description": "Pays côtier d'Afrique orientale aux 2500 km de plages sauvages et archipel de Bazaruto.",
        "cities": [
          {
            "id": "maputo",
            "name": "Maputo",
            "countryId": "mozambique",
            "isCapital": true,
            "coords": {
              "lat": -25.9692,
              "lng": 32.5732,
              "x": 64,
              "y": 79
            },
            "population": "1.1 M",
            "region": "Maputo",
            "description": "Capitale baignée par l'océan Indien avec sa gare conçue par Eiffel."
          },
          {
            "id": "beira",
            "name": "Beira",
            "countryId": "mozambique",
            "isCapital": false,
            "coords": {
              "lat": -19.8436,
              "lng": 34.8389,
              "x": 66,
              "y": 71
            },
            "population": "530 k",
            "region": "Sofala",
            "description": "Grand port marchand à l'embouchure du fleuve Pungwe."
          },
          {
            "id": "nampula",
            "name": "Nampula",
            "countryId": "mozambique",
            "isCapital": false,
            "coords": {
              "lat": -15.1165,
              "lng": 39.2666,
              "x": 69,
              "y": 66
            },
            "population": "740 k",
            "region": "Nampula",
            "description": "Capitale du nord et porte d'accès à l'île de Mozambique classée UNESCO."
          }
        ]
      },
      {
        "id": "uganda",
        "name": "Ouganda",
        "continentId": "africa",
        "capital": "Kampala",
        "capitalCoords": {
          "lat": 0.3476,
          "lng": 32.5825,
          "x": 64,
          "y": 47
        },
        "flag": "🇺🇬",
        "centerCoords": {
          "lat": 1.3733,
          "lng": 32.2903,
          "x": 64,
          "y": 46
        },
        "description": "La Perle de l'Afrique aux sources du Nil et sanctuaires des gorilles de montagne.",
        "cities": [
          {
            "id": "kampala",
            "name": "Kampala",
            "countryId": "uganda",
            "isCapital": true,
            "coords": {
              "lat": 0.3476,
              "lng": 32.5825,
              "x": 64,
              "y": 47
            },
            "population": "1.7 M",
            "region": "Centre",
            "description": "Capitale aux sept collines dominant le grand lac Victoria."
          },
          {
            "id": "entebbe",
            "name": "Entebbe",
            "countryId": "uganda",
            "isCapital": false,
            "coords": {
              "lat": 0.0512,
              "lng": 32.4637,
              "x": 64,
              "y": 48
            },
            "population": "70 k",
            "region": "Centre",
            "description": "Cité présidentielle sur une péninsule du lac Victoria."
          },
          {
            "id": "jinja",
            "name": "Jinja",
            "countryId": "uganda",
            "isCapital": false,
            "coords": {
              "lat": 0.449,
              "lng": 33.2032,
              "x": 64,
              "y": 47
            },
            "population": "300 k",
            "region": "Est",
            "description": "Capitale de l'aventure aux sources historiques du Nil Blanc."
          }
        ]
      },
      {
        "id": "rwanda",
        "name": "Rwanda",
        "continentId": "africa",
        "capital": "Kigali",
        "capitalCoords": {
          "lat": -1.9403,
          "lng": 29.8739,
          "x": 62,
          "y": 50
        },
        "flag": "🇷🇼",
        "centerCoords": {
          "lat": -1.9403,
          "lng": 29.8739,
          "x": 62,
          "y": 50
        },
        "description": "Le Pays des Mille Collines, modèle de propreté et refuge des gorilles des Virunga.",
        "cities": [
          {
            "id": "kigali",
            "name": "Kigali",
            "countryId": "rwanda",
            "isCapital": true,
            "coords": {
              "lat": -1.9403,
              "lng": 29.8739,
              "x": 62,
              "y": 50
            },
            "population": "1.2 M",
            "region": "Kigali",
            "description": "Capitale verte, ordonnée et dynamique au cœur des collines."
          },
          {
            "id": "gisenyi",
            "name": "Gisenyi (Rubavu)",
            "countryId": "rwanda",
            "isCapital": false,
            "coords": {
              "lat": -1.7028,
              "lng": 29.2564,
              "x": 61,
              "y": 50
            },
            "population": "110 k",
            "region": "Ouest",
            "description": "Station balnéaire sur les rives du sublime lac Kivu."
          },
          {
            "id": "butare",
            "name": "Butare (Huye)",
            "countryId": "rwanda",
            "isCapital": false,
            "coords": {
              "lat": -2.5967,
              "lng": 29.7394,
              "x": 62,
              "y": 51
            },
            "population": "90 k",
            "region": "Sud",
            "description": "Capitale intellectuelle abritant le musée ethnographique national."
          }
        ]
      },
      {
        "id": "zimbabwe",
        "name": "Zimbabwe",
        "continentId": "africa",
        "capital": "Harare",
        "capitalCoords": {
          "lat": -17.8252,
          "lng": 31.0335,
          "x": 63,
          "y": 69
        },
        "flag": "🇿🇼",
        "centerCoords": {
          "lat": -19.0154,
          "lng": 29.1549,
          "x": 61,
          "y": 70
        },
        "description": "Terre des spectaculaires chutes Victoria et des ruines du Grand Zimbabwe.",
        "cities": [
          {
            "id": "harare",
            "name": "Harare",
            "countryId": "zimbabwe",
            "isCapital": true,
            "coords": {
              "lat": -17.8252,
              "lng": 31.0335,
              "x": 63,
              "y": 69
            },
            "population": "1.6 M",
            "region": "Harare",
            "description": "La Ville Soleil parée de jacarandas en fleurs au printemps."
          },
          {
            "id": "bulawayo",
            "name": "Bulawayo",
            "countryId": "zimbabwe",
            "isCapital": false,
            "coords": {
              "lat": -20.15,
              "lng": 28.5833,
              "x": 61,
              "y": 72
            },
            "population": "650 k",
            "region": "Bulawayo",
            "description": "Deuxième ville et capitale culturelle Ndebele."
          },
          {
            "id": "victoria_falls",
            "name": "Victoria Falls",
            "countryId": "zimbabwe",
            "isCapital": false,
            "coords": {
              "lat": -17.9333,
              "lng": 25.8333,
              "x": 59,
              "y": 69
            },
            "population": "35 k",
            "region": "Matabeleland Nord",
            "description": "Cité touristique mondialement célèbre face à la fumée qui gronde."
          }
        ]
      },
      {
        "id": "namibia",
        "name": "Namibie",
        "continentId": "africa",
        "capital": "Windhoek",
        "capitalCoords": {
          "lat": -22.5609,
          "lng": 17.0658,
          "x": 52,
          "y": 75
        },
        "flag": "🇳🇦",
        "centerCoords": {
          "lat": -22.9576,
          "lng": 18.4904,
          "x": 53,
          "y": 75
        },
        "description": "Joyau d'Afrique australe aux dunes rouges de Sossusvlei et faune d'Etosha.",
        "cities": [
          {
            "id": "windhoek",
            "name": "Windhoek",
            "countryId": "namibia",
            "isCapital": true,
            "coords": {
              "lat": -22.5609,
              "lng": 17.0658,
              "x": 52,
              "y": 75
            },
            "population": "430 k",
            "region": "Khomas",
            "description": "Capitale lovée entre collines avec son église Christuskirche."
          },
          {
            "id": "walvis_bay",
            "name": "Walvis Bay",
            "countryId": "namibia",
            "isCapital": false,
            "coords": {
              "lat": -22.9575,
              "lng": 14.5053,
              "x": 50,
              "y": 75
            },
            "population": "100 k",
            "region": "Erongo",
            "description": "Grand port maritime et lagune abritant des milliers de flamants roses."
          },
          {
            "id": "swakopmund",
            "name": "Swakopmund",
            "countryId": "namibia",
            "isCapital": false,
            "coords": {
              "lat": -22.6833,
              "lng": 14.5333,
              "x": 50,
              "y": 75
            },
            "population": "45 k",
            "region": "Erongo",
            "description": "Station balnéaire coloniale bordant le désert du Namib."
          }
        ]
      },
      {
        "id": "botswana",
        "name": "Botswana",
        "continentId": "africa",
        "capital": "Gaborone",
        "capitalCoords": {
          "lat": -24.6282,
          "lng": 25.9231,
          "x": 59,
          "y": 77
        },
        "flag": "🇧🇼",
        "centerCoords": {
          "lat": -22.3285,
          "lng": 24.6849,
          "x": 58,
          "y": 74
        },
        "description": "Paradis sauvage abritant le delta de l'Okavango et le désert du Kalahari.",
        "cities": [
          {
            "id": "gaborone",
            "name": "Gaborone",
            "countryId": "botswana",
            "isCapital": true,
            "coords": {
              "lat": -24.6282,
              "lng": 25.9231,
              "x": 59,
              "y": 77
            },
            "population": "250 k",
            "region": "Sud-Est",
            "description": "Capitale moderne et pôle économique du diamant."
          },
          {
            "id": "francistown",
            "name": "Francistown",
            "countryId": "botswana",
            "isCapital": false,
            "coords": {
              "lat": -21.1667,
              "lng": 27.5167,
              "x": 60,
              "y": 73
            },
            "population": "100 k",
            "region": "Nord-Est",
            "description": "Deuxième ville et ancienne cité de la ruée vers l'or."
          },
          {
            "id": "maun",
            "name": "Maun",
            "countryId": "botswana",
            "isCapital": false,
            "coords": {
              "lat": -19.9833,
              "lng": 23.4167,
              "x": 57,
              "y": 72
            },
            "population": "55 k",
            "region": "Nord-Ouest",
            "description": "Capitale touristique et porte d'entrée du delta de l'Okavango."
          }
        ]
      },
      {
        "id": "mauritius",
        "name": "Maurice",
        "continentId": "africa",
        "capital": "Port-Louis",
        "capitalCoords": {
          "lat": -20.1609,
          "lng": 57.5012,
          "x": 82,
          "y": 72
        },
        "flag": "🇲🇺",
        "centerCoords": {
          "lat": -20.3484,
          "lng": 57.5522,
          "x": 82,
          "y": 72
        },
        "description": "Île paradisiaque de l'océan Indien réputée pour ses lagons turquoise et le Morne Brabant.",
        "cities": [
          {
            "id": "port_louis",
            "name": "Port-Louis",
            "countryId": "mauritius",
            "isCapital": true,
            "coords": {
              "lat": -20.1609,
              "lng": 57.5012,
              "x": 82,
              "y": 72
            },
            "population": "150 k",
            "region": "Port-Louis",
            "description": "Capitale cosmopolite avec son front de mer Caudan et l'Aapravasi Ghat."
          },
          {
            "id": "beau_bassin",
            "name": "Beau Bassin-Rose Hill",
            "countryId": "mauritius",
            "isCapital": false,
            "coords": {
              "lat": -20.2333,
              "lng": 57.4667,
              "x": 82,
              "y": 72
            },
            "population": "110 k",
            "region": "Plaines Wilhems",
            "description": "Deuxième agglomération urbaine de l'île."
          },
          {
            "id": "curepipe",
            "name": "Curepipe",
            "countryId": "mauritius",
            "isCapital": false,
            "coords": {
              "lat": -20.3167,
              "lng": 57.5167,
              "x": 82,
              "y": 72
            },
            "population": "85 k",
            "region": "Plaines Wilhems",
            "description": "Cité des hauts plateaux réputée pour le cratère volcanique Trou-aux-Cerfs."
          }
        ]
      },
      {
        "id": "seychelles",
        "name": "Seychelles",
        "continentId": "africa",
        "capital": "Victoria",
        "capitalCoords": {
          "lat": -4.6191,
          "lng": 55.4513,
          "x": 80,
          "y": 54
        },
        "flag": "🇸🇨",
        "centerCoords": {
          "lat": -4.6796,
          "lng": 55.492,
          "x": 80,
          "y": 54
        },
        "description": "Archipel granitique et corallien aux plages idylliques et tortues géantes d'Aldabra.",
        "cities": [
          {
            "id": "victoria_sc",
            "name": "Victoria",
            "countryId": "seychelles",
            "isCapital": true,
            "coords": {
              "lat": -4.6191,
              "lng": 55.4513,
              "x": 80,
              "y": 54
            },
            "population": "26 k",
            "region": "Mahé",
            "description": "Plus petite capitale d'Afrique avec sa tour de l'horloge miniature style Big Ben."
          }
        ]
      },
      {
        "id": "mali",
        "name": "Mali",
        "continentId": "africa",
        "capital": "Bamako",
        "capitalCoords": {
          "lat": 12.6392,
          "lng": -8.0029,
          "x": 36,
          "y": 34
        },
        "flag": "🇲🇱",
        "centerCoords": {
          "lat": 17.5707,
          "lng": -3.9962,
          "x": 39,
          "y": 28
        },
        "description": "Héritier de l'empire Mandingue, carrefour de Tombouctou et de la musique sahélienne.",
        "cities": [
          {
            "id": "bamako",
            "name": "Bamako",
            "countryId": "mali",
            "isCapital": true,
            "coords": {
              "lat": 12.6392,
              "lng": -8.0029,
              "x": 36,
              "y": 34
            },
            "population": "2.8 M",
            "region": "Bamako",
            "description": "Capitale dynamique sur les berges du fleuve Niger."
          },
          {
            "id": "sikasso",
            "name": "Sikasso",
            "countryId": "mali",
            "isCapital": false,
            "coords": {
              "lat": 11.3176,
              "lng": -5.6665,
              "x": 38,
              "y": 35
            },
            "population": "230 k",
            "region": "Sikasso",
            "description": "Capitale du Kénédougou et carrefour agricole du sud."
          },
          {
            "id": "mopti",
            "name": "Mopti",
            "countryId": "mali",
            "isCapital": false,
            "coords": {
              "lat": 14.4958,
              "lng": -4.1866,
              "x": 39,
              "y": 32
            },
            "population": "120 k",
            "region": "Mopti",
            "description": "La Venise du Mali au confluent du Niger et du Bani."
          },
          {
            "id": "timbuktu",
            "name": "Tombouctou",
            "countryId": "mali",
            "isCapital": false,
            "coords": {
              "lat": 16.7666,
              "lng": -3.0026,
              "x": 40,
              "y": 29
            },
            "population": "55 k",
            "region": "Tombouctou",
            "description": "La Cité des 333 saints aux portes du Sahara, classée UNESCO."
          }
        ]
      },
      {
        "id": "burkina_faso",
        "name": "Burkina Faso",
        "continentId": "africa",
        "capital": "Ouagadougou",
        "capitalCoords": {
          "lat": 12.3714,
          "lng": -1.5197,
          "x": 41,
          "y": 34
        },
        "flag": "🇧🇫",
        "centerCoords": {
          "lat": 12.2383,
          "lng": -1.5616,
          "x": 41,
          "y": 34
        },
        "description": "Le Pays des Hommes Intègres, capitale du cinéma africain (FESPACO).",
        "cities": [
          {
            "id": "ouagadougou",
            "name": "Ouagadougou",
            "countryId": "burkina_faso",
            "isCapital": true,
            "coords": {
              "lat": 12.3714,
              "lng": -1.5197,
              "x": 41,
              "y": 34
            },
            "population": "2.5 M",
            "region": "Centre",
            "description": "Capitale culturelle sahélienne accueillant le FESPACO et le SIAO."
          },
          {
            "id": "bobo_dioulasso",
            "name": "Bobo-Dioulasso",
            "countryId": "burkina_faso",
            "isCapital": false,
            "coords": {
              "lat": 11.1772,
              "lng": -4.2979,
              "x": 39,
              "y": 36
            },
            "population": "900 k",
            "region": "Hauts-Bassins",
            "description": "Capitale économique réputée pour sa grande mosquée en banco."
          },
          {
            "id": "koudougou",
            "name": "Koudougou",
            "countryId": "burkina_faso",
            "isCapital": false,
            "coords": {
              "lat": 12.2526,
              "lng": -2.3627,
              "x": 41,
              "y": 34
            },
            "population": "160 k",
            "region": "Centre-Ouest",
            "description": "Troisième ville du pays et carrefour ferroviaire historique."
          }
        ]
      },
      {
        "id": "niger",
        "name": "Niger",
        "continentId": "africa",
        "capital": "Niamey",
        "capitalCoords": {
          "lat": 13.5116,
          "lng": 2.1254,
          "x": 44,
          "y": 33
        },
        "flag": "🇳🇪",
        "centerCoords": {
          "lat": 17.6078,
          "lng": 8.0817,
          "x": 48,
          "y": 28
        },
        "description": "Terre saharo-sahélienne traversée par le fleuve Niger et abritant le massif de l'Aïr.",
        "cities": [
          {
            "id": "niamey",
            "name": "Niamey",
            "countryId": "niger",
            "isCapital": true,
            "coords": {
              "lat": 13.5116,
              "lng": 2.1254,
              "x": 44,
              "y": 33
            },
            "population": "1.3 M",
            "region": "Niamey",
            "description": "Capitale fluviale sur les rives du Niger avec le musée national Boubou-Hama."
          },
          {
            "id": "zinder",
            "name": "Zinder",
            "countryId": "niger",
            "isCapital": false,
            "coords": {
              "lat": 13.8072,
              "lng": 8.9883,
              "x": 49,
              "y": 32
            },
            "population": "320 k",
            "region": "Zinder",
            "description": "Ancienne capitale du sultanat du Damagaram."
          },
          {
            "id": "maradi",
            "name": "Maradi",
            "countryId": "niger",
            "isCapital": false,
            "coords": {
              "lat": 13.5,
              "lng": 7.1,
              "x": 47,
              "y": 33
            },
            "population": "270 k",
            "region": "Maradi",
            "description": "Capitale économique et pôle commercial aux portes du Nigeria."
          },
          {
            "id": "agadez",
            "name": "Agadez",
            "countryId": "niger",
            "isCapital": false,
            "coords": {
              "lat": 16.9738,
              "lng": 7.9908,
              "x": 48,
              "y": 29
            },
            "population": "120 k",
            "region": "Agadez",
            "description": "Porte du désert touarègue et son célèbre minaret en banco de 27 mètres."
          }
        ]
      },
      {
        "id": "chad",
        "name": "Tchad",
        "continentId": "africa",
        "capital": "N'Djamena",
        "capitalCoords": {
          "lat": 12.1348,
          "lng": 15.0557,
          "x": 53,
          "y": 35
        },
        "flag": "🇹🇩",
        "centerCoords": {
          "lat": 15.4542,
          "lng": 18.7322,
          "x": 55,
          "y": 31
        },
        "description": "Cœur de l'Afrique reliant les massifs du Tibesti et de l'Ennedi au lac Tchad.",
        "cities": [
          {
            "id": "ndjamena",
            "name": "N'Djamena",
            "countryId": "chad",
            "isCapital": true,
            "coords": {
              "lat": 12.1348,
              "lng": 15.0557,
              "x": 53,
              "y": 35
            },
            "population": "1.1 M",
            "region": "N'Djamena",
            "description": "Capitale sahélienne au confluent du Chari et du Logone."
          },
          {
            "id": "moundou",
            "name": "Moundou",
            "countryId": "chad",
            "isCapital": false,
            "coords": {
              "lat": 8.6,
              "lng": 16.0833,
              "x": 53,
              "y": 39
            },
            "population": "140 k",
            "region": "Logone Occidental",
            "description": "Capitale économique du sud cotonnier et brassicole."
          },
          {
            "id": "sarh",
            "name": "Sarh",
            "countryId": "chad",
            "isCapital": false,
            "coords": {
              "lat": 9.15,
              "lng": 18.3833,
              "x": 55,
              "y": 38
            },
            "population": "110 k",
            "region": "Moyen-Chari",
            "description": "Troisième ville du Tchad, au cœur d'une région agricole verdoyante."
          }
        ]
      },
      {
        "id": "sudan",
        "name": "Soudan",
        "continentId": "africa",
        "capital": "Khartoum",
        "capitalCoords": {
          "lat": 15.5007,
          "lng": 32.5599,
          "x": 64,
          "y": 31
        },
        "flag": "🇸🇩",
        "centerCoords": {
          "lat": 12.8628,
          "lng": 30.2176,
          "x": 63,
          "y": 34
        },
        "description": "Pays millénaire de Nubie abritant plus de pyramides que l'Égypte (Méroé).",
        "cities": [
          {
            "id": "khartoum",
            "name": "Khartoum",
            "countryId": "sudan",
            "isCapital": true,
            "coords": {
              "lat": 15.5007,
              "lng": 32.5599,
              "x": 64,
              "y": 31
            },
            "population": "5.3 M",
            "region": "Khartoum",
            "description": "Capitale historique au confluent du Nil Blanc et du Nil Bleu."
          },
          {
            "id": "omdurman",
            "name": "Omdourman",
            "countryId": "sudan",
            "isCapital": false,
            "coords": {
              "lat": 15.65,
              "lng": 32.4833,
              "x": 64,
              "y": 30
            },
            "population": "2.4 M",
            "region": "Khartoum",
            "description": "Plus grande ville du Soudan et capitale culturelle historique."
          },
          {
            "id": "port_sudan",
            "name": "Port-Soudan",
            "countryId": "sudan",
            "isCapital": false,
            "coords": {
              "lat": 19.6175,
              "lng": 37.2164,
              "x": 67,
              "y": 26
            },
            "population": "500 k",
            "region": "Mer Rouge",
            "description": "Grand débouché maritime du pays sur la mer Rouge."
          }
        ]
      },
      {
        "id": "south_sudan",
        "name": "Soudan du Sud",
        "continentId": "africa",
        "capital": "Djouba",
        "capitalCoords": {
          "lat": 4.8594,
          "lng": 31.5713,
          "x": 64,
          "y": 42
        },
        "flag": "🇸🇸",
        "centerCoords": {
          "lat": 6.877,
          "lng": 31.307,
          "x": 63,
          "y": 40
        },
        "description": "Plus jeune État souverain de la planète, traversé par les marais du Sudd.",
        "cities": [
          {
            "id": "juba",
            "name": "Djouba",
            "countryId": "south_sudan",
            "isCapital": true,
            "coords": {
              "lat": 4.8594,
              "lng": 31.5713,
              "x": 64,
              "y": 42
            },
            "population": "525 k",
            "region": "Équatoria-Central",
            "description": "Capitale fluviale en plein essor sur le Nil Blanc."
          },
          {
            "id": "wau",
            "name": "Wau",
            "countryId": "south_sudan",
            "isCapital": false,
            "coords": {
              "lat": 7.7,
              "lng": 27.9833,
              "x": 61,
              "y": 39
            },
            "population": "150 k",
            "region": "Bahr el Ghazal Occidental",
            "description": "Deuxième centre urbain et pôle culturel historique."
          }
        ]
      },
      {
        "id": "drc",
        "name": "RD Congo",
        "continentId": "africa",
        "capital": "Kinshasa",
        "capitalCoords": {
          "lat": -4.4419,
          "lng": 15.2663,
          "x": 51,
          "y": 53
        },
        "flag": "🇨🇩",
        "centerCoords": {
          "lat": -4.0383,
          "lng": 21.7587,
          "x": 56,
          "y": 53
        },
        "description": "Géant d'Afrique centrale abritant le deuxième plus grand bassin fluvial et forestier au monde.",
        "cities": [
          {
            "id": "kinshasa",
            "name": "Kinshasa",
            "countryId": "drc",
            "isCapital": true,
            "coords": {
              "lat": -4.4419,
              "lng": 15.2663,
              "x": 51,
              "y": 53
            },
            "population": "17.0 M",
            "region": "Kinshasa",
            "description": "Plus grande mégalopole francophone du monde sur le fleuve Congo."
          },
          {
            "id": "lubumbashi",
            "name": "Lubumbashi",
            "countryId": "drc",
            "isCapital": false,
            "coords": {
              "lat": -11.6876,
              "lng": 27.5026,
              "x": 60,
              "y": 62
            },
            "population": "2.6 M",
            "region": "Haut-Katanga",
            "description": "Capitale économique et minière du cuivre au sud-est."
          },
          {
            "id": "goma",
            "name": "Goma",
            "countryId": "drc",
            "isCapital": false,
            "coords": {
              "lat": -1.6792,
              "lng": 29.2228,
              "x": 61,
              "y": 50
            },
            "population": "1.1 M",
            "region": "Nord-Kivu",
            "description": "Cité des Grands Lacs au pied du volcan Nyiragongo."
          },
          {
            "id": "kisangani",
            "name": "Kisangani",
            "countryId": "drc",
            "isCapital": false,
            "coords": {
              "lat": 0.5153,
              "lng": 25.191,
              "x": 58,
              "y": 47
            },
            "population": "1.2 M",
            "region": "Tshopo",
            "description": "La Ville des Boyoma aux célèbres chutes du fleuve Congo."
          }
        ]
      },
      {
        "id": "republic_congo",
        "name": "Congo (Brazzaville)",
        "continentId": "africa",
        "capital": "Brazzaville",
        "capitalCoords": {
          "lat": -4.2634,
          "lng": 15.2429,
          "x": 51,
          "y": 53
        },
        "flag": "🇨🇬",
        "centerCoords": {
          "lat": -0.228,
          "lng": 15.8277,
          "x": 51,
          "y": 48
        },
        "description": "Pays riverain du fleuve Congo, patrie de la rumba et de la SAPE.",
        "cities": [
          {
            "id": "brazzaville",
            "name": "Brazzaville",
            "countryId": "republic_congo",
            "isCapital": true,
            "coords": {
              "lat": -4.2634,
              "lng": 15.2429,
              "x": 51,
              "y": 53
            },
            "population": "2.1 M",
            "region": "Brazzaville",
            "description": "Capitale verte faisant face à Kinshasa de l'autre côté du fleuve."
          },
          {
            "id": "pointe_noire",
            "name": "Pointe-Noire",
            "countryId": "republic_congo",
            "isCapital": false,
            "coords": {
              "lat": -4.7975,
              "lng": 11.8503,
              "x": 49,
              "y": 53
            },
            "population": "1.2 M",
            "region": "Pointe-Noire",
            "description": "Poumon économique et port pétrolier sur l'océan Atlantique."
          }
        ]
      },
      {
        "id": "gabon",
        "name": "Gabon",
        "continentId": "africa",
        "capital": "Libreville",
        "capitalCoords": {
          "lat": 0.4162,
          "lng": 9.4673,
          "x": 47,
          "y": 47
        },
        "flag": "🇬🇦",
        "centerCoords": {
          "lat": -0.8037,
          "lng": 11.6094,
          "x": 49,
          "y": 49
        },
        "description": "Le Dernier Éden d'Afrique centrale recouvert à 85% d'une forêt tropicale préservée.",
        "cities": [
          {
            "id": "libreville",
            "name": "Libreville",
            "countryId": "gabon",
            "isCapital": true,
            "coords": {
              "lat": 0.4162,
              "lng": 9.4673,
              "x": 47,
              "y": 47
            },
            "population": "800 k",
            "region": "Estuaire",
            "description": "Capitale côtière avec son palais présidentiel et le front de mer."
          },
          {
            "id": "port_gentil",
            "name": "Port-Gentil",
            "countryId": "gabon",
            "isCapital": false,
            "coords": {
              "lat": -0.7193,
              "lng": 8.7815,
              "x": 47,
              "y": 49
            },
            "population": "140 k",
            "region": "Ogooué-Maritime",
            "description": "Capitale pétrolière située sur l'île Mandji."
          },
          {
            "id": "franceville",
            "name": "Franceville",
            "countryId": "gabon",
            "isCapital": false,
            "coords": {
              "lat": -1.6333,
              "lng": 13.5833,
              "x": 50,
              "y": 50
            },
            "population": "110 k",
            "region": "Haut-Ogooué",
            "description": "Pôle minier et universitaire du sud-est du Gabon."
          }
        ]
      },
      {
        "id": "benin",
        "name": "Bénin",
        "continentId": "africa",
        "capital": "Porto-Novo",
        "capitalCoords": {
          "lat": 6.4969,
          "lng": 2.6289,
          "x": 45,
          "y": 40
        },
        "flag": "🇧🇯",
        "centerCoords": {
          "lat": 9.3077,
          "lng": 2.3158,
          "x": 44,
          "y": 37
        },
        "description": "Berceau du culte vaudou et des anciens rois du Dahomey à Abomey.",
        "cities": [
          {
            "id": "porto_novo",
            "name": "Porto-Novo",
            "countryId": "benin",
            "isCapital": true,
            "coords": {
              "lat": 6.4969,
              "lng": 2.6289,
              "x": 45,
              "y": 40
            },
            "population": "265 k",
            "region": "Ouémé",
            "description": "Capitale officielle aux édifices afro-brésiliens et grand marché."
          },
          {
            "id": "cotonou",
            "name": "Cotonou",
            "countryId": "benin",
            "isCapital": false,
            "coords": {
              "lat": 6.3654,
              "lng": 2.4183,
              "x": 45,
              "y": 40
            },
            "population": "1.2 M",
            "region": "Littoral",
            "description": "Capitale économique avec le célèbre marché Dantokpa et la cité lacustre Ganvié."
          },
          {
            "id": "parakou",
            "name": "Parakou",
            "countryId": "benin",
            "isCapital": false,
            "coords": {
              "lat": 9.3372,
              "lng": 2.6303,
              "x": 45,
              "y": 37
            },
            "population": "260 k",
            "region": "Borgou",
            "description": "Grande métropole du nord et carrefour commercial régional."
          },
          {
            "id": "abomey",
            "name": "Abomey",
            "countryId": "benin",
            "isCapital": false,
            "coords": {
              "lat": 7.1833,
              "lng": 1.9833,
              "x": 44,
              "y": 39
            },
            "population": "90 k",
            "region": "Zou",
            "description": "Cité royale historique abritant les palais royaux d'Abomey classés UNESCO."
          }
        ]
      },
      {
        "id": "togo",
        "name": "Togo",
        "continentId": "africa",
        "capital": "Lomé",
        "capitalCoords": {
          "lat": 6.1375,
          "lng": 1.2123,
          "x": 44,
          "y": 40
        },
        "flag": "🇹🇬",
        "centerCoords": {
          "lat": 8.6195,
          "lng": 0.8248,
          "x": 43,
          "y": 38
        },
        "description": "Bande côtière d'Afrique de l'Ouest réputée pour son marché aux fétiches et le Koutammakou.",
        "cities": [
          {
            "id": "lome",
            "name": "Lomé",
            "countryId": "togo",
            "isCapital": true,
            "coords": {
              "lat": 6.1375,
              "lng": 1.2123,
              "x": 44,
              "y": 40
            },
            "population": "1.8 M",
            "region": "Maritime",
            "description": "Capitale côtière et port franc réputée pour son grand marché et ses plages."
          },
          {
            "id": "sokode",
            "name": "Sokodé",
            "countryId": "togo",
            "isCapital": false,
            "coords": {
              "lat": 8.9833,
              "lng": 1.1333,
              "x": 44,
              "y": 37
            },
            "population": "120 k",
            "region": "Centrale",
            "description": "Deuxième ville du pays, au riche artisanat et culture Kotokoli."
          },
          {
            "id": "kara",
            "name": "Kara",
            "countryId": "togo",
            "isCapital": false,
            "coords": {
              "lat": 9.5511,
              "lng": 1.1861,
              "x": 44,
              "y": 37
            },
            "population": "110 k",
            "region": "Kara",
            "description": "Porte d'accès au pays Tamberma et aux châteaux en terre du Koutammakou."
          }
        ]
      },
      {
        "id": "mauritania",
        "name": "Mauritanie",
        "continentId": "africa",
        "capital": "Nouakchott",
        "capitalCoords": {
          "lat": 18.0735,
          "lng": -15.9582,
          "x": 30,
          "y": 28
        },
        "flag": "🇲🇷",
        "centerCoords": {
          "lat": 21.0079,
          "lng": -10.9408,
          "x": 34,
          "y": 25
        },
        "description": "Pays charnière entre le Maghreb et l'Afrique subsaharienne aux cités caravanières de Chinguetti.",
        "cities": [
          {
            "id": "nouakchott",
            "name": "Nouakchott",
            "countryId": "mauritania",
            "isCapital": true,
            "coords": {
              "lat": 18.0735,
              "lng": -15.9582,
              "x": 30,
              "y": 28
            },
            "population": "1.3 M",
            "region": "Nouakchott",
            "description": "Capitale atlantique née des sables avec son port de pêche artisanal animé."
          },
          {
            "id": "nouadhibou",
            "name": "Nouadhibou",
            "countryId": "mauritania",
            "isCapital": false,
            "coords": {
              "lat": 20.931,
              "lng": -17.0347,
              "x": 29,
              "y": 25
            },
            "population": "140 k",
            "region": "Dakhlet Nouadhibou",
            "description": "Capitale économique et portuaire sur la baie du Lévrier."
          }
        ]
      },
      {
        "id": "zambia",
        "name": "Zambie",
        "continentId": "africa",
        "capital": "Lusaka",
        "capitalCoords": {
          "lat": -15.3875,
          "lng": 28.3228,
          "x": 61,
          "y": 66
        },
        "flag": "🇿🇲",
        "centerCoords": {
          "lat": -13.1339,
          "lng": 27.8493,
          "x": 60,
          "y": 64
        },
        "description": "Pays au cœur de l'Afrique australe, berceau du fleuve Zambèze et de parcs d'exception.",
        "cities": [
          {
            "id": "lusaka",
            "name": "Lusaka",
            "countryId": "zambia",
            "isCapital": true,
            "coords": {
              "lat": -15.3875,
              "lng": 28.3228,
              "x": 61,
              "y": 66
            },
            "population": "3.0 M",
            "region": "Lusaka",
            "description": "Capitale commerçante en pleine expansion sur un haut plateau."
          },
          {
            "id": "ndola",
            "name": "Ndola",
            "countryId": "zambia",
            "isCapital": false,
            "coords": {
              "lat": -12.9667,
              "lng": 28.6333,
              "x": 61,
              "y": 64
            },
            "population": "520 k",
            "region": "Copperbelt",
            "description": "Centre industriel et commercial de la ceinture du cuivre."
          },
          {
            "id": "livingstone",
            "name": "Livingstone",
            "countryId": "zambia",
            "isCapital": false,
            "coords": {
              "lat": -17.85,
              "lng": 25.85,
              "x": 59,
              "y": 69
            },
            "population": "140 k",
            "region": "Sud",
            "description": "Cité coloniale historique bordant les chutes Victoria."
          }
        ]
      },
      {
        "id": "malawi",
        "name": "Malawi",
        "continentId": "africa",
        "capital": "Lilongwe",
        "capitalCoords": {
          "lat": -13.9626,
          "lng": 33.7741,
          "x": 65,
          "y": 65
        },
        "flag": "🇲🇼",
        "centerCoords": {
          "lat": -13.2543,
          "lng": 34.3015,
          "x": 65,
          "y": 64
        },
        "description": "Le Cœur Chaud de l'Afrique étiré le long du somptueux lac Malawi aux poissons multicolores.",
        "cities": [
          {
            "id": "lilongwe",
            "name": "Lilongwe",
            "countryId": "malawi",
            "isCapital": true,
            "coords": {
              "lat": -13.9626,
              "lng": 33.7741,
              "x": 65,
              "y": 65
            },
            "population": "1.1 M",
            "region": "Centre",
            "description": "Capitale verdoyante abritant le sanctuaire de faune sauvage."
          },
          {
            "id": "blantyre",
            "name": "Blantyre",
            "countryId": "malawi",
            "isCapital": false,
            "coords": {
              "lat": -15.7861,
              "lng": 35.0058,
              "x": 66,
              "y": 67
            },
            "population": "900 k",
            "region": "Sud",
            "description": "Capitale commerciale et financière la plus ancienne du pays."
          }
        ]
      },
      {
        "id": "somalia",
        "name": "Somalie",
        "continentId": "africa",
        "capital": "Mogadiscio",
        "capitalCoords": {
          "lat": 2.0469,
          "lng": 45.3182,
          "x": 73,
          "y": 46
        },
        "flag": "🇸🇴",
        "centerCoords": {
          "lat": 5.1521,
          "lng": 46.1996,
          "x": 74,
          "y": 43
        },
        "description": "Pays de la Corne de l'Afrique doté de la plus longue façade maritime du continent.",
        "cities": [
          {
            "id": "mogadishu",
            "name": "Mogadiscio",
            "countryId": "somalia",
            "isCapital": true,
            "coords": {
              "lat": 2.0469,
              "lng": 45.3182,
              "x": 73,
              "y": 46
            },
            "population": "2.5 M",
            "region": "Banaadir",
            "description": "La Perle blanche de l'océan Indien et port historique."
          },
          {
            "id": "hargeisa",
            "name": "Hargeisa",
            "countryId": "somalia",
            "isCapital": false,
            "coords": {
              "lat": 9.56,
              "lng": 44.065,
              "x": 72,
              "y": 38
            },
            "population": "1.2 M",
            "region": "Woqooyi Galbeed",
            "description": "Grande métropole du nord réputée pour ses peintures rupestres de Laas Geel."
          },
          {
            "id": "bosaso",
            "name": "Bosaso",
            "countryId": "somalia",
            "isCapital": false,
            "coords": {
              "lat": 11.2842,
              "lng": 49.1816,
              "x": 76,
              "y": 37
            },
            "population": "700 k",
            "region": "Bari",
            "description": "Port commercial stratégique sur le golfe d'Aden."
          }
        ]
      },
      {
        "id": "djibouti",
        "name": "Djibouti",
        "continentId": "africa",
        "capital": "Djibouti",
        "capitalCoords": {
          "lat": 11.5721,
          "lng": 43.1456,
          "x": 72,
          "y": 36
        },
        "flag": "🇩🇯",
        "centerCoords": {
          "lat": 11.8251,
          "lng": 42.5903,
          "x": 71,
          "y": 36
        },
        "description": "Carrefour maritime stratégique sur le détroit de Bab-el-Mandeb et lac Assal le plus bas d'Afrique.",
        "cities": [
          {
            "id": "djibouti_city",
            "name": "Djibouti",
            "countryId": "djibouti",
            "isCapital": true,
            "coords": {
              "lat": 11.5721,
              "lng": 43.1456,
              "x": 72,
              "y": 36
            },
            "population": "600 k",
            "region": "Djibouti",
            "description": "Capitale portuaire cosmopolite sur le golfe de Tadjourah."
          },
          {
            "id": "ali_sabieh",
            "name": "Ali Sabieh",
            "countryId": "djibouti",
            "isCapital": false,
            "coords": {
              "lat": 11.1558,
              "lng": 42.7125,
              "x": 71,
              "y": 37
            },
            "population": "70 k",
            "region": "Ali Sabieh",
            "description": "Deuxième ville entourée de collines de granite."
          }
        ]
      },
      {
        "id": "eritrea",
        "name": "Érythrée",
        "continentId": "africa",
        "capital": "Asmara",
        "capitalCoords": {
          "lat": 15.3229,
          "lng": 38.9251,
          "x": 68,
          "y": 32
        },
        "flag": "🇪🇷",
        "centerCoords": {
          "lat": 15.1794,
          "lng": 39.7823,
          "x": 69,
          "y": 32
        },
        "description": "Pays de la mer Rouge dont la capitale Asmara est un chef-d'œuvre moderniste classé UNESCO.",
        "cities": [
          {
            "id": "asmara",
            "name": "Asmara",
            "countryId": "eritrea",
            "isCapital": true,
            "coords": {
              "lat": 15.3229,
              "lng": 38.9251,
              "x": 68,
              "y": 32
            },
            "population": "960 k",
            "region": "Maekel",
            "description": "Capitale perchée à 2300 m d'altitude ornée d'architecture art déco italienne."
          },
          {
            "id": "massawa",
            "name": "Massaoua",
            "countryId": "eritrea",
            "isCapital": false,
            "coords": {
              "lat": 15.6097,
              "lng": 39.45,
              "x": 69,
              "y": 31
            },
            "population": "53 k",
            "region": "Semenawi Keyih Bahri",
            "description": "Port historique ottoman et corallien sur la mer Rouge."
          }
        ]
      },
      {
        "id": "libya",
        "name": "Libye",
        "continentId": "africa",
        "capital": "Tripoli",
        "capitalCoords": {
          "lat": 32.8872,
          "lng": 13.1913,
          "x": 50,
          "y": 13
        },
        "flag": "🇱🇾",
        "centerCoords": {
          "lat": 26.3351,
          "lng": 17.2283,
          "x": 53,
          "y": 20
        },
        "description": "Vaste pays méditerranéen et saharien abritant les splendides ruines antiques de Leptis Magna.",
        "cities": [
          {
            "id": "tripoli_ly",
            "name": "Tripoli",
            "countryId": "libya",
            "isCapital": true,
            "coords": {
              "lat": 32.8872,
              "lng": 13.1913,
              "x": 50,
              "y": 13
            },
            "population": "1.2 M",
            "region": "Tripoli",
            "description": "La Mariée de la Méditerranée avec son château rouge As-Saraya al-Hamra."
          },
          {
            "id": "benghazi",
            "name": "Benghazi",
            "countryId": "libya",
            "isCapital": false,
            "coords": {
              "lat": 32.1167,
              "lng": 20.0667,
              "x": 56,
              "y": 14
            },
            "population": "670 k",
            "region": "Cyrénaïque",
            "description": "Deuxième ville et port historique de Cyrénaïque."
          },
          {
            "id": "misrata",
            "name": "Misrata",
            "countryId": "libya",
            "isCapital": false,
            "coords": {
              "lat": 32.3754,
              "lng": 15.0925,
              "x": 52,
              "y": 13
            },
            "population": "550 k",
            "region": "Misrata",
            "description": "Pôle commercial et maritime majeur au centre de la côte."
          }
        ]
      },
      {
        "id": "cabo_verde",
        "name": "Cap-Vert",
        "continentId": "africa",
        "capital": "Praia",
        "capitalCoords": {
          "lat": 14.933,
          "lng": -23.5133,
          "x": 25,
          "y": 31
        },
        "flag": "🇨🇻",
        "centerCoords": {
          "lat": 16.0022,
          "lng": -24.0132,
          "x": 24,
          "y": 30
        },
        "description": "Archipel atlantique berceau de Cesária Évora, de la morna et de paysages volcaniques lunaires.",
        "cities": [
          {
            "id": "praia",
            "name": "Praia",
            "countryId": "cabo_verde",
            "isCapital": true,
            "coords": {
              "lat": 14.933,
              "lng": -23.5133,
              "x": 25,
              "y": 31
            },
            "population": "160 k",
            "region": "Santiago",
            "description": "Capitale sur le plateau rocheux de l'île de Santiago."
          },
          {
            "id": "mindelo",
            "name": "Mindelo",
            "countryId": "cabo_verde",
            "isCapital": false,
            "coords": {
              "lat": 16.8833,
              "lng": -24.9833,
              "x": 24,
              "y": 29
            },
            "population": "75 k",
            "region": "São Vicente",
            "description": "Capitale culturelle et musicale autour de sa baie protégée."
          }
        ]
      },
      {
        "id": "sao_tome",
        "name": "Sao Tomé-et-Principe",
        "continentId": "africa",
        "capital": "São Tomé",
        "capitalCoords": {
          "lat": 0.3365,
          "lng": 6.7273,
          "x": 45,
          "y": 47
        },
        "flag": "🇸🇹",
        "centerCoords": {
          "lat": 0.1864,
          "lng": 6.6131,
          "x": 45,
          "y": 47
        },
        "description": "Les Îles Chocolat du golfe de Guinée réputées pour leurs plantations de cacao et le pic Cão Grande.",
        "cities": [
          {
            "id": "sao_tome_city",
            "name": "São Tomé",
            "countryId": "sao_tome",
            "isCapital": true,
            "coords": {
              "lat": 0.3365,
              "lng": 6.7273,
              "x": 45,
              "y": 47
            },
            "population": "70 k",
            "region": "São Tomé",
            "description": "Capitale coloniale portugaise entourée d'eaux émeraude et de plantations."
          }
        ]
      },
      {
        "id": "equatorial_guinea",
        "name": "Guinée équatoriale",
        "continentId": "africa",
        "capital": "Malabo",
        "capitalCoords": {
          "lat": 3.7504,
          "lng": 8.7371,
          "x": 46,
          "y": 44
        },
        "flag": "🇬🇶",
        "centerCoords": {
          "lat": 1.6508,
          "lng": 10.2679,
          "x": 48,
          "y": 46
        },
        "description": "Seul pays hispanophone d'Afrique subsaharienne avec son île de Bioko et son littoral de Río Muni.",
        "cities": [
          {
            "id": "malabo",
            "name": "Malabo",
            "countryId": "equatorial_guinea",
            "isCapital": true,
            "coords": {
              "lat": 3.7504,
              "lng": 8.7371,
              "x": 46,
              "y": 44
            },
            "population": "300 k",
            "region": "Bioko Nord",
            "description": "Capitale insulaire au pied du pic basilé avec sa cathédrale Santa Isabel."
          },
          {
            "id": "bata",
            "name": "Bata",
            "countryId": "equatorial_guinea",
            "isCapital": false,
            "coords": {
              "lat": 1.8639,
              "lng": 9.7658,
              "x": 47,
              "y": 46
            },
            "population": "250 k",
            "region": "Litoral",
            "description": "Plus grande ville et grand port continental."
          }
        ]
      },
      {
        "id": "car",
        "name": "Centrafrique",
        "continentId": "africa",
        "capital": "Bangui",
        "capitalCoords": {
          "lat": 4.3947,
          "lng": 18.5582,
          "x": 55,
          "y": 43
        },
        "flag": "🇨🇫",
        "centerCoords": {
          "lat": 6.6111,
          "lng": 20.9394,
          "x": 56,
          "y": 41
        },
        "description": "Pays au cœur du continent abritant le parc national Dzanga-Sangha et ses éléphants de forêt.",
        "cities": [
          {
            "id": "bangui",
            "name": "Bangui",
            "countryId": "car",
            "isCapital": true,
            "coords": {
              "lat": 4.3947,
              "lng": 18.5582,
              "x": 55,
              "y": 43
            },
            "population": "890 k",
            "region": "Bangui",
            "description": "Bangui la Coquette sur les rives de la rivière Oubangui."
          },
          {
            "id": "bimbo",
            "name": "Bimbo",
            "countryId": "car",
            "isCapital": false,
            "coords": {
              "lat": 4.2567,
              "lng": 18.5161,
              "x": 55,
              "y": 43
            },
            "population": "270 k",
            "region": "Ombella-M'Poko",
            "description": "Deuxième ville la plus peuplée en banlieue de Bangui."
          }
        ]
      },
      {
        "id": "burundi",
        "name": "Burundi",
        "continentId": "africa",
        "capital": "Gitega",
        "capitalCoords": {
          "lat": -3.4272,
          "lng": 29.9246,
          "x": 62,
          "y": 52
        },
        "flag": "🇧🇮",
        "centerCoords": {
          "lat": -3.3731,
          "lng": 29.9189,
          "x": 62,
          "y": 52
        },
        "description": "Le Cœur de l'Afrique au bord du lac Tanganyika, renommé pour ses tambours sacrés royaux.",
        "cities": [
          {
            "id": "gitega",
            "name": "Gitega",
            "countryId": "burundi",
            "isCapital": true,
            "coords": {
              "lat": -3.4272,
              "lng": 29.9246,
              "x": 62,
              "y": 52
            },
            "population": "135 k",
            "region": "Gitega",
            "description": "Capitale politique abritant le sanctuaire des tambours de Gishora."
          },
          {
            "id": "bujumbura",
            "name": "Bujumbura",
            "countryId": "burundi",
            "isCapital": false,
            "coords": {
              "lat": -3.3822,
              "lng": 29.3644,
              "x": 61,
              "y": 52
            },
            "population": "1.1 M",
            "region": "Bujumbura",
            "description": "Poumon économique et port principal sur les rives du lac Tanganyika."
          }
        ]
      },
      {
        "id": "lesotho",
        "name": "Lesotho",
        "continentId": "africa",
        "capital": "Maseru",
        "capitalCoords": {
          "lat": -29.3151,
          "lng": 27.4869,
          "x": 60,
          "y": 83
        },
        "flag": "🇱🇸",
        "centerCoords": {
          "lat": -29.6099,
          "lng": 28.2336,
          "x": 61,
          "y": 83
        },
        "description": "Le Royaume dans le Ciel, entièrement situé à plus de 1400 m d'altitude enclavé en Afrique du Sud.",
        "cities": [
          {
            "id": "maseru",
            "name": "Maseru",
            "countryId": "lesotho",
            "isCapital": true,
            "coords": {
              "lat": -29.3151,
              "lng": 27.4869,
              "x": 60,
              "y": 83
            },
            "population": "330 k",
            "region": "Maseru",
            "description": "Capitale montagnarde sur la rivière Caledon."
          },
          {
            "id": "teyateyaneng",
            "name": "Teyateyaneng",
            "countryId": "lesotho",
            "isCapital": false,
            "coords": {
              "lat": -29.15,
              "lng": 27.7333,
              "x": 60,
              "y": 83
            },
            "population": "75 k",
            "region": "Berea",
            "description": "Capitale de l'artisanat et du tissage de tapisseries en laine de mohair."
          }
        ]
      },
      {
        "id": "eswatini",
        "name": "Eswatini (Swaziland)",
        "continentId": "africa",
        "capital": "Mbabane",
        "capitalCoords": {
          "lat": -26.3055,
          "lng": 31.1367,
          "x": 63,
          "y": 79
        },
        "flag": "🇸🇿",
        "centerCoords": {
          "lat": -26.5225,
          "lng": 31.4659,
          "x": 63,
          "y": 80
        },
        "description": "Royaume enclavé aux traditions royales vivaces comme la danse de l'Umhlanga.",
        "cities": [
          {
            "id": "mbabane",
            "name": "Mbabane",
            "countryId": "eswatini",
            "isCapital": true,
            "coords": {
              "lat": -26.3055,
              "lng": 31.1367,
              "x": 63,
              "y": 79
            },
            "population": "95 k",
            "region": "Hhohho",
            "description": "Capitale administrative lovée dans les montagnes de l'Ezulwini."
          },
          {
            "id": "manzini",
            "name": "Manzini",
            "countryId": "eswatini",
            "isCapital": false,
            "coords": {
              "lat": -26.4988,
              "lng": 31.3789,
              "x": 63,
              "y": 80
            },
            "population": "110 k",
            "region": "Manzini",
            "description": "Moteur économique et commercial du royaume."
          }
        ]
      },
      {
        "id": "gambia",
        "name": "Gambie",
        "continentId": "africa",
        "capital": "Banjul",
        "capitalCoords": {
          "lat": 13.4549,
          "lng": -16.579,
          "x": 29,
          "y": 33
        },
        "flag": "🇬🇲",
        "centerCoords": {
          "lat": 13.4432,
          "lng": -15.3101,
          "x": 30,
          "y": 33
        },
        "description": "La Côte Souriante d'Afrique lovée tout au long du fleuve Gambie.",
        "cities": [
          {
            "id": "banjul",
            "name": "Banjul",
            "countryId": "gambia",
            "isCapital": true,
            "coords": {
              "lat": 13.4549,
              "lng": -16.579,
              "x": 29,
              "y": 33
            },
            "population": "32 k",
            "region": "Banjul",
            "description": "Capitale insulaire à l'embouchure du fleuve avec l'Arche 22."
          },
          {
            "id": "serekunda",
            "name": "Serekunda",
            "countryId": "gambia",
            "isCapital": false,
            "coords": {
              "lat": 13.4383,
              "lng": -16.6781,
              "x": 29,
              "y": 33
            },
            "population": "390 k",
            "region": "Kanifing",
            "description": "Plus grande ville commerçante du pays."
          }
        ]
      },
      {
        "id": "guinea",
        "name": "Guinée (Conakry)",
        "continentId": "africa",
        "capital": "Conakry",
        "capitalCoords": {
          "lat": 9.5379,
          "lng": -13.6773,
          "x": 32,
          "y": 37
        },
        "flag": "🇬🇳",
        "centerCoords": {
          "lat": 9.9456,
          "lng": -9.6966,
          "x": 35,
          "y": 37
        },
        "description": "Le Château d'Eau de l'Afrique de l'Ouest où prennent source les fleuves Niger et Sénégal.",
        "cities": [
          {
            "id": "conakry",
            "name": "Conakry",
            "countryId": "guinea",
            "isCapital": true,
            "coords": {
              "lat": 9.5379,
              "lng": -13.6773,
              "x": 32,
              "y": 37
            },
            "population": "2.0 M",
            "region": "Conakry",
            "description": "Capitale maritime sur la presqu'île de Kaloum et les îles de Loos."
          },
          {
            "id": "nzerekore",
            "name": "Nzérékoré",
            "countryId": "guinea",
            "isCapital": false,
            "coords": {
              "lat": 7.7562,
              "lng": -8.8179,
              "x": 35,
              "y": 39
            },
            "population": "280 k",
            "region": "Guinée Forestière",
            "description": "Capitale de la Guinée forestière au pied des monts Nimba."
          },
          {
            "id": "kankan",
            "name": "Kankan",
            "countryId": "guinea",
            "isCapital": false,
            "coords": {
              "lat": 10.3854,
              "lng": -9.3057,
              "x": 35,
              "y": 36
            },
            "population": "200 k",
            "region": "Haute-Guinée",
            "description": "Haut lieu de l'histoire mandingue sur les bords du Milo."
          }
        ]
      },
      {
        "id": "guinea_bissau",
        "name": "Guinée-Bissau",
        "continentId": "africa",
        "capital": "Bissau",
        "capitalCoords": {
          "lat": 11.8632,
          "lng": -15.5984,
          "x": 30,
          "y": 35
        },
        "flag": "🇬🇼",
        "centerCoords": {
          "lat": 11.8037,
          "lng": -15.1804,
          "x": 30,
          "y": 35
        },
        "description": "Nation côtière lusophone réputée pour l'archipel préservé des Bijagós classé UNESCO.",
        "cities": [
          {
            "id": "bissau",
            "name": "Bissau",
            "countryId": "guinea_bissau",
            "isCapital": true,
            "coords": {
              "lat": 11.8632,
              "lng": -15.5984,
              "x": 30,
              "y": 35
            },
            "population": "490 k",
            "region": "Bissau",
            "description": "Capitale coloniale avec sa forteresse d'Amura."
          },
          {
            "id": "bafata",
            "name": "Bafatá",
            "countryId": "guinea_bissau",
            "isCapital": false,
            "coords": {
              "lat": 12.1667,
              "lng": -14.6667,
              "x": 31,
              "y": 35
            },
            "population": "30 k",
            "region": "Bafatá",
            "description": "Deuxième ville et berceau d'Amílcar Cabral."
          }
        ]
      },
      {
        "id": "sierra_leone",
        "name": "Sierra Leone",
        "continentId": "africa",
        "capital": "Freetown",
        "capitalCoords": {
          "lat": 8.4844,
          "lng": -13.2344,
          "x": 32,
          "y": 38
        },
        "flag": "🇸🇱",
        "centerCoords": {
          "lat": 8.4606,
          "lng": -11.7799,
          "x": 33,
          "y": 38
        },
        "description": "Pays des collines du lion et des superbes plages immaculées de la péninsule de Freetown.",
        "cities": [
          {
            "id": "freetown",
            "name": "Freetown",
            "countryId": "sierra_leone",
            "isCapital": true,
            "coords": {
              "lat": 8.4844,
              "lng": -13.2344,
              "x": 32,
              "y": 38
            },
            "population": "1.2 M",
            "region": "Ouest",
            "description": "Capitale portuaire avec son célèbre Cotton Tree tricentenaire."
          },
          {
            "id": "bo",
            "name": "Bo",
            "countryId": "sierra_leone",
            "isCapital": false,
            "coords": {
              "lat": 7.9647,
              "lng": -11.7383,
              "x": 33,
              "y": 39
            },
            "population": "230 k",
            "region": "Sud",
            "description": "Deuxième ville et pôle éducatif et diamantaire du pays."
          }
        ]
      },
      {
        "id": "liberia",
        "name": "Liberia",
        "continentId": "africa",
        "capital": "Monrovia",
        "capitalCoords": {
          "lat": 6.3156,
          "lng": -10.8074,
          "x": 34,
          "y": 40
        },
        "flag": "🇱🇷",
        "centerCoords": {
          "lat": 6.4281,
          "lng": -9.4295,
          "x": 35,
          "y": 40
        },
        "description": "Plus ancienne république moderne d'Afrique, fondée par des affranchis afro-américains.",
        "cities": [
          {
            "id": "monrovia",
            "name": "Monrovia",
            "countryId": "liberia",
            "isCapital": true,
            "coords": {
              "lat": 6.3156,
              "lng": -10.8074,
              "x": 34,
              "y": 40
            },
            "population": "1.0 M",
            "region": "Montserrado",
            "description": "Capitale atlantique nommée en hommage au président James Monroe."
          },
          {
            "id": "gbarnga",
            "name": "Gbarnga",
            "countryId": "liberia",
            "isCapital": false,
            "coords": {
              "lat": 7,
              "lng": -9.4722,
              "x": 35,
              "y": 40
            },
            "population": "56 k",
            "region": "Bong",
            "description": "Deuxième ville et pôle d'enseignement supérieur de l'intérieur."
          }
        ]
      },
      {
        "id": "comoros",
        "name": "Comores",
        "continentId": "africa",
        "capital": "Moroni",
        "capitalCoords": {
          "lat": -11.7022,
          "lng": 43.2551,
          "x": 72,
          "y": 62
        },
        "flag": "🇰🇲",
        "centerCoords": {
          "lat": -11.6455,
          "lng": 43.3333,
          "x": 72,
          "y": 62
        },
        "description": "Les Îles de la Lune aux parfums d'ylang-ylang et de vanille dominées par le mont Karthala.",
        "cities": [
          {
            "id": "moroni",
            "name": "Moroni",
            "countryId": "comoros",
            "isCapital": true,
            "coords": {
              "lat": -11.7022,
              "lng": 43.2551,
              "x": 72,
              "y": 62
            },
            "population": "110 k",
            "region": "Grande Comore",
            "description": "Capitale côtière avec sa mosquée de Badjanani au pied du volcan Karthala."
          },
          {
            "id": "mutsamudu",
            "name": "Mutsamudu",
            "countryId": "comoros",
            "isCapital": false,
            "coords": {
              "lat": -12.1667,
              "lng": 44.4,
              "x": 73,
              "y": 63
            },
            "population": "30 k",
            "region": "Anjouan",
            "description": "Cité médiévale et port historique de l'île d'Anjouan."
          }
        ]
      },
      {
        "id": "reunion",
        "name": "La Réunion",
        "continentId": "africa",
        "capital": "Saint-Denis",
        "capitalCoords": {
          "lat": -20.8821,
          "lng": 55.4507,
          "x": 81,
          "y": 72
        },
        "flag": "🇷🇪",
        "centerCoords": {
          "lat": -21.1151,
          "lng": 55.5364,
          "x": 81,
          "y": 73
        },
        "description": "Île volcanique de l'océan Indien aux cirques vertigineux et au piton de la Fournaise actif.",
        "cities": [
          {
            "id": "saint_denis_re",
            "name": "Saint-Denis",
            "countryId": "reunion",
            "isCapital": true,
            "coords": {
              "lat": -20.8821,
              "lng": 55.4507,
              "x": 81,
              "y": 72
            },
            "population": "150 k",
            "region": "La Réunion",
            "description": "Chef-lieu avec le Barachois et ses cases créoles de la rue de Paris."
          },
          {
            "id": "saint_pierre_re",
            "name": "Saint-Pierre",
            "countryId": "reunion",
            "isCapital": false,
            "coords": {
              "lat": -21.3393,
              "lng": 55.4781,
              "x": 81,
              "y": 73
            },
            "population": "85 k",
            "region": "La Réunion",
            "description": "Capitale du Sud sauvage et porte d'accès au volcan."
          },
          {
            "id": "saint_paul_re",
            "name": "Saint-Paul",
            "countryId": "reunion",
            "isCapital": false,
            "coords": {
              "lat": -21.0097,
              "lng": 55.2697,
              "x": 80,
              "y": 72
            },
            "population": "105 k",
            "region": "La Réunion",
            "description": "Berceau du peuplement de l'île réputé pour son marché forain."
          }
        ]
      },
      {
        "id": "mayotte",
        "name": "Mayotte",
        "continentId": "africa",
        "capital": "Mamoudzou",
        "capitalCoords": {
          "lat": -12.7806,
          "lng": 45.2278,
          "x": 73,
          "y": 64
        },
        "flag": "🇾🇹",
        "centerCoords": {
          "lat": -12.8275,
          "lng": 45.1662,
          "x": 73,
          "y": 64
        },
        "description": "L'Île aux Parfums au double lagon corallien exceptionnel dans le canal du Mozambique.",
        "cities": [
          {
            "id": "mamoudzou",
            "name": "Mamoudzou",
            "countryId": "mayotte",
            "isCapital": true,
            "coords": {
              "lat": -12.7806,
              "lng": 45.2278,
              "x": 73,
              "y": 64
            },
            "population": "71 k",
            "region": "Grande-Terre",
            "description": "Chef-lieu économique et portuaire de Mayotte."
          },
          {
            "id": "dzaoudzi",
            "name": "Dzaoudzi",
            "countryId": "mayotte",
            "isCapital": false,
            "coords": {
              "lat": -12.7889,
              "lng": 45.2536,
              "x": 73,
              "y": 64
            },
            "population": "17 k",
            "region": "Petite-Terre",
            "description": "Ancien chef-lieu historique sur le rocher de Petite-Terre."
          }
        ]
      },
      {
        "id": "western_sahara",
        "name": "Sahara occidental",
        "continentId": "africa",
        "capital": "Laâyoune",
        "capitalCoords": {
          "lat": 27.1536,
          "lng": -13.2033,
          "x": 33,
          "y": 19
        },
        "flag": "🇪🇭",
        "centerCoords": {
          "lat": 24.2155,
          "lng": -12.8858,
          "x": 33,
          "y": 22
        },
        "description": "Territoire désertique atlantique aux vastes étendues de sable et lagunes marines de Dakhla.",
        "cities": [
          {
            "id": "laayoune",
            "name": "Laâyoune",
            "countryId": "western_sahara",
            "isCapital": true,
            "coords": {
              "lat": 27.1536,
              "lng": -13.2033,
              "x": 33,
              "y": 19
            },
            "population": "220 k",
            "region": "Laâyoune-Sakia El Hamra",
            "description": "Plus grande ville du territoire sur l'oued Sakia El Hamra."
          },
          {
            "id": "dakhla",
            "name": "Dakhla",
            "countryId": "western_sahara",
            "isCapital": false,
            "coords": {
              "lat": 23.7136,
              "lng": -15.9389,
              "x": 30,
              "y": 23
            },
            "population": "105 k",
            "region": "Dakhla-Oued Ed-Dahab",
            "description": "Perle de la presqu'île du Río de Oro, haut lieu mondial de kitesurf."
          }
        ]
      }
    ]
  },
  {
    "id": "oceania",
    "name": "Océanie",
    "code": "OC",
    "centerCoords": {
      "lat": -25,
      "lng": 135,
      "x": 84,
      "y": 70
    },
    "countries": [
      {
        "id": "australia",
        "name": "Australie",
        "continentId": "oceania",
        "capital": "Canberra",
        "capitalCoords": {
          "lat": -35.2809,
          "lng": 149.13,
          "x": 72,
          "y": 74
        },
        "flag": "🇦🇺",
        "centerCoords": {
          "lat": -25.2744,
          "lng": 133.7751,
          "x": 38,
          "y": 31
        },
        "description": "Pays-continent unique abritant la Grande Barrière de corail.",
        "cities": [
          {
            "id": "canberra",
            "name": "Canberra",
            "countryId": "australia",
            "isCapital": true,
            "coords": {
              "lat": -35.2809,
              "lng": 149.13,
              "x": 72,
              "y": 74
            },
            "population": "450 k",
            "region": "ACT",
            "description": "Capitale fédérale australienne."
          },
          {
            "id": "sydney",
            "name": "Sydney",
            "countryId": "australia",
            "isCapital": false,
            "coords": {
              "lat": -33.8688,
              "lng": 151.2093,
              "x": 74,
              "y": 68
            },
            "population": "5.3 M",
            "region": "NSW",
            "description": "Grande métropole avec son Opéra iconique."
          },
          {
            "id": "melbourne",
            "name": "Melbourne",
            "countryId": "australia",
            "isCapital": false,
            "coords": {
              "lat": -37.8136,
              "lng": 144.9631,
              "x": 64,
              "y": 78
            },
            "population": "5.0 M",
            "region": "Victoria",
            "description": "Capitale culturelle et sportive."
          },
          {
            "id": "brisbane",
            "name": "Brisbane",
            "countryId": "australia",
            "isCapital": false,
            "coords": {
              "lat": -27.4698,
              "lng": 153.0251,
              "x": 78,
              "y": 52
            },
            "population": "2.5 M",
            "region": "Queensland",
            "description": "Cité fluviale subtropicale."
          },
          {
            "id": "perth",
            "name": "Perth",
            "countryId": "australia",
            "isCapital": false,
            "coords": {
              "lat": -31.9505,
              "lng": 115.8605,
              "x": 18,
              "y": 68
            },
            "population": "2.1 M",
            "region": "WA",
            "description": "Métropole face à l'océan Indien."
          }
        ]
      },
      {
        "id": "new_zealand",
        "name": "Nouvelle-Zélande",
        "continentId": "oceania",
        "capital": "Wellington",
        "capitalCoords": {
          "lat": -41.2865,
          "lng": 174.7762,
          "x": 88,
          "y": 82
        },
        "flag": "🇳🇿",
        "centerCoords": {
          "lat": -40.9006,
          "lng": 174.886,
          "x": 88,
          "y": 82
        },
        "description": "Terre d'Aotearoa réputée pour ses fjords et volcans.",
        "cities": [
          {
            "id": "wellington",
            "name": "Wellington",
            "countryId": "new_zealand",
            "isCapital": true,
            "coords": {
              "lat": -41.2865,
              "lng": 174.7762,
              "x": 88,
              "y": 82
            },
            "population": "215 k",
            "region": "Wellington",
            "description": "Capitale la plus australe du monde."
          },
          {
            "id": "auckland",
            "name": "Auckland",
            "countryId": "new_zealand",
            "isCapital": false,
            "coords": {
              "lat": -36.8485,
              "lng": 174.7633,
              "x": 86,
              "y": 74
            },
            "population": "1.6 M",
            "region": "Auckland",
            "description": "La Cité des voiles."
          },
          {
            "id": "christchurch",
            "name": "Christchurch",
            "countryId": "new_zealand",
            "isCapital": false,
            "coords": {
              "lat": -43.5321,
              "lng": 172.6362,
              "x": 87,
              "y": 86
            },
            "population": "380 k",
            "region": "Canterbury",
            "description": "Grande ville de l'Île du Sud."
          }
        ]
      },
      {
        "id": "fiji",
        "name": "Fidji",
        "continentId": "oceania",
        "capital": "Suva",
        "capitalCoords": {
          "lat": -18.1416,
          "lng": 178.4419,
          "x": 92,
          "y": 55
        },
        "flag": "🇫🇯",
        "centerCoords": {
          "lat": -17.7134,
          "lng": 178.065,
          "x": 92,
          "y": 55
        },
        "description": "Archipel mélanésien de 300 îles aux récifs coralliens et lagons turquoise.",
        "cities": [
          {
            "id": "suva",
            "name": "Suva",
            "countryId": "fiji",
            "isCapital": true,
            "coords": {
              "lat": -18.1416,
              "lng": 178.4419,
              "x": 92,
              "y": 55
            },
            "population": "90 k",
            "region": "Viti Levu",
            "description": "Capitale et port animé du Pacifique Sud."
          },
          {
            "id": "nadi",
            "name": "Nadi",
            "countryId": "fiji",
            "isCapital": false,
            "coords": {
              "lat": -17.8,
              "lng": 177.4167,
              "x": 91,
              "y": 54
            },
            "population": "45 k",
            "region": "Viti Levu",
            "description": "Principal hub aéroportuaire et touristique de l'archipel."
          },
          {
            "id": "lautoka",
            "name": "Lautoka",
            "countryId": "fiji",
            "isCapital": false,
            "coords": {
              "lat": -17.6167,
              "lng": 177.45,
              "x": 91,
              "y": 53
            },
            "population": "55 k",
            "region": "Viti Levu",
            "description": "La Cité du sucre et deuxième ville des Fidji."
          }
        ]
      },
      {
        "id": "papua_new_guinea",
        "name": "Papouasie-Nouvelle-Guinée",
        "continentId": "oceania",
        "capital": "Port Moresby",
        "capitalCoords": {
          "lat": -9.4438,
          "lng": 147.1803,
          "x": 42,
          "y": 35
        },
        "flag": "🇵🇬",
        "centerCoords": {
          "lat": -6.314993,
          "lng": 143.95555,
          "x": 40,
          "y": 32
        },
        "description": "Terre des oiseaux de paradis et de plus de 800 langues et tribus ancestrales.",
        "cities": [
          {
            "id": "port_moresby",
            "name": "Port Moresby",
            "countryId": "papua_new_guinea",
            "isCapital": true,
            "coords": {
              "lat": -9.4438,
              "lng": 147.1803,
              "x": 42,
              "y": 35
            },
            "population": "400 k",
            "region": "National Capital District",
            "description": "Capitale côtière bordant le golfe de Papouasie."
          },
          {
            "id": "lae",
            "name": "Lae",
            "countryId": "papua_new_guinea",
            "isCapital": false,
            "coords": {
              "lat": -6.7266,
              "lng": 146.993,
              "x": 42,
              "y": 33
            },
            "population": "150 k",
            "region": "Morobe",
            "description": "Deuxième ville et pôle industriel du golfe Huon."
          },
          {
            "id": "mount_hagen",
            "name": "Mount Hagen",
            "countryId": "papua_new_guinea",
            "isCapital": false,
            "coords": {
              "lat": -5.8575,
              "lng": 144.2266,
              "x": 40,
              "y": 31
            },
            "population": "50 k",
            "region": "Western Highlands",
            "description": "Cœur des hautes terres réputé pour son célèbre festival culturel de danse sing-sing."
          }
        ]
      },
      {
        "id": "samoa",
        "name": "Samoa",
        "continentId": "oceania",
        "capital": "Apia",
        "capitalCoords": {
          "lat": -13.8333,
          "lng": -171.7667,
          "x": 86,
          "y": 40
        },
        "flag": "🇼🇸",
        "centerCoords": {
          "lat": -13.759,
          "lng": -172.1046,
          "x": 86,
          "y": 40
        },
        "description": "Le Berceau de la Polynésie réputé pour sa fa'a Samoa (coutume traditionnelle) et la tranchée To Sua.",
        "cities": [
          {
            "id": "apia",
            "name": "Apia",
            "countryId": "samoa",
            "isCapital": true,
            "coords": {
              "lat": -13.8333,
              "lng": -171.7667,
              "x": 86,
              "y": 40
            },
            "population": "37 k",
            "region": "Tuamasaga",
            "description": "Capitale sur l'île d'Upolu abritant la dernière demeure de Robert Louis Stevenson."
          }
        ]
      },
      {
        "id": "tonga",
        "name": "Tonga",
        "continentId": "oceania",
        "capital": "Nukuʻalofa",
        "capitalCoords": {
          "lat": -21.1394,
          "lng": -175.2018,
          "x": 84,
          "y": 47
        },
        "flag": "🇹🇴",
        "centerCoords": {
          "lat": -21.1789,
          "lng": -175.1982,
          "x": 84,
          "y": 47
        },
        "description": "Le Royaume des Amis, seule monarchie indigène du Pacifique Sud jamais colonisée.",
        "cities": [
          {
            "id": "nukualofa",
            "name": "Nukuʻalofa",
            "countryId": "tonga",
            "isCapital": true,
            "coords": {
              "lat": -21.1394,
              "lng": -175.2018,
              "x": 84,
              "y": 47
            },
            "population": "25 k",
            "region": "Tongatapu",
            "description": "Capitale royale ornée du palais royal en bois victorien."
          }
        ]
      },
      {
        "id": "vanuatu",
        "name": "Vanuatu",
        "continentId": "oceania",
        "capital": "Port-Vila",
        "capitalCoords": {
          "lat": -17.7333,
          "lng": 168.3273,
          "x": 67,
          "y": 44
        },
        "flag": "🇻🇺",
        "centerCoords": {
          "lat": -15.3767,
          "lng": 166.9592,
          "x": 66,
          "y": 41
        },
        "description": "Archipel volcanique réputé pour le mont Yasur en éruption permanente et le saut du Gaul.",
        "cities": [
          {
            "id": "port_vila",
            "name": "Port-Vila",
            "countryId": "vanuatu",
            "isCapital": true,
            "coords": {
              "lat": -17.7333,
              "lng": 168.3273,
              "x": 67,
              "y": 44
            },
            "population": "50 k",
            "region": "Shefa",
            "description": "Capitale nichée au bord de la baie de Mele sur l'île d'Éfaté."
          },
          {
            "id": "luganville",
            "name": "Luganville",
            "countryId": "vanuatu",
            "isCapital": false,
            "coords": {
              "lat": -15.5167,
              "lng": 167.1667,
              "x": 66,
              "y": 41
            },
            "population": "18 k",
            "region": "Sanma",
            "description": "Deuxième ville sur l'île d'Espiritu Santo, paradis de la plongée sous-marine."
          }
        ]
      },
      {
        "id": "solomon_islands",
        "name": "Îles Salomon",
        "continentId": "oceania",
        "capital": "Honiara",
        "capitalCoords": {
          "lat": -9.4456,
          "lng": 159.9729,
          "x": 55,
          "y": 35
        },
        "flag": "🇸🇧",
        "centerCoords": {
          "lat": -9.6457,
          "lng": 160.1562,
          "x": 55,
          "y": 35
        },
        "description": "Archipel mélanésien riche en récifs coralliens et épaves historiques de Guadalcanal.",
        "cities": [
          {
            "id": "honiara",
            "name": "Honiara",
            "countryId": "solomon_islands",
            "isCapital": true,
            "coords": {
              "lat": -9.4456,
              "lng": 159.9729,
              "x": 55,
              "y": 35
            },
            "population": "90 k",
            "region": "Guadalcanal",
            "description": "Capitale côtière sur l'île légendaire de Guadalcanal."
          },
          {
            "id": "gizo",
            "name": "Gizo",
            "countryId": "solomon_islands",
            "isCapital": false,
            "coords": {
              "lat": -8.1,
              "lng": 156.8417,
              "x": 52,
              "y": 33
            },
            "population": "7 k",
            "region": "Occidentale",
            "description": "Centre de plongée paradisiaque de la province occidentale."
          }
        ]
      },
      {
        "id": "micronesia",
        "name": "Micronésie",
        "continentId": "oceania",
        "capital": "Palikir",
        "capitalCoords": {
          "lat": 6.9248,
          "lng": 158.1611,
          "x": 53,
          "y": 17
        },
        "flag": "🇫🇲",
        "centerCoords": {
          "lat": 7.4256,
          "lng": 150.5508,
          "x": 46,
          "y": 16
        },
        "description": "États fédérés de Micronésie abritant la mystérieuse cité en ruines de Nan Madol sur l'eau.",
        "cities": [
          {
            "id": "palikir",
            "name": "Palikir",
            "countryId": "micronesia",
            "isCapital": true,
            "coords": {
              "lat": 6.9248,
              "lng": 158.1611,
              "x": 53,
              "y": 17
            },
            "population": "7 k",
            "region": "Pohnpei",
            "description": "Capitale fédérale nichée dans la jungle de l'île de Pohnpei."
          },
          {
            "id": "weno",
            "name": "Weno",
            "countryId": "micronesia",
            "isCapital": false,
            "coords": {
              "lat": 7.4467,
              "lng": 151.8467,
              "x": 47,
              "y": 16
            },
            "population": "14 k",
            "region": "Chuuk",
            "description": "Centre le plus peuplé du lagon de Chuuk."
          }
        ]
      },
      {
        "id": "palau",
        "name": "Palaos",
        "continentId": "oceania",
        "capital": "Ngerulmud",
        "capitalCoords": {
          "lat": 7.5004,
          "lng": 134.6242,
          "x": 29,
          "y": 16
        },
        "flag": "🇵🇼",
        "centerCoords": {
          "lat": 7.515,
          "lng": 134.5825,
          "x": 29,
          "y": 16
        },
        "description": "Sanctuaire marin mondial aux 300 îles Chelbacheb (Rock Islands) et au lac aux méduses.",
        "cities": [
          {
            "id": "ngerulmud",
            "name": "Ngerulmud",
            "countryId": "palau",
            "isCapital": true,
            "coords": {
              "lat": 7.5004,
              "lng": 134.6242,
              "x": 29,
              "y": 16
            },
            "population": "300",
            "region": "Melekeok",
            "description": "Capitale d'État la moins peuplée du monde, dotée d'un Capitole monumental."
          },
          {
            "id": "koror",
            "name": "Koror",
            "countryId": "palau",
            "isCapital": false,
            "coords": {
              "lat": 7.3419,
              "lng": 134.4789,
              "x": 29,
              "y": 16
            },
            "population": "12 k",
            "region": "Koror",
            "description": "Ancienne capitale et centre économique et touristique des Palaos."
          }
        ]
      },
      {
        "id": "marshall_islands",
        "name": "Îles Marshall",
        "continentId": "oceania",
        "capital": "Majuro",
        "capitalCoords": {
          "lat": 7.1167,
          "lng": 171.3833,
          "x": 67,
          "y": 17
        },
        "flag": "🇲🇭",
        "centerCoords": {
          "lat": 7.1315,
          "lng": 171.1845,
          "x": 67,
          "y": 17
        },
        "description": "Nation d'atolls coralliens étroits étirés au milieu du grand océan Pacifique.",
        "cities": [
          {
            "id": "majuro",
            "name": "Majuro",
            "countryId": "marshall_islands",
            "isCapital": true,
            "coords": {
              "lat": 7.1167,
              "lng": 171.3833,
              "x": 67,
              "y": 17
            },
            "population": "30 k",
            "region": "Majuro",
            "description": "Capitale atoll s'étirant sur un ruban de corail de 64 îles reliées."
          }
        ]
      },
      {
        "id": "kiribati",
        "name": "Kiribati",
        "continentId": "oceania",
        "capital": "Tarawa-Sud",
        "capitalCoords": {
          "lat": 1.3289,
          "lng": 172.9772,
          "x": 69,
          "y": 24
        },
        "flag": "🇰🇮",
        "centerCoords": {
          "lat": -3.3704,
          "lng": -168.734,
          "x": 89,
          "y": 29
        },
        "description": "Seul pays au monde situé simultanément dans les quatre hémisphères terrestres.",
        "cities": [
          {
            "id": "south_tarawa",
            "name": "Tarawa-Sud",
            "countryId": "kiribati",
            "isCapital": true,
            "coords": {
              "lat": 1.3289,
              "lng": 172.9772,
              "x": 69,
              "y": 24
            },
            "population": "63 k",
            "region": "Îles Gilbert",
            "description": "Capitale atoll aux îlots reliés par des chaussées de corail."
          }
        ]
      },
      {
        "id": "nauru",
        "name": "Nauru",
        "continentId": "oceania",
        "capital": "Yaren",
        "capitalCoords": {
          "lat": -0.5477,
          "lng": 166.9209,
          "x": 63,
          "y": 25
        },
        "flag": "🇳🇷",
        "centerCoords": {
          "lat": -0.5228,
          "lng": 166.9315,
          "x": 63,
          "y": 25
        },
        "description": "Plus petite république insulaire indépendante du monde, d'une superficie de 21 km².",
        "cities": [
          {
            "id": "yaren",
            "name": "Yaren",
            "countryId": "nauru",
            "isCapital": true,
            "coords": {
              "lat": -0.5477,
              "lng": 166.9209,
              "x": 63,
              "y": 25
            },
            "population": "800",
            "region": "Yaren",
            "description": "District abritant le Parlement de la plus petite république du monde."
          }
        ]
      },
      {
        "id": "tuvalu",
        "name": "Tuvalu",
        "continentId": "oceania",
        "capital": "Funafuti",
        "capitalCoords": {
          "lat": -8.5211,
          "lng": 179.1983,
          "x": 75,
          "y": 34
        },
        "flag": "🇹🇻",
        "centerCoords": {
          "lat": -7.1095,
          "lng": 177.6493,
          "x": 74,
          "y": 33
        },
        "description": "Archipel corallien polynésien parmi les pays les plus bas et vulnérables à la montée des eaux.",
        "cities": [
          {
            "id": "funafuti",
            "name": "Funafuti",
            "countryId": "tuvalu",
            "isCapital": true,
            "coords": {
              "lat": -8.5211,
              "lng": 179.1983,
              "x": 75,
              "y": 34
            },
            "population": "6.3 k",
            "region": "Funafuti",
            "description": "Capitale atoll entourant un immense et superbe lagon turquoise."
          }
        ]
      },
      {
        "id": "french_polynesia",
        "name": "Polynésie française",
        "continentId": "oceania",
        "capital": "Papeete",
        "capitalCoords": {
          "lat": -17.535,
          "lng": -149.5696,
          "x": 96,
          "y": 44
        },
        "flag": "🇵🇫",
        "centerCoords": {
          "lat": -17.6797,
          "lng": -149.4068,
          "x": 96,
          "y": 44
        },
        "description": "Paradis polynésien aux 118 îles réparties en 5 archipels avec Bora-Bora et Tahiti.",
        "cities": [
          {
            "id": "papeete",
            "name": "Papeete",
            "countryId": "french_polynesia",
            "isCapital": true,
            "coords": {
              "lat": -17.535,
              "lng": -149.5696,
              "x": 96,
              "y": 44
            },
            "population": "27 k",
            "region": "Tahiti",
            "description": "Capitale tahitienne avec son marché typique et son front de mer."
          },
          {
            "id": "faaa",
            "name": "Faaa",
            "countryId": "french_polynesia",
            "isCapital": false,
            "coords": {
              "lat": -17.55,
              "lng": -149.6,
              "x": 96,
              "y": 44
            },
            "population": "30 k",
            "region": "Tahiti",
            "description": "Commune la plus peuplée de Polynésie abritant l'aéroport international."
          },
          {
            "id": "bora_bora",
            "name": "Bora-Bora",
            "countryId": "french_polynesia",
            "isCapital": false,
            "coords": {
              "lat": -16.5004,
              "lng": -151.7415,
              "x": 95,
              "y": 43
            },
            "population": "10 k",
            "region": "Îles Sous-le-Vent",
            "description": "La Perle du Pacifique au mont Otemanu et pilotis sur lagon légendaire."
          }
        ]
      },
      {
        "id": "new_caledonia",
        "name": "Nouvelle-Calédonie",
        "continentId": "oceania",
        "capital": "Nouméa",
        "capitalCoords": {
          "lat": -22.2758,
          "lng": 166.458,
          "x": 65,
          "y": 49
        },
        "flag": "🇳🇨",
        "centerCoords": {
          "lat": -20.9043,
          "lng": 165.618,
          "x": 64,
          "y": 47
        },
        "description": "Archipel mélanésien au plus grand lagon fermé du monde classé au patrimoine mondial de l'UNESCO.",
        "cities": [
          {
            "id": "noumea",
            "name": "Nouméa",
            "countryId": "new_caledonia",
            "isCapital": true,
            "coords": {
              "lat": -22.2758,
              "lng": 166.458,
              "x": 65,
              "y": 49
            },
            "population": "94 k",
            "region": "Province Sud",
            "description": "Capitale cosmopolite avec la baie des Citrons et le centre culturel Tjibaou."
          },
          {
            "id": "dumbea",
            "name": "Dumbéa",
            "countryId": "new_caledonia",
            "isCapital": false,
            "coords": {
              "lat": -22.15,
              "lng": 166.45,
              "x": 65,
              "y": 49
            },
            "population": "35 k",
            "region": "Province Sud",
            "description": "Deuxième commune calédonienne traversée par la rivière Dumbéa."
          },
          {
            "id": "mont_dore",
            "name": "Le Mont-Dore",
            "countryId": "new_caledonia",
            "isCapital": false,
            "coords": {
              "lat": -22.2833,
              "lng": 166.5833,
              "x": 65,
              "y": 49
            },
            "population": "28 k",
            "region": "Province Sud",
            "description": "Commune littorale réputée pour ses sources d'eau minérale."
          }
        ]
      }
    ]
  }
];

/**
 * Retrieve all countries across all continents
 */
export function getAllCountries(): Country[] {
  return CONTINENTS_DATA.flatMap((continent) => continent.countries);
}

/**
 * Retrieve all cities across all countries
 */
export function getAllCities(): City[] {
  return getAllCountries().flatMap((country) => country.cities);
}

/**
 * Find a specific country by ID
 */
export function getCountryById(countryId: string): Country | undefined {
  return getAllCountries().find((c) => c.id === countryId);
}

/**
 * Find a specific continent by ID
 */
export function getContinentById(continentId: string): Continent | undefined {
  return CONTINENTS_DATA.find((c) => c.id === continentId);
}

/**
 * Find a specific city by ID
 */
export function getCityById(cityId: string): City | undefined {
  return getAllCities().find((c) => c.id === cityId);
}
