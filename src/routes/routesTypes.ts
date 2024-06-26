import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {IconProps} from '@components';

type RouteNamesAuth = keyof AuthStackParamList;
type RouteNamesApp = keyof AppStackParamList;
type RouteBottomTab = keyof AppBottomTabParamList;

interface SuccessScreenProps {
  title: string;
  description: string;
  icon: Pick<IconProps, 'name' | 'color'>;
}

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: SuccessScreenProps;
  ForgotPassword: undefined;
};

export type AppStackParamList = {
  BottomTabStack: NavigatorScreenParams<AppBottomTabParamList>;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
  };
  SettingsScreen: undefined;
  ProfileScreen: {
    userId: number;
  };
};

export type AppBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

export type AuthScreenProps<T extends RouteNamesAuth> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;

export type AppScreenProps<T extends RouteNamesApp> = NativeStackScreenProps<
  AppStackParamList,
  T
>;

export type AppTabScreensProps<T extends RouteBottomTab> = CompositeScreenProps<
  BottomTabScreenProps<AppBottomTabParamList, T>,
  NativeStackScreenProps<AppStackParamList>
>;

export type AppStackScreensProps<T extends RouteNamesApp> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, T>,
    BottomTabScreenProps<AppBottomTabParamList>
  >;
