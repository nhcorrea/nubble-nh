import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import {AppTabBar} from './AppTabBar';
import {AppBottomTabParamList} from './routesTypes';

import {FavoriteScreen} from '#/screens/app/FavoriteScreen/FavoriteScreen';
import {HomeScreen} from '#/screens/app/HomeScreen/HomeScreen';
import {MyProfileScreen} from '#/screens/app/MyProfileScreen/MyProfileScreen';
import {NewPostScreen} from '#/screens/app/NewPostScreen/NewPostScreen';

const BottomTab = createBottomTabNavigator<AppBottomTabParamList>();

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />;
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
  );
}
