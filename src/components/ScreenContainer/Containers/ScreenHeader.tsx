import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box} from '#/components/Box/Box';
import {TouchableOpacityBox} from '#/components/Button/Button';
import {Icon} from '#/components/Icon/Icon';
import {Text} from '#/components/Text/Text';

interface Props {
  canGoBack?: boolean;
  title?: string;
}

export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent={title ? 'space-between' : 'flex-start'}>
      {canGoBack && (
        <>
          <TouchableOpacityBox
            onPress={navigation.goBack}
            flexDirection="row"
            gap="s8">
            <Icon name="Arrow" color="primary" />
            {!title && <Text variant="paragraphMedium">Voltar</Text>}
          </TouchableOpacityBox>
          {title && <Text variant="headingSmall">{title}</Text>}
          {title && <Box width={20} height={20} />}
        </>
      )}
    </Box>
  );
}
