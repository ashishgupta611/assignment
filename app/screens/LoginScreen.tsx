import React, { useState, memo, useMemo, useCallback } from 'react';
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

  const isEmailValid = useMemo(() => {
    return email === STRINGS.EMPTY ? true : REGEX.EMAIL.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => REGEX.PASSWORD.test(password), [password]);

  const handleEmailTextChange = useCallback((email: string) => {
    setEmail(email);
  }, [email]);

  const handleLogin = useCallback(() => {
    if (isEmailValid && isValidPassword) {
      dispatch(setCredentials({ email, password }));
      // TODO:: Setting 'User1' have no use here. 
      dispatch(login('User1'));
    }
  }, [email, password]);

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
          disabled={!(isEmailValid && isValidPassword)}
        />
      </View>
    </View>
  );
};

export default LoginScreen;