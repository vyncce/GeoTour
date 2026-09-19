'use client';

import { useState, useCallback, useSyncExternalStore } from 'react';
import { QuizSessionResult } from '@/types/geo';
import { getAllQuizSessions, saveQuizSession, clearQuizHistory } from '@/lib/db';

const INDEXEDDB_UPDATE_EVENT = 'geotour-indexeddb-update';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(INDEXEDDB_UPDATE_EVENT, callback);
  return () => {
    window.removeEventListener(INDEXEDDB_UPDATE_EVENT, callback);
  };
}

let inMemorySessions: QuizSessionResult[] = [];

export function useIndexedDB() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const getSnapshot = useCallback(() => {
    return JSON.stringify(inMemorySessions);
  }, []);

  const getServerSnapshot = useCallback(() => {
    return '[]';
  }, []);

  const rawSnapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const sessions: QuizSessionResult[] = JSON.parse(rawSnapshot);

  // Initial load from IndexedDB
  const reload = useCallback(async () => {
    try {
      const data = await getAllQuizSessions();
      inMemorySessions = data;
      setIsLoaded(true);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event(INDEXEDDB_UPDATE_EVENT));
      }
    } catch {
      setIsLoaded(true);
    }
  }, []);

  // Save session & dispatch update
  const addSession = useCallback(async (session: QuizSessionResult) => {
    await saveQuizSession(session);
    inMemorySessions = [session, ...inMemorySessions];
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(INDEXEDDB_UPDATE_EVENT));
    }
  }, []);

  // Clear history
  const clearHistory = useCallback(async () => {
    await clearQuizHistory();
    inMemorySessions = [];
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(INDEXEDDB_UPDATE_EVENT));
    }
  }, []);

  return {
    sessions,
    isLoaded,
    reload,
    addSession,
    clearHistory,
  };
}
