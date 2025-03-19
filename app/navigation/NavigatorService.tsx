import React, { useEffect } from 'react';
import i18n from '../assets/i18n';
import { View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { logout } from '../reducers/authSlice';
import { clearCredentials } from '../reducers/userSlice';
import { styles } from '../styles/CommonStyle';

import LoginScreen from '../screens/LoginScreen';
import MovieListScreen from '../screens/MovieListScreen';

import { NAVIGATION, COLORS } from '../constants';


export type RootStackParamList = {
  Login: undefined;
  MovieList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationService: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.rootReducer.settings);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleLogout = () => {
    dispatch(clearCredentials());
    dispatch(logout());  
  };

  const { isAuthenticated } = useSelector((state: RootState) => state.rootReducer.auth);

  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name={NAVIGATION.LOGIN}
            component={LoginScreen}
            options={{ title: t('login') }}
          /> */}
          <Stack.Screen
            name={NAVIGATION.MovieList}
            component={MovieListScreen}
            options={{
              title: t('popularMovies'),
              headerRight: () => (
                <View style={styles.container}>
                  <Button
                    onPress={handleLogout}
                    title={t('logout')}
                    color={COLORS.ERROR}
                  />
                </View>
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <LoginScreen />
    );
  }
};

export default NavigationService;