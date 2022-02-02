import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Resgate} from '../screens/Auth/Resgate/index';
import {SimulationResgate} from '../screens/Auth/SimulationResgate/index';

const AppStack = createStackNavigator();

type RootStackParamList = {
  SimulationResgate: undefined;
  Resgate: undefined;
};

export type SimulationProps = NativeStackScreenProps<
  RootStackParamList,
  'SimulationResgate'
>;

export type ResgateProps = NativeStackScreenProps<
  RootStackParamList,
  'Resgate'
>;

const AuthRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Resgate">
      <AppStack.Screen name="Resgate" component={Resgate} />
      <AppStack.Screen name="SimulationResgate" component={SimulationResgate} />
    </AppStack.Navigator>
  );
};

export default AuthRoutes;
