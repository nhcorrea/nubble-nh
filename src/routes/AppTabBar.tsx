import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {mapScreenName} from './mapScreenProps';
import {AppBottomTabParamList} from './routesTypes';

import {Box} from '#/components/Box/Box';
import {TouchableOpacityBox} from '#/components/Button/Button';
import {Icon} from '#/components/Icon/Icon';
import {Text} from '#/components/Text/Text';
import {useAppSafeArea} from '#/hooks/useAppSafeArea';
import {shadowProps} from '#/theme';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <Box
      flexDirection="row"
      paddingTop="s12"
      bg="background"
      style={[{paddingBottom: bottom}, {...shadowProps}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const {icon, label} =
          mapScreenName[route.name as keyof AppBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={1}
            flex={1}
            alignItems="center"
            gap="s4">
            <Icon
              name={isFocused ? icon.isFocused : icon.unFocused}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              color={isFocused ? 'primary' : 'backgroundContrast'}
              variant="paragraphCaptionMedium">
              {label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
