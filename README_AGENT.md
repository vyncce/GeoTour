# Guide Agent IA - Structure & Patterns (README_AGENT.md)

Ce document fournit aux agents d'IA une vue d'ensemble rapide pour étendre et maintenir ce dépôt.

## 📂 Architecture des Dossiers (`src/`)

```
src/
├── app/                  # Next.js App Router (layout.tsx, page.tsx, globals.css)
├── components/
│   ├── ui/              # Composants atomes réutilisables (Button, Card, Badge, Modal, ThemeToggle)
│   ├── layout/          # Shell applicatif adaptatif (AppShell, Header, MobileNav)
│   └── features/        # Composants de fonctionnalités (DashboardOverview, DataViewer, SettingsPanel)
├── hooks/                # Custom React Hooks (useLocalStorage, useMediaQuery)
├── lib/                  # Utilitaires globaux (utils.ts avec cn())
└── types/                # Interfaces TypeScript (storage.ts, ui.ts)
```

## 🛠️ Pattern de Persistance Local-First

Pour ajouter ou modifier des données d'état :
1. Définir le type dans `src/types/storage.ts`.
2. Utiliser le hook `useLocalStorage<T>(key, initialValue)` dans le composant client concerné.
3. Ne JAMAIS introduire d'appel `fetch()` backend ou de connexion base de données locale/distante.
4. S'assurer que les setters mettent à jour l'horodatage `lastSavedAt`.

## 📱 Normes Ergonomiques Mobile-First (EMCockpit Style)

- **Cibles tactiles** : Boutons avec `min-h-[44px]` et paddings adaptés aux pouces.
- **Safe Area Insets** :
  - MobileNav utilise `pb-[env(safe-area-inset-bottom)]`.
  - Header utilise `pt-[env(safe-area-inset-top)]`.
  - Main container utilise `pb-[calc(5rem+env(safe-area-inset-bottom))]` pour éviter qu'aucune information ne soit masquée par la barre de navigation mobile.
- **Micro-interactions** : Classes Tailwind `active:scale-[0.98]`, `transition-all duration-200`, gradients subtils et flous de verre (`backdrop-blur-md`).

## 🧪 Validation & Checks

Toujours valider le code avant la fin de session :
```bash
npm run lint
npm run build
```
