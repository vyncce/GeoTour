# Infrastructure, CI/CD & Déploiement Vercel

## 1. Déploiement Vercel

GEOTour est pré-configuré pour un déploiement zéro-configuration sur **Vercel**.

### Configuration Standalone
- **Framework Preset** : Next.js
- **Build Command** : `npm run build`
- **Output Directory** : `.next`

Le projet utilise le routeur Next.js App Router (React 19). Aucune variable d'environnement obligatoire n'est requise au démarrage.

---

## 2. PWA & Optimisations Client

### Viewport Configuration (`src/app/layout.tsx`)
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};
```
Cette configuration prévient les zooms non désirés lors du double-tap sur les champs de saisie mobile et étend le fond de l'application à toute la zone de l'écran (`viewport-fit=cover`).

---

## 3. Directives de Maintenance

Pour maintenir le dépôt propre :
1. Toujours vérifier que `npm run build` passe sans warning ou erreur TypeScript.
2. Ne jamais ajouter de clés d'API sensibles dans le code source client.
3. Conserver la structure des fichiers de gouvernance `AGENTS.md` et `README_AGENT.md`.
