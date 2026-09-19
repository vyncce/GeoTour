'use client';

import React, { useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { QuizSessionResult } from '@/types/geo';
import { Trophy, CheckCircle2, XCircle, RotateCcw, Home } from 'lucide-react';

export interface QuizResultsProps {
  result: QuizSessionResult;
  onSaveToIndexedDB: (result: QuizSessionResult) => Promise<void>;
  onRetry: () => void;
  onHome: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  result,
  onSaveToIndexedDB,
  onRetry,
  onHome,
}) => {
  useEffect(() => {
    onSaveToIndexedDB(result);
  }, [result, onSaveToIndexedDB]);

  const isHighAccuracy = result.accuracyPercentage >= 80;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-3xl mx-auto">
      {/* Trophy Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-8 text-white shadow-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4 shadow-lg shadow-amber-500/30">
          <Trophy className="h-8 w-8 animate-bounce" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {isHighAccuracy ? 'Félicitations ! Excellent Score !' : 'Quiz Terminé !'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Résultats enregistrés automatiquement dans votre historique IndexedDB
        </p>

        {/* Score & Accuracy Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 max-w-lg mx-auto">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-xs text-slate-400">Score Total</p>
            <p className="text-xl sm:text-2xl font-extrabold text-emerald-400">
              {result.score} pts
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-xs text-slate-400">Précision</p>
            <p className="text-xl sm:text-2xl font-extrabold text-amber-400">
              {result.accuracyPercentage}%
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-xs text-slate-400">Temps Total</p>
            <p className="text-xl sm:text-2xl font-extrabold text-sky-400">
              {result.timeSpentSeconds}s
            </p>
          </div>
        </div>
      </div>

      {/* Answer Details Breakdown */}
      <Card title="Détail des Réponses" description={`${result.correctAnswers} / ${result.totalQuestions} questions correctes`}>
        <div className="space-y-3">
          {result.answers.map((log, idx) => (
            <div
              key={idx}
              className={`p-3 sm:p-4 rounded-xl border flex items-center justify-between gap-3 text-xs sm:text-sm ${
                log.isCorrect
                  ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-800 dark:text-slate-200'
                  : 'bg-rose-500/5 border-rose-500/20 text-slate-800 dark:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {log.isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-500 shrink-0" />
                )}
                <div>
                  <p className="font-bold">{log.questionPrompt}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Votre réponse : <span className="font-semibold">{log.userAnswer}</span>
                    {!log.isCorrect && (
                      <span className="ml-2 text-emerald-600 dark:text-emerald-400">
                        (Attendu: {log.correctAnswer})
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <Badge variant={log.isCorrect ? 'emerald' : 'rose'} size="sm">
                +{log.pointsEarned} pts
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button variant="secondary" size="lg" onClick={onHome} className="flex-1">
          <Home className="h-4 w-4" /> Retour au Quiz Hub
        </Button>
        <Button variant="primary" size="lg" onClick={onRetry} className="flex-1 shadow-lg shadow-emerald-600/30">
          <RotateCcw className="h-4 w-4" /> Recommencer ce Quiz
        </Button>
      </div>
    </div>
  );
};
