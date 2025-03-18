// screens/Screen1.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { setCredentials } from '../reducers/userSlice';
//import { RootStackParamList } from '../navigation/NavigatorService';

const LoginScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,15}$/.test(password);

  const isFormValid = validateEmail(email) && validatePassword(password);

  const handleSubmit = () => {
    if (isFormValid) {
      dispatch(setCredentials({ email, password }));
      navigation.navigate("MovieList");
    } else {
      Alert.alert('Invalid Input', 'Please check your email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t('email')}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={t('submit')}
        onPress={handleSubmit}
        disabled={!isFormValid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;