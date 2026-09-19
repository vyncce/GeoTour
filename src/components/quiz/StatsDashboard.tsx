'use client';

import React, { useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useIndexedDB } from '@/hooks/useIndexedDB';
import { Trophy, Award, Clock, Trash2, ArrowLeft, Database, HardDrive } from 'lucide-react';

export interface StatsDashboardProps {
  onBack: () => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ onBack }) => {
  const { sessions, isLoaded, reload, clearHistory } = useIndexedDB();

  useEffect(() => {
    reload();
  }, [reload]);

  const totalSessions = sessions.length;
  const bestScore = totalSessions > 0 ? Math.max(...sessions.map((s) => s.score)) : 0;
  const avgAccuracy =
    totalSessions > 0
      ? Math.round(sessions.reduce((acc, s) => acc + s.accuracyPercentage, 0) / totalSessions)
      : 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" /> Retour
        </Button>

        <Badge variant="emerald" size="md">
          <HardDrive className="h-3.5 w-3.5" />
          IndexedDB Synced
        </Badge>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Historique des Quizzes &amp; Statistiques
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Toutes les sessions de jeu conservées en mémoire locale sécurisée (IndexedDB)
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Parties Jouées" description="Nombre total de quiz terminés">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {totalSessions}
            </span>
            <Database className="h-6 w-6 text-emerald-500" />
          </div>
        </Card>

        <Card title="Meilleur Score" description="Record personnel absolu">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-amber-500">
              {bestScore} pts
            </span>
            <Trophy className="h-6 w-6 text-amber-500" />
          </div>
        </Card>

        <Card title="Précision Moyenne" description="Taux de bonnes réponses">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-sky-500">
              {avgAccuracy}%
            </span>
            <Award className="h-6 w-6 text-sky-500" />
          </div>
        </Card>
      </div>

      {/* Session History List */}
      <Card
        title="Historique des Sessions"
        description="Enregistrements chronologiques dans IndexedDB"
        headerAction={
          totalSessions > 0 ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (confirm('Voulez-vous effacer tout l\'historique d\'IndexedDB ?')) {
                  clearHistory();
                }
              }}
              className="text-rose-500 hover:text-rose-600"
            >
              <Trash2 className="h-4 w-4" /> Effacer l&apos;historique
            </Button>
          ) : undefined
        }
      >
        {!isLoaded ? (
          <p className="text-sm text-slate-400 py-6 text-center">
            Chargement de l&apos;historique depuis IndexedDB...
          </p>
        ) : sessions.length === 0 ? (
          <div className="py-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
            <Database className="h-8 w-8 mx-auto text-slate-400" />
            <p className="text-sm">Aucune session enregistrée pour le moment.</p>
            <p className="text-xs text-slate-400">Lancez un quiz pour alimenter IndexedDB !</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sessions.map((sess) => (
              <div
                key={sess.id}
                className="p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 flex items-center justify-between gap-3 text-xs sm:text-sm"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-slate-100 capitalize">
                      Quiz {sess.category}
                    </span>
                    <Badge variant="slate" size="sm" className="capitalize">
                      {sess.difficulty}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {new Date(sess.timestamp).toLocaleString()} • {sess.timeSpentSeconds}s de jeu
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                    {sess.score} pts
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    {sess.correctAnswers}/{sess.totalQuestions} ({sess.accuracyPercentage}%)
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};
