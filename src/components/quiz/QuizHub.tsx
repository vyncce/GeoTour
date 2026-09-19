'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { QuizCategory, QuizConfig } from '@/types/geo';
import { UserPreferences } from '@/types/storage';
import { getContinentById, getCountryById } from '@/data/geoDataset';
import {
  Globe,
  Map,
  Building2,
  Landmark,
  Play,
  Sparkles,
  Layers,
  Settings as SettingsIcon,
  SlidersHorizontal,
} from 'lucide-react';

export interface QuizHubProps {
  preferences?: UserPreferences;
  onStartQuiz: (config: QuizConfig) => void;
  onOpenStats: () => void;
  onOpenSettings?: () => void;
}

export const QuizHub: React.FC<QuizHubProps> = ({
  preferences,
  onStartQuiz,
  onOpenStats,
  onOpenSettings,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('capitals');

  const difficulty = preferences?.difficulty || 'medium';
  const selectedContinent = preferences?.selectedContinent || '';
  const selectedCountry = preferences?.selectedCountry || '';
  const questionCount = preferences?.questionCount || 10;

  const continentObj = selectedContinent ? getContinentById(selectedContinent) : null;
  const countryObj = selectedCountry ? getCountryById(selectedCountry) : null;

  const handleLaunch = () => {
    onStartQuiz({
      category: selectedCategory,
      difficulty,
      continentId: selectedContinent || undefined,
      countryId: selectedCountry || undefined,
      questionCount,
      isSeries: false,
    });
  };

  const categories = [
    {
      id: 'continents' as QuizCategory,
      title: 'Continents',
      description: 'Localiser et identifier les 6 grands continents du monde.',
      icon: Globe,
      color: 'emerald',
      badge: '6 Continents',
    },
    {
      id: 'countries' as QuizCategory,
      title: 'Pays',
      description: 'Reconnaître les pays et leurs frontières par continent.',
      icon: Map,
      color: 'teal',
      badge: '208 Pays',
    },
    {
      id: 'capitals' as QuizCategory,
      title: 'Capitales',
      description: 'Placer et associer les capitales officielles du monde.',
      icon: Landmark,
      color: 'amber',
      badge: 'Capitales Clés',
    },
    {
      id: 'cities' as QuizCategory,
      title: 'Villes Principales',
      description: 'Explorer 600+ villes majeures à travers le monde.',
      icon: Building2,
      color: 'sky',
      badge: '600+ Villes',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              GEOTour Cartographie &amp; Quiz
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Testez vos Connaissances Géographiques
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explorez nos quiz interactifs : identifiez les continents, pays, capitales et grandes villes du monde.
            </p>
          </div>
          <Button variant="secondary" onClick={onOpenStats} className="shrink-0 shadow-md">
            <Layers className="h-4 w-4" /> Historique &amp; Scores
          </Button>
        </div>
      </div>

      {/* Category Selection */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Globe className="h-5 w-5 text-emerald-500" />
          Choisissez une Catégorie de Quiz
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 min-h-11 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-500/10 border-emerald-500 text-slate-900 dark:text-slate-100 ring-2 ring-emerald-500/30 shadow-md'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant={isSelected ? 'emerald' : 'slate'} size="sm">
                    {cat.badge}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">{cat.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Active Configuration Summary (Configured in Settings) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-emerald-400" />
            <h4 className="text-sm font-bold text-slate-100">Filtres &amp; Configuration Actifs</h4>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Badge variant="emerald" size="sm">
              Difficulté : {difficulty === 'easy' ? 'Facile' : difficulty === 'medium' ? 'Moyen' : 'Difficile'}
            </Badge>
            <Badge variant="slate" size="sm">
              Région : {countryObj ? `${countryObj.flag} ${countryObj.name}` : continentObj ? continentObj.name : 'Monde (Tous)'}
            </Badge>
            <Badge variant="slate" size="sm">
              {questionCount} Questions
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {onOpenSettings && (
            <Button variant="ghost" size="sm" onClick={onOpenSettings} className="min-h-11 text-slate-300 hover:text-white">
              <SettingsIcon className="h-4 w-4" />
              <span className="text-xs font-semibold">Paramètres</span>
            </Button>
          )}

          <Button
            variant="primary"
            size="lg"
            onClick={handleLaunch}
            className="w-full sm:w-auto px-7 shadow-xl shadow-emerald-600/30"
          >
            <Play className="h-5 w-5 fill-current" />
            Lancer le Quiz ({questionCount} Qs)
          </Button>
        </div>
      </div>
    </div>
  );
};
