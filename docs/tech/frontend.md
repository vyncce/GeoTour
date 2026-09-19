# Frontend & Ergonomie Mobile/Tablette (EMCockpit)

## 1. Ergonomie Mobile-First & Touch Targets

L'application est conçue en priorité pour une utilisation fluide à une main sur Smartphone ainsi que sur Tablette.

### Règle des Touch Targets (≥ 44px)
Chaque composant interactif (`Button`, éléments de `MobileNav`, items de sélection) est dimensionné avec une hauteur et une largeur d'interaction minimales de **44px x 44px**.

Exemple dans `src/components/ui/Button.tsx` :
```tsx
const sizeStyles = {
  sm: 'min-h-[38px] px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'min-h-[44px] px-4 py-2.5 text-sm rounded-xl gap-2',
  lg: 'min-h-[50px] px-6 py-3.5 text-base rounded-2xl gap-2.5',
  icon: 'min-h-[44px] min-w-[44px] p-2.5 rounded-xl',
};
```

---

## 2. Insets D'écran & Safe Areas

Sur les terminaux iOS et Android dotés d'encoches ou d'indicateurs de balayage inférieurs, l'affichage respecte les variables CSS natives :
- **Header** : `pt-[env(safe-area-inset-top)]`
- **Bottom Bar (`MobileNav`)** : `pb-[env(safe-area-inset-bottom)]`
- **Main Scroll Container** : `pb-[calc(5rem+env(safe-area-inset-bottom))]` afin d'éviter tout chevauchement du contenu.

---

## 3. Thèmes & Esthétique Visuelle

- **Palette de Couleurs** : Combinaisons de teintes Emerald (`#10b981`), Teal, Slate et Dark Slate (`#020617`).
- **Glassmorphism & Eléments** : Utilisation de `backdrop-blur-md`, bordures translucides `border-slate-200/80` et ombres douces `shadow-md`.
- **Mode Sombre / Clair** : Géré automatiquement par `next-themes` et configurable via le composant `ThemeToggle`.

---

## 4. Moteur Cartographique Vectoriel Local-First

Le composant `MinimalistMap` (`src/components/geo/MinimalistMap.tsx`) s'appuie sur le jeu de tracés vectoriels `src/data/vectorMaps.ts` :
- **Vue Monde** : Rendu vectoriel SVG complet des continents et planisphère.
- **Vue Continent** : Affichage ciblé de l'Europe, Amérique du Nord, Asie, Amérique du Sud, Océanie avec mise en valeur du pays recherché.
- **Vue Pays Détaillée** : Contours géographiques précis (France métropolitaine et Corse, Allemagne, Espagne et Baléares, Italie et îles, Japon, USA, etc.) avec repérage instantané des capitales et des 5+ villes par pays.
- **Zéro dépendance réseau** : 100% SVG embarqué, ultra-léger et compatible hors-ligne.

