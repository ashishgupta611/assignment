import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import LoginScreen from '../screens/LoginScreen';
import MovieListScreen from '../screens/MovieListScreen';

import { NAVIGATION } from '../constants';

// Define the types for your navigation stack
export type RootStackParamList = {
  Login: undefined;
  MovieList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationService: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NAVIGATION.LOGIN}
          component={LoginScreen}
          options={{ title: t('login') }}
        />
        <Stack.Screen
          name={NAVIGATION.MovieList}
          component={MovieListScreen}
          options={{ title: t('popularMovies') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationService;