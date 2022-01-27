import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/global/styles/theme';
import {AppRoutes} from './src/routes/app.routes';
import AuthRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
