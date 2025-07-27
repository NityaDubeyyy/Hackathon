import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to SupplySetu': 'Welcome to SupplySetu',
      'Login / Register': 'Login / Register',
      'Dashboard': 'Dashboard',
      'Supplier Profile': 'Supplier Profile',
      'Home': 'Home',
      'Login': 'Login',
    },
  },
  hi: {
    translation: {
      'Welcome to SupplySetu': 'सप्लाईसेतु में आपका स्वागत है',
      'Login / Register': 'लॉगिन / पंजीकरण',
      'Dashboard': 'डैशबोर्ड',
      'Supplier Profile': 'आपूर्तिकर्ता प्रोफ़ाइल',
      'Home': 'होम',
      'Login': 'लॉगिन',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 