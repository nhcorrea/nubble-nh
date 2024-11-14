import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Box} from '#/components/Box/Box';
import {Button} from '#/components/Button/Button';
import {Text} from '#/components/Text/Text';
import {useAppTheme} from '#/hooks/useAppTheme';

interface Props {
  isLoading: boolean;
  isError: unknown;
  refresh: () => void;
}

const ERROS_MESSAGE = 'Something went wrong.';
const EMPTY_MESSAGE = 'Não há publicações.';

function handleMessage(error: unknown) {
  return error ? ERROS_MESSAGE : EMPTY_MESSAGE;
}

function Component({isLoading, isError, refresh}: Props) {
  const {colors} = useAppTheme();

  if (isLoading) {
    return <ActivityIndicator color={colors.primary} />;
  }
  return (
    <>
      <Text variant="paragraphMediumBold" mb="s16">
        {handleMessage(isError)}
      </Text>
      {isError && (
        <Button
          preset="outline"
          padding="s16"
          onPress={refresh}
          title="Tentar novamente"
        />
      )}
    </>
  );
}

export function HomeEmpty({...props}: Props) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Component {...props} />
    </Box>
  );
}
