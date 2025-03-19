// APIs
export const API = {
  URL: {
    MOVIESDB: 'https://api.themoviedb.org',
    IMAGE_DB: 'https://image.tmdb.org'
  },
  PATH: {
    POPULAR_MOVIE: '/3/movie/popular',
    POSTER_PATH: '/t/p/w500'
  },
} as const;

// Strings
export const NAVIGATION = {
  MovieList: 'MovieList',
  LOGIN: 'Login',
} as const;

// Regex
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, // Password validation
} as const;

// Numbers
export const NUMBERS = {
  COLUMNS: 2,
} as const;

export const LOCALIZATION_LANGUAGES = {
  en: 'english',
  ar: 'arabic',
} as const;

export const STRINGS = {
  EMPTY: '',
} as const;

// Colors
export const COLORS = {
  PRIMARY: '#3498db',
  SECONDARY: '#2ecc71',
  ERROR: '#e74c3c',
  BLACK: '#000000',
  SCREEN_BACKGROUND: '#f5f5f5'
} as const;
