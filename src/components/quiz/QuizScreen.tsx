'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { MinimalistMap, MapMarker } from '@/components/geo/MinimalistMap';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { QuizConfig, Question, AnswerLog, QuizSessionResult } from '@/types/geo';
import { generateQuizQuestions, calculateQuizResult } from '@/lib/quizEngine';
import { Timer, Flame, ArrowRight, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export interface QuizScreenProps {
  config: QuizConfig;
  onCompleteQuiz: (result: QuizSessionResult) => void;
  onCancel: () => void;
}

const QUESTION_TIMER_SECONDS = 30;

export const QuizScreen: React.FC<QuizScreenProps> = ({ config, onCompleteQuiz, onCancel }) => {
  // Initialize questions lazily
  const [questions] = useState<Question[]>(() => generateQuizQuestions(config));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [answerLogs, setAnswerLogs] = useState<AnswerLog[]>([]);
  const [streak, setStreak] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIMER_SECONDS);
  const [totalTimeSpent, setTotalTimeSpent] = useState<number>(0);

  const currentQuestion = questions[currentIndex];

  // Option selection handler defined before timer effect
  const handleSelectOption = useCallback(
    (index: number) => {
      if (isAnswered || !currentQuestion) return;

      setSelectedOptionIndex(index);
      setIsAnswered(true);

      const isCorrect = index === currentQuestion.correctOptionIndex;
      const timeBonus = Math.max(0, timeLeft * 2);
      const pointsEarned = isCorrect ? 100 + timeBonus : 0;

      if (isCorrect) setStreak((s) => s + 1);
      else setStreak(0);

      const newLog: AnswerLog = {
        questionId: currentQuestion.id,
        questionPrompt: currentQuestion.prompt,
        userAnswer: index >= 0 ? currentQuestion.options[index] : 'Temps Écoule',
        correctAnswer: currentQuestion.options[currentQuestion.correctOptionIndex],
        isCorrect,
        timeSpentSeconds: QUESTION_TIMER_SECONDS - timeLeft,
        pointsEarned,
      };

      setAnswerLogs((prev) => [...prev, newLog]);
    },
    [isAnswered, currentQuestion, timeLeft]
  );

  // Timer countdown handler
  useEffect(() => {
    if (!currentQuestion || isAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSelectOption(-1);
          return 0;
        }
        return prev - 1;
      });
      setTotalTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isAnswered, currentQuestion, handleSelectOption]);

  // Next Question or Finish Quiz
  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIMER_SECONDS);
    } else {
      const sessionResult = calculateQuizResult(config, answerLogs, totalTimeSpent);
      onCompleteQuiz(sessionResult);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="py-20 text-center text-slate-400">
        Chargement des questions du quiz...
      </div>
    );
  }

  const mapMarkers: MapMarker[] = [
    {
      id: currentQuestion.targetId,
      name: currentQuestion.targetName,
      coords: currentQuestion.targetCoords,
      isCapital: currentQuestion.category === 'capitals',
      isCorrect: isAnswered
        ? selectedOptionIndex === currentQuestion.correctOptionIndex
        : null,
    },
  ];

  return (
    <div className="space-y-4 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Badge variant="emerald" size="md">
            Question {currentIndex + 1} / {questions.length}
          </Badge>
          {streak > 1 && (
            <Badge variant="amber" size="md" className="animate-bounce">
              <Flame className="h-3.5 w-3.5 fill-amber-500" />
              Série x{streak} !
            </Badge>
          )}
        </div>

        {/* Timer Bar */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
          <Timer className={`h-4 w-4 ${timeLeft < 10 ? 'text-rose-500 animate-pulse' : 'text-emerald-500'}`} />
          <span>{timeLeft}s</span>
        </div>

        <Button variant="ghost" size="sm" onClick={onCancel}>
          Quitter
        </Button>
      </div>

      {/* Interactive Minimalist Map */}
      <MinimalistMap
        category={currentQuestion.category}
        continentId={currentQuestion.continentId}
        countryId={currentQuestion.countryId}
        targetId={currentQuestion.targetId}
        targetName={currentQuestion.targetName}
        markers={mapMarkers}
        targetCoords={currentQuestion.targetCoords}
        activeMarkerId={currentQuestion.targetId}
        showLabels={isAnswered}
        className="shadow-xl"
      />

      {/* Question Prompt */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {currentQuestion.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              {currentQuestion.prompt}
            </p>
          </div>
          {currentQuestion.hint && (
            <Badge variant="sky" size="sm" className="hidden sm:inline-flex">
              <HelpCircle className="h-3 w-3" />
              {currentQuestion.hint}
            </Badge>
          )}
        </div>

        {/* QCM Answer Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionIndex === idx;
            const isCorrectOption = idx === currentQuestion.correctOptionIndex;

            let optionStyle =
              'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-750';

            if (isAnswered) {
              if (isCorrectOption) {
                optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold ring-2 ring-emerald-500/40';
              } else if (isSelected) {
                optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400 font-bold';
              } else {
                optionStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
              }
            }

            return (
              <button
                key={option}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 min-h-[44px] text-left text-sm font-medium ${optionStyle}`}
              >
                <span>{option}</span>
                {isAnswered && isCorrectOption && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrectOption && (
                  <XCircle className="h-5 w-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Next Question Footer */}
        {isAnswered && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 animate-in fade-in">
            <div className="text-xs sm:text-sm font-semibold">
              {selectedOptionIndex === currentQuestion.correctOptionIndex ? (
                <span className="text-emerald-500 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Bravo ! Réponse exacte.
                </span>
              ) : (
                <span className="text-rose-500 flex items-center gap-1.5">
                  <XCircle className="h-4 w-4" /> Dommage ! La réponse était &quot;{currentQuestion.options[currentQuestion.correctOptionIndex]}&quot;.
                </span>
              )}
            </div>

            <Button variant="primary" onClick={handleNextQuestion}>
              {currentIndex + 1 < questions.length ? 'Question Suivante' : 'Voir les Résultats'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
