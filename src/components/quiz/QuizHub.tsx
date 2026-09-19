'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { QuizCategory, DifficultyLevel, QuizConfig } from '@/types/geo';
import { CONTINENTS_DATA, getAllCountries } from '@/data/geoDataset';
import { Globe, Map, Building2, Landmark, Play, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';

export interface QuizHubProps {
  onStartQuiz: (config: QuizConfig) => void;
  onOpenStats: () => void;
  onOpenWorldQuiz?: () => void;
  onOpenContinentQuiz?: () => void;
}

export const QuizHub: React.FC<QuizHubProps> = ({
  onStartQuiz,
  onOpenStats,
  onOpenWorldQuiz,
  onOpenContinentQuiz,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('capitals');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('medium');
  const [selectedContinent, setSelectedContinent] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<number>(5);

  const countriesList = getAllCountries();

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
              Explorez nos quiz interactifs : positionnement de stickers pays/capitales sur planisphère ou quiz QCM standard.
            </p>
          </div>
          <Button variant="secondary" onClick={onOpenStats} className="shrink-0 shadow-md">
            <Layers className="h-4 w-4" /> Historique &amp; Scores
          </Button>
        </div>
      </div>

      {/* Featured Mode: Sticker Quiz Modes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-r from-amber-500 to-emerald-500 text-white text-xs font-bold">
              ★
            </span>
            Nouveaux Modes : Quiz Cartes &amp; Stickers
          </h3>
          <Badge variant="emerald" size="sm">Nouveau</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* World Sticker Quiz Launcher Card */}
          <div
            onClick={onOpenWorldQuiz}
            className="group cursor-pointer p-5 rounded-3xl border border-emerald-500/30 bg-linear-to-br from-emerald-500/10 via-white dark:via-slate-900 to-teal-500/10 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[140px]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6" />
              </div>
              <Badge variant="emerald" size="sm">Planisphère 🌍</Badge>
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Quiz Monde (Stickers)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Positionnez des stickers pays et capitales directement sur le planisphère mondial interactif.
              </p>
            </div>
          </div>

          {/* Continent Sticker Quiz Launcher Card */}
          <div
            onClick={onOpenContinentQuiz}
            className="group cursor-pointer p-5 rounded-3xl border border-teal-500/30 bg-linear-to-br from-teal-500/10 via-white dark:via-slate-900 to-sky-500/10 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[140px]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/30 group-hover:scale-110 transition-transform">
                <Map className="h-6 w-6" />
              </div>
              <Badge variant="teal" size="sm">Régional 🗺️</Badge>
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                Quiz Continent (Stickers)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Choisissez un continent (Europe, Asie, Afrique, Amériques...) et placez ses pays et capitales clés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Category Selection */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">1</span>
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

      {/* 2. Configuration Options (Filters & Difficulty) */}
      <Card title="Configuration &amp; Filtres Régionaux" headerAction={<SlidersHorizontal className="h-4 w-4 text-slate-400" />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Difficulty Level */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Niveau de Difficulté
            </label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800">
              {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setDifficulty(lvl)}
                  className={`min-h-9.5 py-1 text-xs font-semibold rounded-lg capitalize transition-all ${
                    difficulty === lvl
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {lvl === 'easy' ? 'Facile' : lvl === 'medium' ? 'Moyen' : 'Difficile'}
                </button>
              ))}
            </div>
          </div>

          {/* Continent Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Filtrer par Continent
            </label>
            <select
              value={selectedContinent}
              onChange={(e) => {
                setSelectedContinent(e.target.value);
                setSelectedCountry('');
              }}
              className="w-full min-h-11 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="">Tous les Continents</option>
              {CONTINENTS_DATA.map((cont) => (
                <option key={cont.id} value={cont.id}>
                  {cont.name}
                </option>
              ))}
            </select>
          </div>

          {/* Country Filter (5+ cities) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Filtrer par Pays Spécifique
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full min-h-11 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="">Tous les Pays (Global)</option>
              {countriesList
                .filter((c) => !selectedContinent || c.continentId === selectedContinent)
                .map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {c.name} (5+ Villes)
                  </option>
                ))}
            </select>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Nombre de Questions
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full min-h-11 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value={5}>5 Questions (Rapide)</option>
              <option value={10}>10 Questions (Standard)</option>
              <option value={20}>20 Questions (Défi Long)</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Launch Action */}
      <div className="flex justify-end pt-2">
        <Button
          variant="primary"
          size="lg"
          onClick={handleLaunch}
          className="w-full sm:w-auto px-8 shadow-xl shadow-emerald-600/30"
        >
          <Play className="h-5 w-5 fill-current" />
          Lancer le Quiz ({questionCount} Qs)
        </Button>
      </div>
    </div>
  );
};
