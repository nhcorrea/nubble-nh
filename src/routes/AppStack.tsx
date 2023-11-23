import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AppStackParamList} from '@utils'

import {HomeScreen, SettingsScreen} from '@screens'

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
