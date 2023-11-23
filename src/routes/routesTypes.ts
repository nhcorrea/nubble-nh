import {NativeStackScreenProps} from '@react-navigation/native-stack'

import {IconProps} from '@components'

type RouteNamesAuth = keyof AuthStackParamList
type RouteNamesApp = keyof AppStackParamList
type RouteNameBottomTab = keyof AppBottomTabParamList

export type AuthStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color'>
  }
  ForgotPassword: undefined
}

export type AppStackParamList = {
  BottomTabStack: undefined
  SettingsScreen: undefined
}

export type AppBottomTabParamList = {
  HomeScreen: undefined
  NewPostScreen: undefined
  FavoriteScreen: undefined
  MyProfileScreen: undefined
}

export type AuthScreenProps<T extends RouteNamesAuth> = NativeStackScreenProps<
  AuthStackParamList,
  T
>

export type AppScreenProps<T extends RouteNamesApp> = NativeStackScreenProps<
  AppStackParamList,
  T
>
export type AppBottomTabScreenProps<T extends RouteNameBottomTab> =
  NativeStackScreenProps<AppBottomTabParamList & AppStackParamList, T>
