import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {IconProps} from '@components'
import {
  ForgotPassword,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens'

export type RootStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color'>
  }
  ForgotPassword: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}