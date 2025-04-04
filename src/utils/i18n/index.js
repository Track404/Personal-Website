import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLang from './locales/en/en.json';
import frLang from './locales/fr/fr.json';

const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
