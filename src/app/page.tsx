'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { QuizHub } from '@/components/quiz/QuizHub';
import { QuizScreen } from '@/components/quiz/QuizScreen';
import { StickerQuizScreen } from '@/components/quiz/StickerQuizScreen';
import { QuizResults } from '@/components/quiz/QuizResults';
import { StatsDashboard } from '@/components/quiz/StatsDashboard';
import { SettingsPanel } from '@/components/features/SettingsPanel';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useIndexedDB } from '@/hooks/useIndexedDB';
import { QuizConfig, QuizSessionResult } from '@/types/geo';
import { UserPreferences, AppState } from '@/types/storage';
import { NavItem } from '@/types/ui';
import { PlayCircle, Globe, Map, Trophy, Settings as SettingsIcon } from 'lucide-react';

type ScreenMode = 'hub' | 'quiz' | 'quiz-world' | 'quiz-continent' | 'result' | 'stats' | 'settings';

const INITIAL_PREFERENCES: UserPreferences = {
  theme: 'system',
  compactMode: false,
  notificationsEnabled: true,
  autoSaveInterval: 30,
};

const INITIAL_APP_STATE: AppState = {
  lastActiveTab: 'hub',
  items: [],
  stats: {
    totalSessions: 0,
    lastSavedAt: null,
  },
};

export default function Home() {
  const [screenMode, setScreenMode] = useState<ScreenMode>('hub');
  const [activeQuizConfig, setActiveQuizConfig] = useState<QuizConfig | null>(null);
  const [lastSessionResult, setLastSessionResult] = useState<QuizSessionResult | null>(null);

  const { addSession, sessions } = useIndexedDB();
  const [preferences, setPreferences] = useLocalStorage<UserPreferences>(
    'geotour_user_preferences',
    INITIAL_PREFERENCES
  );
  const [appState, setAppState, resetAppState] = useLocalStorage<AppState>(
    'geotour_app_state',
    INITIAL_APP_STATE
  );

  // Navigation Items
  const navItems: NavItem[] = [
    {
      id: 'hub',
      label: 'Quiz QCM',
      href: '#',
      icon: PlayCircle,
    },
    {
      id: 'quiz-world',
      label: 'Quiz Monde',
      href: '#',
      icon: Globe,
    },
    {
      id: 'quiz-continent',
      label: 'Quiz Continent',
      href: '#',
      icon: Map,
    },
    {
      id: 'stats',
      label: 'Scores',
      href: '#',
      icon: Trophy,
      badge: sessions.length > 0 ? sessions.length : undefined,
    },
    {
      id: 'settings',
      label: 'Paramètres',
      href: '#',
      icon: SettingsIcon,
    },
  ];

  // Start Quiz Handler
  const handleStartQuiz = (config: QuizConfig) => {
    setActiveQuizConfig(config);
    setScreenMode('quiz');
  };

  // Quiz Complete Handler
  const handleCompleteQuiz = (result: QuizSessionResult) => {
    setLastSessionResult(result);
    setScreenMode('result');
  };

  return (
    <AppShell
      navItems={navItems}
      activeTab={screenMode === 'quiz' || screenMode === 'result' ? 'hub' : screenMode}
      onTabChange={(id) => setScreenMode(id as ScreenMode)}
      headerProps={{
        title: 'GEOTour Quiz',
        subtitle: 'Carte Vectorielle & IndexedDB',
      }}
    >
      {/* 1. QUIZ HUB SCREEN */}
      {screenMode === 'hub' && (
        <QuizHub
          onStartQuiz={handleStartQuiz}
          onOpenStats={() => setScreenMode('stats')}
          onOpenWorldQuiz={() => setScreenMode('quiz-world')}
          onOpenContinentQuiz={() => setScreenMode('quiz-continent')}
        />
      )}

      {/* 2. QUIZ MONDE (STICKERS PLANISPHÈRE) */}
      {screenMode === 'quiz-world' && (
        <StickerQuizScreen
          scope="world"
          onComplete={(res) => {
            addSession(res);
            setLastSessionResult(res);
            setScreenMode('result');
          }}
          onBack={() => setScreenMode('hub')}
        />
      )}

      {/* 3. QUIZ CONTINENT (STICKERS CONTINENTAUX) */}
      {screenMode === 'quiz-continent' && (
        <StickerQuizScreen
          scope="continent"
          initialContinentId="europe"
          onComplete={(res) => {
            addSession(res);
            setLastSessionResult(res);
            setScreenMode('result');
          }}
          onBack={() => setScreenMode('hub')}
        />
      )}

      {/* 4. ACTIVE QCM QUIZ RUNNER SCREEN */}
      {screenMode === 'quiz' && activeQuizConfig && (
        <QuizScreen
          key={JSON.stringify(activeQuizConfig)}
          config={activeQuizConfig}
          onCompleteQuiz={handleCompleteQuiz}
          onCancel={() => setScreenMode('hub')}
        />
      )}

      {/* 5. QUIZ RESULTS SUMMARY SCREEN */}
      {screenMode === 'result' && lastSessionResult && (
        <QuizResults
          result={lastSessionResult}
          onSaveToIndexedDB={addSession}
          onRetry={() => {
            if (activeQuizConfig) setScreenMode('quiz');
            else setScreenMode('hub');
          }}
          onHome={() => setScreenMode('hub')}
        />
      )}

      {/* 6. INDEXEDDB STATS & HISTORY SCREEN */}
      {screenMode === 'stats' && (
        <StatsDashboard onBack={() => setScreenMode('hub')} />
      )}

      {/* 7. SETTINGS SCREEN */}
      {screenMode === 'settings' && (
        <SettingsPanel
          preferences={preferences}
          onUpdatePreferences={(newPrefs) => setPreferences((p: UserPreferences) => ({ ...p, ...newPrefs }))}
          appState={appState}
          onImportState={(imported) => setAppState(imported)}
          onResetState={resetAppState}
        />
      )}
    </AppShell>
  );
}

