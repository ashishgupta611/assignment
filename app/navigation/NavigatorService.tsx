import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import MovieListScreen from '../screens/MovieListScreen';

// Define the types for your navigation stack
export type RootStackParamList = {
  Login: undefined;
  MovieList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationService: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{ title: 'Popular Movies' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationService;