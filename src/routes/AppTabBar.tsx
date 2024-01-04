import React from 'react'

import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

import {Box, Icon, Text, TouchableOpacityBox} from '@components'
import {useAppSafeArea} from '@hooks'
import {shadowProps} from '@theme'

import {mapScreenName} from './mapScreenProps'
import {AppBottomTabParamList} from './routesTypes'

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea()
  return (
    <Box
      flexDirection="row"
      paddingTop="s12"
      bg="background"
      style={[{paddingBottom: bottom}, {...shadowProps}]}>
      {state.routes.map((route, index) => {
        console.log(route.name)
        const {options} = descriptors[route.key]

        const {icon, label} =
          mapScreenName[route.name as keyof AppBottomTabParamList]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacityBox
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
        )
      })}
    </Box>
  )
}
