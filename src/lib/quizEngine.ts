import {
  QuizConfig,
  Question,
  AnswerLog,
  QuizSessionResult,
  City,
  Country,
} from '@/types/geo';
import { CONTINENTS_DATA, getAllCountries, getAllCities, getCountryById, getContinentById } from '@/data/geoDataset';

/**
 * Shuffles array in-place helper
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generates dynamic questions array for a Quiz session
 */
export function generateQuizQuestions(config: QuizConfig): Question[] {
  const { category, continentId, countryId, questionCount, difficulty } = config;
  const optionCount = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 6 : 4;
  const questions: Question[] = [];

  // Filter pool based on parameters
  let targetCountries = getAllCountries();
  if (continentId) {
    const cont = getContinentById(continentId);
    if (cont) targetCountries = cont.countries;
  }
  if (countryId) {
    targetCountries = targetCountries.filter((c) => c.id === countryId);
  }

  // 1. CATEGORY: CONTINENTS
  if (category === 'continents') {
    const shuffledContinents = shuffleArray(CONTINENTS_DATA);
    shuffledContinents.slice(0, questionCount).forEach((cont, idx) => {
      const wrongChoices = CONTINENTS_DATA.filter((c) => c.id !== cont.id).map((c) => c.name);
      const selectedWrong = shuffleArray(wrongChoices).slice(0, optionCount - 1);
      const options = shuffleArray([cont.name, ...selectedWrong]);

      questions.push({
        id: `q-cont-${idx}`,
        category: 'continents',
        title: `Continent #${idx + 1}`,
        prompt: `Identifier le continent correspondant à cette région :`,
        targetId: cont.id,
        targetName: cont.name,
        targetCoords: cont.centerCoords,
        options,
        correctOptionIndex: options.indexOf(cont.name),
        hint: `Code du continent: ${cont.code}`,
      });
    });
  }

  // 2. CATEGORY: COUNTRIES
  else if (category === 'countries') {
    const shuffledCountries = shuffleArray(targetCountries);
    shuffledCountries.slice(0, questionCount).forEach((country, idx) => {
      const wrongChoices = getAllCountries()
        .filter((c) => c.id !== country.id)
        .map((c) => c.name);
      const selectedWrong = shuffleArray(wrongChoices).slice(0, optionCount - 1);
      const options = shuffleArray([country.name, ...selectedWrong]);

      questions.push({
        id: `q-country-${idx}`,
        category: 'countries',
        title: `Pays #${idx + 1}`,
        prompt: `Quel est ce pays situé en ${getContinentById(country.continentId)?.name || 'monde'} ?`,
        targetId: country.id,
        targetName: country.name,
        targetCoords: country.centerCoords,
        options,
        correctOptionIndex: options.indexOf(country.name),
        continentId: country.continentId,
        countryId: country.id,
        hint: `${country.flag} Capitale : ${country.capital}`,
      });
    });
  }

  // 3. CATEGORY: CAPITALS
  else if (category === 'capitals') {
    const shuffledCountries = shuffleArray(targetCountries);
    shuffledCountries.slice(0, questionCount).forEach((country, idx) => {
      const wrongCapitals = getAllCountries()
        .filter((c) => c.id !== country.id)
        .map((c) => c.capital);
      const selectedWrong = shuffleArray(wrongCapitals).slice(0, optionCount - 1);
      const options = shuffleArray([country.capital, ...selectedWrong]);

      questions.push({
        id: `q-capital-${idx}`,
        category: 'capitals',
        title: `Capitale de : ${country.name} ${country.flag}`,
        prompt: `Quelle est la capitale officielle de ${country.name} ?`,
        targetId: country.id,
        targetName: country.capital,
        targetCoords: country.capitalCoords,
        options,
        correctOptionIndex: options.indexOf(country.capital),
        countryId: country.id,
        continentId: country.continentId,
        hint: `Située en ${country.name}`,
      });
    });
  }

  // 4. CATEGORY: MAJOR CITIES (5+ cities per country)
  else if (category === 'cities') {
    let citiesPool: { city: City; country: Country }[] = [];
    if (countryId) {
      const c = getCountryById(countryId);
      if (c) citiesPool = c.cities.map((city) => ({ city, country: c }));
    } else {
      const countries = continentId
        ? getAllCountries().filter((c) => c.continentId === continentId)
        : getAllCountries();
      citiesPool = countries.flatMap((c) => c.cities.map((city) => ({ city, country: c })));
    }

    const shuffledCities = shuffleArray(citiesPool);
    shuffledCities.slice(0, questionCount).forEach((item, idx) => {
      const { city, country } = item;
      const wrongCityNames = citiesPool
        .filter((i) => i.city.id !== city.id)
        .map((i) => i.city.name);
      const selectedWrong = shuffleArray(wrongCityNames).slice(0, optionCount - 1);
      const options = shuffleArray([city.name, ...selectedWrong]);

      questions.push({
        id: `q-city-${idx}`,
        category: 'cities',
        title: `Ville Principale : ${country.name} ${country.flag}`,
        prompt: `Localiser la ville de ${city.name} (${city.region || country.name}) :`,
        targetId: city.id,
        targetName: city.name,
        targetCoords: city.coords,
        options,
        correctOptionIndex: options.indexOf(city.name),
        countryId: country.id,
        continentId: country.continentId,
        hint: city.description || `Population: ${city.population}`,
      });
    });
  }

  return questions;
}

/**
 * Calculates score for a quiz session result
 */
export function calculateQuizResult(
  config: QuizConfig,
  answers: AnswerLog[],
  totalTimeSeconds: number
): QuizSessionResult {
  const diffMultiplier = config.difficulty === 'easy' ? 1 : config.difficulty === 'medium' ? 1.5 : 2;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const basePoints = answers.reduce((acc, curr) => acc + curr.pointsEarned, 0);

  const finalScore = Math.round(basePoints * diffMultiplier);
  const maxScore = answers.length * 150 * diffMultiplier;
  const accuracyPercentage = Math.round((correctCount / answers.length) * 100);

  return {
    id: `session-${Date.now()}`,
    timestamp: new Date().toISOString(),
    category: config.category,
    difficulty: config.difficulty,
    totalQuestions: answers.length,
    correctAnswers: correctCount,
    score: finalScore,
    maxScore,
    accuracyPercentage,
    timeSpentSeconds: totalTimeSeconds,
    continentId: config.continentId,
    countryId: config.countryId,
    answers,
  };
}
