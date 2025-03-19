// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        english: 'English',
        arabic: 'Arabic',
        login: 'Login',
        email: 'Email:',
        success: 'Success',
        loading: 'Loading ...',
        error: 'Error:',
        login_success_message:'Login successful!',
        enter_valid_email: 'Please enter a valid email address.',
        enterEmail: 'Enter your email',
        password: 'Password:',
        enterPassword:'Enter your password',
        submit: 'Submit',
        moviesList: 'Movie List',
        popularMovies: 'Popular Movies',
      },
    },
    ar: {
      translation: {
        english: 'الإنجليزية',
        arabic: 'العربية',
        login: 'تسجيل الدخول',
        email: 'البريد الإلكتروني:',
        success: 'نجاح',
        loading: 'جاري التحميل ...',
        error: 'خطأ:',
        login_success_message: 'تم تسجيل الدخول بنجاح!',
        enter_valid_email: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
        enterEmail: 'أدخل بريدك الإلكتروني',
        password: 'كلمة المرور:',
        enterPassword: 'أدخل كلمة المرور',
        submit: 'إرسال',
        moviesList: 'قائمة الأفلام',
        popularMovies: 'الأفلام الشائعة',
      },
    },
  },
  //lng: 'en',
  fallbackLng: 'en',
});

export default i18n;