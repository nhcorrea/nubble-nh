import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackParamList} from './routesTypes';

import {ForgotPassword} from '#/screens/auth/ForgotPassword/ForgotPassword';
import {LoginScreen} from '#/screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from '#/screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '#/screens/auth/SuccessScreen/SuccessScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
