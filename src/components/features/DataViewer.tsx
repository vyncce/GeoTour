'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AppState } from '@/types/storage';
import { Pin, Trash2, Plus, Search, Filter } from 'lucide-react';

export interface DataViewerProps {
  appState: AppState;
  onAddItem: () => void;
  onTogglePin: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export const DataViewer: React.FC<DataViewerProps> = ({
  appState,
  onAddItem,
  onTogglePin,
  onDeleteItem,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(appState.items.map((i) => i.category)))];

  const filteredItems = appState.items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Gestion des Données
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {appState.items.length} enregistrements sauvegardés localement
          </p>
        </div>
        <Button variant="primary" onClick={onAddItem}>
          <Plus className="h-4 w-4" />
          Ajouter
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher par titre ou description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full min-h-11 pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <Filter className="h-4 w-4 text-slate-400 ml-1 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-11 px-3 py-1.5 rounded-xl text-xs font-medium capitalize transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? 'Toutes catégories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Item List */}
      {filteredItems.length === 0 ? (
        <Card className="py-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {searchTerm || selectedCategory !== 'all'
              ? 'Aucun résultat ne correspond à vos filtres.'
              : 'Aucune donnée enregistrée. Cliquez sur "Ajouter" pour créer un enregistrement.'}
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              headerAction={
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onTogglePin(item.id)}
                    title={item.pinned ? 'Désépingler' : 'Épingler'}
                    className={item.pinned ? 'text-amber-500' : 'text-slate-400'}
                  >
                    <Pin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDeleteItem(item.id)}
                    title="Supprimer"
                    className="text-slate-400 hover:text-rose-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              }
              footer={
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <Badge variant="slate" size="sm">
                    {item.category}
                  </Badge>
                  <span>Mis à jour: {new Date(item.updatedAt).toLocaleTimeString()}</span>
                </div>
              }
            >
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
