// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        email: 'Email',
        password: 'Password',
        submit: 'Submit',
        popularMovies: 'Popular Movies',
      },
    },
    ar: {
      translation: {
        email: 'بريد إلكتروني',
        password: 'كلمة المرور',
        submit: 'يُقدِّم',
        popularMovies: 'الأفلام الشعبية',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;