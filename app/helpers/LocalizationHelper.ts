import { I18nManager } from 'react-native';
import i18n from '../assets/i18n';
import RNRestart from 'react-native-restart';

export const handleLanguageChange = (lan: 'ar' | 'en') => {
    i18n.changeLanguage(lan);
    enableRTL(lan === 'ar');
};

const enableRTL = async (isRTL: boolean) => {
  if (I18nManager.isRTL !== isRTL) {
    await I18nManager.forceRTL(isRTL);
    await I18nManager.allowRTL(isRTL);
    
    // Restart the app for layout direction change to take effect
    RNRestart.Restart();
  }
};
