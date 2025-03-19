import './app/assets/i18n'; // Add this import at the top
import React from 'react';
import NavigationService from './app/navigation/NavigatorService';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationService />
      </PersistGate>
    </Provider>
  );
}