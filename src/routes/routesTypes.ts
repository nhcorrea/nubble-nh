import {NativeStackScreenProps} from '@react-navigation/native-stack'

import {IconProps} from '@components'

type RouteNamesAuth = keyof AuthStackParamList
type RouteNamesApp = keyof AppStackParamList

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
  HomeScreen: undefined
  SettingsScreen: undefined
}

export type AuthScreenProps<T extends RouteNamesAuth> = NativeStackScreenProps<
  AuthStackParamList,
  T
>
export type AppScreenProps<T extends RouteNamesApp> = NativeStackScreenProps<
  AppStackParamList,
  T
>
