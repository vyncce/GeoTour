'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { StickerItem, StickerTarget, StickerQuizType, StickerQuizScope, QuizSessionResult } from '@/types/geo';
import { CONTINENTS_DATA } from '@/data/geoDataset';
import { generateStickerQuiz, calculateHaversineDistance, getCompassDirection, StickerQuizSession } from '@/lib/stickerQuizEngine';
import { soundFx } from '@/lib/soundEffects';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Globe,
  MapPin,
  Trophy,
  RotateCcw,
  Compass,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ZoomIn,
  ZoomOut,
  Flame,
  ArrowLeft,
  Move,
} from 'lucide-react';

export interface StickerQuizScreenProps {
  scope: StickerQuizScope;
  initialContinentId?: string;
  onComplete?: (result: QuizSessionResult) => void;
  onBack: () => void;
}

const SVG_WIDTH = 920;
const SVG_HEIGHT = 520;

export const StickerQuizScreen: React.FC<StickerQuizScreenProps> = ({
  scope,
  initialContinentId = 'europe',
  onComplete,
  onBack,
}) => {
  const [selectedContinent, setSelectedContinent] = useState<string>(initialContinentId);
  const [quizType, setQuizType] = useState<StickerQuizType>('countries');
  const [stickerCount, setStickerCount] = useState<number>(8);

  const [sessionData, setSessionData] = useState<StickerQuizSession | null>(null);
  const [stickers, setStickers] = useState<StickerItem[]>([]);
  const [targets, setTargets] = useState<StickerTarget[]>([]);
  const [selectedStickerId, setSelectedStickerId] = useState<string | null>(null);

  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);

  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error' | 'hint' | null;
    message: string;
    coords?: { x: number; y: number };
  }>({ type: null, message: '' });

  const [activeHintTargetId, setActiveHintTargetId] = useState<string | null>(null);

  // Zoom and Middle-Mouse Pan State
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Adaptive scale of targets / pins inversely proportional to zoom
  const targetScale = Math.max(0.4, 1 / Math.sqrt(zoomLevel));

  // Initialize or reset game session with D3 Natural Earth vector cartography
  const initSession = () => {
    const session = generateStickerQuiz(
      scope,
      selectedContinent,
      quizType,
      stickerCount,
      SVG_WIDTH,
      SVG_HEIGHT
    );

    setSessionData(session);
    setStickers(session.stickers);
    setTargets(session.targets);
    setSelectedStickerId(session.stickers[0]?.id || null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAttempts(0);
    setMistakes(0);
    setFeedback({ type: null, message: '' });
    setActiveHintTargetId(null);
    setIsGameFinished(false);
    setTimerSeconds(0);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    initSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, selectedContinent, quizType, stickerCount]);

  // Timer runner
  useEffect(() => {
    if (!isGameFinished) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isGameFinished]);

  // Active selected sticker object
  const activeSticker = useMemo(() => {
    return stickers.find((s) => s.id === selectedStickerId) || null;
  }, [stickers, selectedStickerId]);

  // Remaining unplaced stickers
  const unplacedStickers = useMemo(() => {
    return stickers.filter((s) => !s.isPlaced);
  }, [stickers]);

  const placedCount = stickers.length - unplacedStickers.length;
  const progressPercent = stickers.length > 0 ? Math.round((placedCount / stickers.length) * 100) : 0;

  // Middle mouse button panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 1) {
      // Middle mouse button pressed
      e.preventDefault();
      setIsPanning(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isPanning) return;
      e.preventDefault();
      const dx = (e.clientX - dragStartRef.current.x) / zoomLevel;
      const dy = (e.clientY - dragStartRef.current.y) / zoomLevel;
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      setPanOffset((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
    },
    [isPanning, zoomLevel]
  );

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (e.button === 1 || isPanning) {
      setIsPanning(false);
    }
  }, [isPanning]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoomLevel((z) => Math.min(3.5, z + 0.15));
    } else {
      setZoomLevel((z) => Math.max(1, z - 0.15));
    }
  };

  // Window listeners for smooth pan release
  useEffect(() => {
    if (isPanning) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isPanning, handleMouseMove, handleMouseUp]);

  // Select a sticker from tray
  const handleSelectSticker = (stickerId: string) => {
    const st = stickers.find((s) => s.id === stickerId);
    if (st && !st.isPlaced) {
      soundFx.playPop();
      setSelectedStickerId(stickerId);
      setFeedback({ type: null, message: '' });
    }
  };

  // Attempt placing active sticker on a map target
  const handleTargetClick = (target: StickerTarget) => {
    if (!activeSticker || target.placedSticker || isGameFinished) return;

    setAttempts((prev) => prev + 1);

    // Check if this target matches the active sticker
    if (target.stickerId === activeSticker.id) {
      // SUCCESS!
      soundFx.playSuccess();
      const streakBonus = Math.min(3, 1 + streak * 0.25);
      const points = Math.round(150 * streakBonus);

      setScore((prev) => prev + points);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Update sticker state
      setStickers((prev) =>
        prev.map((s) => (s.id === activeSticker.id ? { ...s, isPlaced: true } : s))
      );

      // Update target state
      setTargets((prev) =>
        prev.map((t) => (t.id === target.id ? { ...t, placedSticker: activeSticker } : t))
      );

      setFeedback({
        type: 'success',
        message: `Parfait ! ${activeSticker.flag} ${activeSticker.label} placé avec succès (+${points} pts) !`,
        coords: target.svgCoords,
      });

      setActiveHintTargetId(null);

      // Automatically select next unplaced sticker
      const nextRemaining = stickers.filter((s) => !s.isPlaced && s.id !== activeSticker.id);
      if (nextRemaining.length > 0) {
        setSelectedStickerId(nextRemaining[0].id);
      } else {
        // Game Completed!
        setSelectedStickerId(null);
        setIsGameFinished(true);
        soundFx.playVictory();
      }
    } else {
      // MISTAKE
      soundFx.playError();
      setMistakes((prev) => prev + 1);
      setStreak(0);
      setScore((prev) => Math.max(0, prev - 15));

      // Calculate distance and direction for friendly feedback
      const dist = calculateHaversineDistance(
        target.coords.lat,
        target.coords.lng,
        activeSticker.coords.lat,
        activeSticker.coords.lng
      );
      const direction = getCompassDirection(
        target.coords.lat,
        target.coords.lng,
        activeSticker.coords.lat,
        activeSticker.coords.lng
      );

      setFeedback({
        type: 'error',
        message: `Emplacement incorrect pour ${activeSticker.label}. Dirigez-vous vers le ${direction} (~${dist.toLocaleString()} km).`,
        coords: target.svgCoords,
      });
    }
  };

  // Provide an adaptive hint for the currently selected sticker
  const handleUseHint = () => {
    if (!activeSticker) return;

    const matchingTarget = targets.find((t) => t.stickerId === activeSticker.id);
    if (!matchingTarget) return;

    soundFx.playPop();
    setActiveHintTargetId(matchingTarget.id);
    setScore((prev) => Math.max(0, prev - 25));

    setFeedback({
      type: 'hint',
      message: `Indice : ${activeSticker.label} se situe au repère clignotant en jaune sur la carte !`,
      coords: matchingTarget.svgCoords,
    });
  };

  // Format time display (MM:SS)
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Build QuizSessionResult for IDB storage
  const handleSaveResult = () => {
    const accuracy = attempts > 0 ? Math.round(((attempts - mistakes) / attempts) * 100) : 100;
    const finalResult: QuizSessionResult = {
      id: `session_sticker_${Date.now()}`,
      timestamp: new Date().toISOString(),
      category: quizType === 'capitals' ? 'capitals' : 'countries',
      difficulty: stickerCount <= 5 ? 'easy' : stickerCount <= 10 ? 'medium' : 'hard',
      totalQuestions: stickers.length,
      correctAnswers: stickers.length,
      score,
      maxScore: stickers.length * 150,
      accuracyPercentage: accuracy,
      timeSpentSeconds: timerSeconds,
      continentId: scope === 'continent' ? selectedContinent : undefined,
      answers: stickers.map((s) => ({
        questionId: s.id,
        questionPrompt: `Placer le sticker : ${s.label}`,
        userAnswer: s.label,
        correctAnswer: s.label,
        isCorrect: true,
        timeSpentSeconds: Math.round(timerSeconds / stickers.length),
        pointsEarned: 150,
      })),
    };

    if (onComplete) {
      onComplete(finalResult);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto animate-in fade-in duration-300">
      {/* 1. Header Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 rounded-3xl shadow-sm">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="min-h-11 min-w-11 p-2 rounded-xl">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {scope === 'world' ? <Globe className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                {scope === 'world' ? 'Quiz Monde : D3 Natural Earth 50m' : 'Quiz Continent : D3 Cartographie Haute Fidélité'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sélectionnez un sticker ci-dessous puis touchez son repère sur la carte vectorielle.
            </p>
          </div>
        </div>

        {/* Live Metrics: Score, Streak, Timer */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
          {streak > 1 && (
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold animate-bounce">
              <Flame className="h-4 w-4 fill-current" />
              Série x{(1 + streak * 0.25).toFixed(1)}
            </div>
          )}

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            <Trophy className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{score}</span> pts
          </div>

          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">
            ⏱️ {formatTime(timerSeconds)}
          </div>
        </div>
      </div>

      {/* 2. Options / Filter Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100/80 dark:bg-slate-850/80 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
        {/* Continent Picker (if Continent mode) */}
        {scope === 'continent' ? (
          <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
            {CONTINENTS_DATA.map((cont) => (
              <button
                key={cont.id}
                onClick={() => setSelectedContinent(cont.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all min-h-11 shrink-0 ${
                  selectedContinent === cont.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {cont.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-semibold px-2">
            <Compass className="h-4 w-4 text-emerald-500" />
            Projection Natural Earth 1 (208 Pays &amp; Territoires)
          </div>
        )}

        {/* Game Mode Selector (Pays, Capitales, Mixte) */}
        <div className="flex items-center gap-2">
          <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            {(
              [
                { id: 'countries', label: '🗺️ Pays' },
                { id: 'capitals', label: '🏛️ Capitales' },
                { id: 'mixed', label: '🔀 Mixte' },
              ] as { id: StickerQuizType; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setQuizType(t.id)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all min-h-9.5 ${
                  quizType === t.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Reset / Reroll Session Button */}
          <Button variant="ghost" size="sm" onClick={initSession} title="Nouvelle manche" className="min-h-11 min-w-11 p-2 rounded-xl">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 3. Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span>Progression des stickers</span>
          <span>
            {placedCount} / {stickers.length} placés ({progressPercent}%)
          </span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 4. Interactive Map Container with Middle-Mouse Pan & Zoom */}
      <div
        ref={mapContainerRef}
        onMouseDown={handleMouseDown}
        onWheel={handleWheel}
        className={cn(
          'relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-950 shadow-xl min-h-95 sm:min-h-115 select-none',
          isPanning ? 'cursor-grabbing' : 'cursor-default'
        )}
      >
        {/* Floating Zoom & Pan Controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700/60 shadow-lg">
          <button
            onClick={() => setZoomLevel((z) => Math.min(3.5, z + 0.3))}
            className="p-2 min-h-10 min-w-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
            title="Zoom Avant"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(1, z - 0.3))}
            className="p-2 min-h-10 min-w-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
            title="Zoom Arrière"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              setZoomLevel(1);
              setPanOffset({ x: 0, y: 0 });
            }}
            className="p-2 min-h-10 min-w-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition text-[10px] font-bold"
            title="Réinitialiser la vue"
          >
            1x
          </button>
        </div>

        {/* Pan Helper Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 p-1.5 px-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-400 text-[10px] pointer-events-none shadow-md">
          <Move className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Clic molette enfoncé + glisser pour déplacer</span>
          <span className="sm:hidden">Molette : Déplacer</span>
        </div>

        {/* Floating Active Sticker Instruction Banner */}
        {activeSticker && !isGameFinished && (
          <div className="absolute top-14 left-4 z-20 max-w-sm bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-500/40 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeSticker.flag}</span>
                <div>
                  <p className="text-[11px] text-emerald-400 font-bold uppercase tracking-wide">
                    Où se trouve {activeSticker.type === 'capital' ? 'la capitale' : 'le pays'} ?
                  </p>
                  <p className="text-sm font-extrabold text-white">{activeSticker.label}</p>
                </div>
              </div>
              <button
                onClick={handleUseHint}
                className="p-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1 transition"
                title="Obtenir un indice (-25 pts)"
              >
                <Lightbulb className="h-3.5 w-3.5" />
                Indice
              </button>
            </div>
          </div>
        )}

        {/* Live Feedback Overlay Toast */}
        {feedback.message && (
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 px-5 py-2.5 rounded-2xl shadow-2xl border text-xs sm:text-sm font-bold flex items-center gap-2 max-w-md text-center backdrop-blur-lg animate-in fade-in zoom-in duration-200 ${
              feedback.type === 'success'
                ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50 shadow-emerald-500/20'
                : feedback.type === 'error'
                ? 'bg-rose-950/90 text-rose-200 border-rose-500/50 shadow-rose-500/20'
                : 'bg-amber-950/90 text-amber-200 border-amber-500/50 shadow-amber-500/20'
            }`}
          >
            {feedback.type === 'success' && <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />}
            {feedback.type === 'error' && <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />}
            {feedback.type === 'hint' && <Lightbulb className="h-5 w-5 text-amber-400 shrink-0" />}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* SVG Map Canvas with D3-geo Natural Earth Vector Paths */}
        <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full h-auto max-h-125 transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
              transformOrigin: 'center center',
            }}
          >
            <defs>
              {/* Oceanic Background Gradient */}
              <radialGradient id="oceanGrad" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#0b1329" />
                <stop offset="100%" stopColor="#030712" />
              </radialGradient>

              {/* Land Glow Filter */}
              <filter id="landGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0284c7" floodOpacity="0.2" />
              </filter>
            </defs>

            {/* Ocean Basin */}
            <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="url(#oceanGrad)" />

            {/* Sphere Horizon (World Mode) */}
            {sessionData?.spherePath && (
              <path d={sessionData.spherePath} fill="none" stroke="#1e293b" strokeWidth="1.5" />
            )}

            {/* Graticule Grid Lines */}
            {sessionData?.graticulePath && (
              <path
                d={sessionData.graticulePath}
                fill="none"
                stroke="#334155"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                opacity="0.4"
              />
            )}

            {/* Natural Earth 50m Country Vector Outlines */}
            <g filter="url(#landGlow)">
              {sessionData?.countryPaths.map((country) => (
                <path
                  key={country.id}
                  d={country.d}
                  className="fill-slate-800/90 stroke-slate-700/80 stroke-1 hover:fill-slate-750 transition-colors duration-200"
                />
              ))}
            </g>

            {/* TARGET PINS ON MAP (Counter-scaled with zoom) */}
            {targets.map((target) => {
              const isPlaced = !!target.placedSticker;
              const isHinted = activeHintTargetId === target.id;

              return (
                <g
                  key={target.id}
                  transform={`translate(${target.svgCoords.x}, ${target.svgCoords.y}) scale(${targetScale})`}
                  onClick={() => handleTargetClick(target)}
                  className="cursor-pointer group select-none"
                >
                  {/* If NOT placed yet */}
                  {!isPlaced && (
                    <>
                      {/* Pulse Ring when Active */}
                      {isHinted ? (
                        <circle r="22" className="fill-amber-500/20 stroke-amber-400 stroke-2 animate-ping" />
                      ) : activeSticker ? (
                        <circle
                          r="18"
                          className="fill-emerald-500/10 stroke-emerald-400/60 stroke-1.5 animate-pulse group-hover:scale-125 transition-transform"
                        />
                      ) : null}

                      {/* Target Base Disc */}
                      <circle
                        r="10"
                        className={`transition-all duration-200 ${
                          isHinted
                            ? 'fill-amber-400 stroke-white stroke-2 shadow-lg shadow-amber-400'
                            : 'fill-slate-900 stroke-emerald-400/80 stroke-2 group-hover:fill-emerald-500 group-hover:stroke-white'
                        }`}
                      />

                      {/* Target Inner Dot */}
                      <circle
                        r="4"
                        className={isHinted ? 'fill-slate-950' : 'fill-emerald-400 group-hover:fill-white'}
                      />

                      {/* Tooltip on Hover */}
                      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                        <rect
                          x="-45"
                          y="-32"
                          width="90"
                          height="20"
                          rx="6"
                          className="fill-slate-900/95 stroke-slate-700 stroke-1"
                        />
                        <text
                          x="0"
                          y="-18"
                          textAnchor="middle"
                          className="fill-emerald-300 text-[10px] font-bold"
                        >
                          Placer ici ?
                        </text>
                      </g>
                    </>
                  )}

                  {/* If PLACED: Render the Pinned Sticker Card */}
                  {isPlaced && target.placedSticker && (
                    <g className="animate-in zoom-in duration-300">
                      {/* Pin Stem */}
                      <line x1="0" y1="0" x2="0" y2="-12" stroke="#10b981" strokeWidth="2" />
                      <circle r="3" fill="#10b981" />

                      {/* Badge Background */}
                      <g transform="translate(0, -22)">
                        <rect
                          x={-(target.placedSticker.label.length * 3.8 + 18)}
                          y="-10"
                          width={target.placedSticker.label.length * 7.6 + 36}
                          height="20"
                          rx="10"
                          className="fill-emerald-950 stroke-emerald-400 stroke-1.5 filter drop-shadow-md"
                        />

                        {/* Flag Emoji */}
                        <text
                          x={-(target.placedSticker.label.length * 3.8 + 8)}
                          y="4"
                          className="text-[11px]"
                        >
                          {target.placedSticker.flag}
                        </text>

                        {/* Name */}
                        <text
                          x={6}
                          y="4"
                          textAnchor="middle"
                          className="fill-emerald-100 text-[10px] font-extrabold tracking-tight"
                        >
                          {target.placedSticker.label}
                        </text>

                        {/* Green Checkmark */}
                        <circle
                          cx={target.placedSticker.label.length * 3.8 + 10}
                          cy="0"
                          r="4"
                          className="fill-emerald-400"
                        />
                      </g>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* 5. STICKER TRAY DOCK */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-5 rounded-3xl shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
              🏷️
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
              Stickers à Placer sur la Carte
            </h3>
            <Badge variant="emerald" size="sm">
              {unplacedStickers.length} restant{unplacedStickers.length > 1 ? 's' : ''}
            </Badge>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
            Cliquez sur un sticker pour le sélectionner, puis touchez sa position sur la carte.
          </p>
        </div>

        {/* Sticker Cards Bar (Horizontal Grid / Wrap) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
          {stickers.map((sticker) => {
            const isSelected = selectedStickerId === sticker.id;
            const isPlaced = sticker.isPlaced;

            return (
              <button
                key={sticker.id}
                disabled={isPlaced}
                onClick={() => handleSelectSticker(sticker.id)}
                className={`p-2.5 rounded-2xl border text-center transition-all duration-200 min-h-11 flex flex-col items-center justify-center relative select-none ${
                  isPlaced
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-900 opacity-60 cursor-default'
                    : isSelected
                    ? 'bg-linear-to-b from-emerald-500 to-teal-600 text-white border-transparent shadow-lg shadow-emerald-500/40 ring-4 ring-emerald-500/20 scale-105'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-750'
                }`}
              >
                {/* Placed checkmark overlay */}
                {isPlaced && (
                  <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                )}

                <span className="text-xl sm:text-2xl mb-1">{sticker.flag}</span>
                <span className="text-xs font-bold leading-tight line-clamp-1 truncate w-full">
                  {sticker.label}
                </span>
                <span
                  className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full mt-1 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {sticker.type === 'capital' ? 'Capitale' : 'Pays'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. GAME COMPLETED CELEBRATION MODAL */}
      {isGameFinished && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-tr from-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-500/30">
              <Trophy className="h-10 w-10 animate-bounce" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                Félicitations ! 🌍
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Tous les stickers ont été placés avec succès sur la carte Natural Earth !
              </p>
            </div>

            {/* Score Stats Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Score Final</p>
                <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {score}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Précision</p>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
                  {attempts > 0 ? Math.round(((attempts - mistakes) / attempts) * 100) : 100}%
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Temps</p>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
                  {formatTime(timerSeconds)}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="primary" size="lg" onClick={handleSaveResult} className="shadow-lg shadow-emerald-600/30">
                <Trophy className="h-4 w-4" /> Enregistrer dans l&apos;Historique
              </Button>
              <Button variant="secondary" size="lg" onClick={initSession}>
                <RotateCcw className="h-4 w-4" /> Rejouer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
