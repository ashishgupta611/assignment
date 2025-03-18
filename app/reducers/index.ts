import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer, PersistConfig} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userSlice';
import authReducer from './authSlice';
import settingsReducer from './settingsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'auth', 'settings'], // Specify reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
