# GEOTour - Application Web Mobile-First Standalone

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com/)

GEOTour est une application Web moderne conçue selon les standards d'architecture éprouvés (**style EMCockpit**), optimisée **Mobile-First** (Smartphones & Tablettes), mono-utilisateur, entièrement autonome et **local-first** (aucune base de données distante requise, stockage dans `localStorage`).

---

## ✨ Fonctionnalités Principales

- 📱 **Mobile & Tablette First** : Bottom navigation adaptative (`MobileNav`), sidebar sur grand écran (`AppShell`), zones d'interaction tactiles `≥ 44px` et gestion des safe areas (`env(safe-area-inset-bottom)`).
- 💾 **Local-First / Zero Backend** : Persistance instantanée via un custom hook `useLocalStorage` typé, SSR-safe et tolérant aux pannes (fallback en mémoire).
- 🌓 **Thèmes Clair / Sombre / Système** : Switcher de thème dynamique avec support `next-themes` et animations fluides.
- 📦 **Export & Import JSON** : Sauvegardez et restaurez l'intégralité de vos données locales à tout moment sous forme de fichier JSON.
- 🚀 **Prêt pour Vercel & GitHub** : Configuration optimisée App Router React 19 pour un déploiement instantané sans administration serveur.

---

## 🚀 Démarrage Rapide

### Prérequis
- **Node.js** v18.17+ ou v20+
- **npm** v9+

### Installation & Lancement en Développement

```bash
# Cloner le dépôt
git clone https://github.com/vyncce/GEOTour.git
cd GEOTour

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 🛠️ Scripts Disponibles

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Compile l'application pour la production Vercel / Next.js.
- `npm run start` : Démarre le serveur de production local.
- `npm run lint` : Exécute les vérifications ESLint.

---

## 🌐 Déploiement Vercel

1. Poussez votre code sur GitHub.
2. Connectez le dépôt à [Vercel](https://vercel.com).
3. Vercel détectera automatiquement Next.js. Cliquez sur **Deploy**.
4. Aucune variable d'environnement ou base de données n'est requise.

---

## 📚 Documentation Technique

Retrouvez la documentation complète dans le répertoire [`docs/tech/`](docs/tech/SUMMARY.md) :
- [Sommaire de la Documentation](docs/tech/SUMMARY.md)
- [Architecture & Persistence Local-First](docs/tech/architecture.md)
- [Design System & Frontend Ergonomics](docs/tech/frontend.md)
- [Infrastructure & Deployment Guide](docs/tech/infra.md)
