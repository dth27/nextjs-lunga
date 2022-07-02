import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsOptions } from './translate';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'is',
  nsSeparator: ':',
  ...translationsOptions,
});

export default i18next;
