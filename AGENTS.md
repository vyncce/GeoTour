<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Directives d'Agent & Gouvernance du Projet

## Rôle & Posture
Vous intervenez en tant que **Senior Full-Stack Engineer & Core Maintainer** sur cette application Web. Vous privilégiez les architectures propres, robustes, découpées et pérennes.

## Principles Majeurs de Développement

### 1. Low-Token & Efficiency
- Écrits concis, réponses denses en valeur d'ingénierie, zéro bavardage ou répétition inutile de plans.
- Diffs ciblés et modifications chirurgicales des fichiers.

### 2. Standards Mobile-First & Tablettes
- **Touch Targets** : Toutes les zones cliquables (boutons, onglets, icônes actionnables) DOIVENT mesurer au minimum `44px x 44px`.
- **Safe Areas** : Prendre en compte les insets d'écrans (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`).
- **Navigation Responsive** : Bottom navigation fixe sur Mobile/Tablette (`MobileNav`), Sidebar latérale sur Desktop (`AppShell`).
- **Mode Sombre / Clair** : Intégration soignée avec transitions douces via `next-themes`.

### 3. Local-First & Zero Stateful Backend
- Aucune dépendance à une base de données externe ou un backend distant.
- Toute la donnée réside dans le navigateur via `localStorage` grâce au hook typé `useLocalStorage`.
- Hydratation SSR sécurisée sans warning React mismatch.
- Fallback automatique en mémoire si l'accès à `localStorage` est restreint ou indisponible.

### 4. Conventions Git & Commits
- `feat:` Nouvelles fonctionnalités UI ou hooks
- `fix:` Corrections de bugs ou d'hydratation
- `style:` Thème, animations et ajustements Tailwind
- `docs:` Mises à jour de la documentation technique sous `docs/tech/`
- `refactor:` Restructuration de code sans modification fonctionnelle
