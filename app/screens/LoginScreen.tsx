import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, View, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles/LoginStyle';
import { setCredentials } from '../reducers/userSlice';
import { REGEX, NAVIGATION } from '../constants';


const LoginScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const validateEmail = (email: string) => REGEX.EMAIL.test(email);
  const validatePassword = (password: string) => REGEX.PASSWORD.test(password);

  const isFormValid = validateEmail(email) && validatePassword(password);

  const handleEmailTextChange = (email: string) => {
    setEmail(email);
    setIsEmailValid(validateEmail(email));
  };

  const handleLogin = () => {
    setIsEmailValid(validateEmail(email));

    if (isFormValid) {
      Alert.alert(t('success'), t('login_success_message'));
      dispatch(setCredentials({ email, password }));
      navigation.navigate(NAVIGATION.MovieList);
    } 
  };

  return (
    <View style={styles.container}>
      <Text>{t('email')}</Text>
      <TextInput
        style={[styles.input, !isEmailValid && { borderColor: 'red' }]} // Apply styles conditionally
        placeholder={t('enterEmail')}
        value={email}
        onChangeText={handleEmailTextChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!isEmailValid && (
        <Text style={styles.errorText}>{t('enter_valid_email')}</Text>
      )}

      <Text>{t('password')}</Text>
      <TextInput
        style={styles.input}
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
  );

};

export default LoginScreen;