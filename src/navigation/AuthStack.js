import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from '../screen/GetStarted';
import Registration from '../screen/Auth/Registration';
import Login from '../screen/Auth/Login';
import Step1 from '../screen/Step1';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}
