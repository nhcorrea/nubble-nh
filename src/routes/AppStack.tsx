import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStackParamList} from '@routes';
import {SettingsScreen, PostCommentScreen} from '@screens';

import {BottomTabStack} from './AppTabNavigator';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
    </Stack.Navigator>
  );
}
