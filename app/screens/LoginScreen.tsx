import React, { useState, memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, Button, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootState } from '../store';
import { styles } from '../styles/LoginStyle';
import { setCredentials } from '../reducers/userSlice';
import { login } from '../reducers/authSlice';
import LanguagePicker from '../components/LanguagePicker';
import { REGEX, COLORS, STRINGS } from '../constants';

const LoginScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const handleLogin = () => {
    if (isFormValid) {
      dispatch(setCredentials({ email, password }));
      // TODO:: Setting 'User1' have no use here. 
      dispatch(login('User1'));
    }
  };

  const MemoizedPicker = memo(() => <LanguagePicker />);

  return (
    <View style={styles.container}>
      <MemoizedPicker />
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