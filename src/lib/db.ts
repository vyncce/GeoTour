import { QuizSessionResult, CountryMastery } from '@/types/geo';

const DB_NAME = 'GEOTourDB';
const DB_VERSION = 1;
const SESSIONS_STORE = 'sessions';
const MASTERY_STORE = 'mastery';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      reject(new Error('IndexedDB non supporté ou environnement SSR'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains(SESSIONS_STORE)) {
        const sessionStore = db.createObjectStore(SESSIONS_STORE, { keyPath: 'id' });
        sessionStore.createIndex('timestamp', 'timestamp', { unique: false });
        sessionStore.createIndex('category', 'category', { unique: false });
        sessionStore.createIndex('difficulty', 'difficulty', { unique: false });
      }

      if (!db.objectStoreNames.contains(MASTERY_STORE)) {
        db.createObjectStore(MASTERY_STORE, { keyPath: 'countryId' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Saves a completed quiz session into IndexedDB
 */
export async function saveQuizSession(session: QuizSessionResult): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([SESSIONS_STORE, MASTERY_STORE], 'readwrite');
    const sessionStore = tx.objectStore(SESSIONS_STORE);
    sessionStore.put(session);

    // Update country mastery if countryId present
    if (session.countryId) {
      const masteryStore = tx.objectStore(MASTERY_STORE);
      const getReq = masteryStore.get(session.countryId);

      getReq.onsuccess = () => {
        const existing: CountryMastery = getReq.result || {
          countryId: session.countryId!,
          countryName: session.countryId,
          totalQuizzes: 0,
          bestScore: 0,
          accuracyRate: 0,
          lastPlayedAt: new Date().toISOString(),
        };

        const totalQuizzes = existing.totalQuizzes + 1;
        const bestScore = Math.max(existing.bestScore, session.score);
        const accuracyRate = Math.round(
          (existing.accuracyRate * existing.totalQuizzes + session.accuracyPercentage) / totalQuizzes
        );

        masteryStore.put({
          countryId: session.countryId!,
          countryName: session.countryId,
          totalQuizzes,
          bestScore,
          accuracyRate,
          lastPlayedAt: session.timestamp,
        });
      };
    }

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (error) {
    console.warn('[IndexedDB] Fallback sur sauvegarde mémoire/storage:', error);
  }
}

/**
 * Retrieves all saved quiz sessions from IndexedDB
 */
export async function getAllQuizSessions(): Promise<QuizSessionResult[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(SESSIONS_STORE, 'readonly');
    const store = tx.objectStore(SESSIONS_STORE);
    const index = store.index('timestamp');

    return new Promise((resolve, reject) => {
      const request = index.openCursor(null, 'prev'); // Most recent first
      const results: QuizSessionResult[] = [];

      request.onsuccess = () => {
        const cursor = request.result;
        if (cursor) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results);
        }
      };

      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.warn('[IndexedDB] Erreur de lecture des sessions:', error);
    return [];
  }
}

/**
 * Clears all history from IndexedDB
 */
export async function clearQuizHistory(): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([SESSIONS_STORE, MASTERY_STORE], 'readwrite');
    tx.objectStore(SESSIONS_STORE).clear();
    tx.objectStore(MASTERY_STORE).clear();
  } catch (error) {
    console.warn('[IndexedDB] Erreur lors du netoyage:', error);
  }
}
