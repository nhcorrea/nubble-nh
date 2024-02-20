import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackParamList} from '@routes';
import {
  ForgotPassword,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';

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
