import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {AppStackParamList} from '@routes'
import {SettingsScreen} from '@screens'

import {AppTabNavigator, BottomTabStack} from './AppTabNavigator'

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabStack"
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
