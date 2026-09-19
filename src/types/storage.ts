import { DifficultyLevel } from '@/types/geo';

export interface LocalStorageOptions<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: unknown) => void;
}

export type StorageKey = 'geotour_app_state' | 'geotour_theme' | 'geotour_user_preferences';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  compactMode: boolean;
  notificationsEnabled: boolean;
  autoSaveInterval: number; // in seconds
  // Quiz configuration and regional filters
  difficulty: DifficultyLevel;
  selectedContinent: string;
  selectedCountry: string;
  questionCount: number;
}

export interface AppState {
  lastActiveTab: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    pinned?: boolean;
  }>;
  stats: {
    totalSessions: number;
    lastSavedAt: string | null;
  };
}
