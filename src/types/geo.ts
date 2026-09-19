export type QuizCategory = 'continents' | 'countries' | 'capitals' | 'cities';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GeoPoint {
  x: number; // Percentage 0 - 100 on map SVG
  y: number; // Percentage 0 - 100 on map SVG
}

export interface City {
  id: string;
  name: string;
  countryId: string;
  isCapital: boolean;
  coords: GeoPoint;
  population?: string;
  region?: string;
  description?: string;
}

export interface Country {
  id: string;
  name: string;
  continentId: string;
  capital: string;
  capitalCoords: GeoPoint;
  flag: string;
  centerCoords: GeoPoint;
  cities: City[]; // Guaranteed at least 5 cities per country
  svgPath?: string;
  description?: string;
}

export interface Continent {
  id: string;
  name: string;
  code: string;
  centerCoords: GeoPoint;
  countries: Country[];
}

export interface Question {
  id: string;
  category: QuizCategory;
  title: string;
  prompt: string;
  targetId: string;
  targetName: string;
  targetCoords: GeoPoint;
  options: string[]; // Answer choices (QCM or Map pinpoint)
  correctOptionIndex: number;
  continentId?: string;
  countryId?: string;
  hint?: string;
}

export interface QuizConfig {
  category: QuizCategory;
  difficulty: DifficultyLevel;
  continentId?: string; // Optional filter by continent
  countryId?: string;   // Optional filter by specific country
  questionCount: number; // Default 5, 10, or 20
  isSeries?: boolean;    // Series mode
}

export interface AnswerLog {
  questionId: string;
  questionPrompt: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  pointsEarned: number;
}

export interface QuizSessionResult {
  id: string;
  timestamp: string;
  category: QuizCategory;
  difficulty: DifficultyLevel;
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  maxScore: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  continentId?: string;
  countryId?: string;
  answers: AnswerLog[];
}

export interface CountryMastery {
  countryId: string;
  countryName: string;
  totalQuizzes: number;
  bestScore: number;
  accuracyRate: number;
  lastPlayedAt: string;
}
