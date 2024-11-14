import React from 'react';

import {Button} from '#/components/Button/Button';
import {Icon} from '#/components/Icon/Icon';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {AuthScreenProps} from '#/routes/routesTypes';

export function SuccessScreen({
  navigation,
  route: {
    params: {description, icon, title},
  },
}: AuthScreenProps<'SuccessScreen'>) {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScreenContainer>
      <Icon name={icon.name} color={icon.color} size="48" />
      <Text mt="s24" variant="headingLarge">
        {title}
      </Text>
      <Text mt="s24" variant="paragraphLarge">
        {description}
      </Text>
      <Button mt="s40" title="Voltar ao inicio" onPress={handleGoBack} />
    </ScreenContainer>
  );
}
