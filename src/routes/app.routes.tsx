import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Resgate} from '../screens/Auth/Resgate/index';
import {SimulationResgate} from '../screens/Auth/SimulationResgate/index';

const AppStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Resgate">
      <AppStack.Screen name="Resgate" component={Resgate} />
      <AppStack.Screen name="SimulationResgate" component={SimulationResgate} />
    </AppStack.Navigator>
  );
};

export default AuthRoutes;
