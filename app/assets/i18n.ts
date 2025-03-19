// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login: 'Login',
        email: 'Email:',
        success: 'Success',
        login_success_message:'Login successful!',
        enter_valid_email: 'Please enter a valid email address.',
        enterEmail: 'Enter your email',
        password: 'Password:',
        enterPassword:'Enter your password',
        submit: 'Submit',
        popularMovies: 'Popular Movies',
      },
    },
    ar: {
      translation: {
        login: 'تسجيل الدخول',
        email: 'بريد إلكتروني',
        success: 'Success',
        login_success_message:'Login successful!',
        enter_valid_email: 'Please enter a valid email address.',
        enterEmail: 'Enter your email',
        password: 'كلمة المرور',
        enterPassword:'Enter your password',
        submit: 'يُقدِّم',
        popularMovies: 'الأفلام الشعبية',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;