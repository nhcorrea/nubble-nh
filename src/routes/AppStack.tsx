import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabStack} from './AppTabNavigator';
import {AppStackParamList} from './routesTypes';

import {PostCommentScreen} from '#/screens/app/PostCommentScreen/PostCommentScreen';
import {ProfileScreen} from '#/screens/app/ProfileScreen/ProfileScreen';
import {SettingsScreen} from '#/screens/app/SettingsScreen/SettingsScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
