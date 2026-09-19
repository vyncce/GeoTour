'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AppState } from '@/types/storage';
import { Plus, HardDrive, Smartphone, Sparkles, Layers, RefreshCw } from 'lucide-react';

export interface DashboardOverviewProps {
  appState: AppState;
  onAddItem: () => void;
  onNavigateTab: (tabId: string) => void;
  isReady: boolean;
  isFallback: boolean;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  appState,
  onAddItem,
  onNavigateTab,
  isReady,
  isFallback,
}) => {
  const pinnedItemsCount = appState.items.filter((i) => i.pinned).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mr-12 -mt-12 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            EMCockpit Mobile-First Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Application Standalone & Local-First
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conçue pour une réactivité maximale sur Smartphone et Tablette. Aucune base de données distante requise, persistance client-side instantanée et zéro latence réseau.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="primary" onClick={onAddItem} className="shadow-lg shadow-emerald-500/30">
              <Plus className="h-4 w-4" />
              Nouvel Élément
            </Button>
            <Button variant="secondary" onClick={() => onNavigateTab('data')}>
              <Layers className="h-4 w-4" />
              Explorer les Données ({appState.items.length})
            </Button>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Local Storage Status */}
        <Card
          title="Stockage Client"
          description="Statut de la persistance locale"
          headerAction={
            <Badge variant={isFallback ? 'amber' : 'emerald'}>
              {isFallback ? 'Fallback Mémoire' : 'LocalStorage OK'}
            </Badge>
          }
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <HardDrive className="h-4 w-4" /> État Initialisation
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {isReady ? 'Prêt (Hydraté)' : 'Chargement...'}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-500 dark:text-slate-400">Sessions enregistrées</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {appState.stats.totalSessions}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
              Dernière mise à jour : {appState.stats.lastSavedAt || 'Aucune'}
            </div>
          </div>
        </Card>

        {/* Card 2: Items Summary */}
        <Card title="Données Stockées" description="Volume total des éléments locaux">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {appState.items.length}
            </span>
            <Badge variant="sky">{pinnedItemsCount} épinglé(s)</Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Tous les enregistrements sont sérialisés en JSON et conservés localement.
          </p>
        </Card>

        {/* Card 3: Mobile Touch Targets */}
        <Card title="Ergonomie Tactile" description="Standards PWA & Mobile UX">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Smartphone className="h-4 w-4 text-emerald-500" />
              <span>Touch targets ≥ 44px garantis</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <RefreshCw className="h-4 w-4 text-teal-500" />
              <span>Safe-area insets iOS / Android</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Sparkles className="h-4 w-4 text-sky-500" />
              <span>Fluidité 60 FPS & mode sombre</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
