import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {createStackNavigator} from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import LoginScreen from '../screens/LoginScreen';
import MovieListScreen from '../screens/MovieListScreen';

import { NAVIGATION } from '../constants';


export type RootStackParamList = {
  Login: undefined;
  MovieList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationService: React.FC = () => {
  const { t } = useTranslation();

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
            options={{ title: t('popularMovies') }}
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