# Architecture Applicative & Storage IndexedDB

## 1. Modèle Local-First & Persistance Dual-Layer

L'application GEOTour combine deux mécanismes de persistance client-side sans aucun backend distant :

1. **IndexedDB (`src/lib/db.ts`)** :
   - Base de données native `GEOTourDB` (ObjectStores: `sessions`, `mastery`).
   - Sauvegarde l'historique complet des sessions de quiz (score, précision %, temps de jeu, détail des réponses).
   - Accès réactif via le custom hook [`useIndexedDB.ts`](file:///home/vyncce/devProjects/GEOTour/src/hooks/useIndexedDB.ts) compatible React 19 / SSR.

2. **LocalStorage (`src/hooks/useLocalStorage.ts`)** :
   - Stocke les préférences de l'utilisateur (thème, mode compact, notifications).
   - Prise en charge des événements `storage` inter-onglets.

---

## 2. Architecture du Moteur de Quiz

```
+-------------------------------------------------------------------------+
|                              QuizHub                                    |
| (Sélection Catégorie: Continents/Pays/Capitales/Villes, Difficulté, Pays) |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                        quizEngine (Générateur)                          |
| (Sélection questions aléatoires, option QCM, calcul de score & combos)  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                          QuizScreen (Jeu)                               |
| (Carte vectorielle MinimalistMap, timer 30s, retour visuel vert/rouge)  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                      QuizResults -> IndexedDB                           |
| (Affichage résumé + Sauvegarde automatique dans l'ObjectStore sessions) |
+-------------------------------------------------------------------------+
```

---

## 3. Jeu de Données Géographiques (`src/data/geoDataset.ts`)

Le jeu de données couvre :
- **6 Continents** (Europe, Asie, Afrique, Amérique du Nord, Amérique du Sud, Océanie).
- **Pays Clés** (France, Allemagne, Espagne, Italie, USA, Canada, Japon, Brésil, Australie, etc.).
- **Capitales Officieuses & Officielles**.
- **Au moins 5 Villes Principales par Pays** (ex: France: Paris, Lyon, Marseille, Toulouse, Nice, Bordeaux, Strasbourg) avec coordonnées vectorielles `(x%, y%)`.
