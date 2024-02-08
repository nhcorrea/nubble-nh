import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Toast, ToastType} from '@services';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const toastType = toast?.type || 'success';

  return (
    <Box {...$BoxStyle}>
      <Box
        {...$ContainerIconStyle}
        backgroundColor={mapIcon[toastType].backgroundColor}>
        <Icon {...mapIcon[toastType]} />
      </Box>
      <Text style={styles.text} variant="paragraphMediumBold" color="grayBlack">
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapIcon: Record<
  ToastType,
  Pick<IconProps, 'name' | 'color'> & Pick<BoxProps, 'backgroundColor'>
> = {
  success: {
    name: 'Check',
    color: 'primaryContrast',
    backgroundColor: 'success',
  },
  error: {
    name: 'Close',
    color: 'primaryContrast',
    backgroundColor: 'error',
  },
};

const styles = StyleSheet.create({
  text: {
    flexShrink: 1,
  },
});

const $BoxStyle: BoxProps = {
  backgroundColor: 'primaryContrast',
  opacity: 0.95,
  padding: 's16',
  minHeight: 64,
  borderRadius: 's16',
  gap: 's16',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: MAX_WIDTH,
  height: 64,
  style: {...shadowProps},
};

const $ContainerIconStyle: BoxProps = {
  width: 32,
  height: 32,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 's16',
};
