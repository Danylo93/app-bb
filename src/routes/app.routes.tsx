import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Resgate} from '../screens/Home/Resgate/index';
import {SimulationResgate} from '../screens/Home/SimulationResgate/index';
import {Demo} from '../screens/Home/Teste';

const AppStack = createStackNavigator();

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
