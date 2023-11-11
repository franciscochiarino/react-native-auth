/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Router from './router/Router';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const App = (): JSX.Element => {
  return (
    <GluestackUIProvider config={config}>
      <Router />
    </GluestackUIProvider>
  );
};

export default App;
