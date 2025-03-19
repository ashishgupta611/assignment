import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Button, View, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootState } from '../store';
import { styles } from '../styles/LoginStyle';
import { setCredentials } from '../reducers/userSlice';
import { login } from '../reducers/authSlice';
import { setLanguage } from '../reducers/settingsSlice';
import i18n from '../assets/i18n';

import { REGEX, LOCALIZATION_LANGUAGES, COLORS, STRINGS } from '../constants';

const LoginScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { language } = useSelector((state: RootState) => state.rootReducer.settings);
  const user = useSelector((state: RootState) => state.rootReducer.user);

  const [email, setEmail] = useState<string>(user.email ?? STRINGS.EMPTY);
  const [password, setPassword] = useState<string>(user.password ?? STRINGS.EMPTY);

  const validateEmail = (email: string) => REGEX.EMAIL.test(email);
  const isEmailValid = useMemo(() => email === STRINGS.EMPTY ? true : validateEmail(email), [email]);

  const validatePassword = (password: string) => REGEX.PASSWORD.test(password);
  const isFormValid = useMemo(() => isEmailValid && validatePassword(password), [email, password]);

  const handleEmailTextChange = (email: string) => {
    setEmail(email);
  };

  const onLanguageChange = (lan: 'ar' | 'en') => {
    dispatch(setLanguage(lan));
    i18n.changeLanguage(lan);
  };

  const handleLogin = () => {
    if (isFormValid) {
      dispatch(setCredentials({ email, password }));
      // TODO:: Setting 'User1' have no use here. 
      dispatch(login('User1'));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={language}
          onValueChange={onLanguageChange}
          style={styles.picker}
        >
          {Object.entries(LOCALIZATION_LANGUAGES).map(entry => (
            <Picker.Item key={entry[0]} label={t(entry[1])} value={entry[0]} />
          ))}
        </Picker>
      </View>
      <Text style={styles.formHeaderText}>{t('login')}</Text>
      <View style={styles.loginForm}>
        <Text style={styles.textLabel}>{t('email')}</Text>
        <TextInput
          style={[styles.input, !isEmailValid && { borderColor: COLORS.ERROR }]}
          placeholder={t('enterEmail')}
          value={email}
          onChangeText={handleEmailTextChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isEmailValid && (
          <Text style={styles.errorText}>{t('enter_valid_email')}</Text>
        )}
        <Text style={[styles.textLabel, styles.passwordLabel]}>{t('password')}</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder={t('enterPassword')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title={t('submit')}
          onPress={handleLogin}
          disabled={!isFormValid}
        />
      </View>
    </View>
  );
};

export default LoginScreen;