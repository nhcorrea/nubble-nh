import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens'

import {AppBottomTabParamList} from './routesTypes'

const BottomTab = createBottomTabNavigator<AppBottomTabParamList>()

export function BottomTabStack() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="NewPostScreen" component={NewPostScreen} />
      <BottomTab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <BottomTab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </BottomTab.Navigator>
  )
}
