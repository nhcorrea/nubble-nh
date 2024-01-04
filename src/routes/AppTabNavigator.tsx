import React from 'react'

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs'

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens'

import {AppTabBar} from './AppTabBar'
import {AppBottomTabParamList} from './routesTypes'

const BottomTab = createBottomTabNavigator<AppBottomTabParamList>()

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />
}

export function BottomTabStack() {
  return (
    <BottomTab.Navigator
      tabBar={renderTabBar}
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="NewPostScreen" component={NewPostScreen} />
      <BottomTab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <BottomTab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </BottomTab.Navigator>
  )
}
