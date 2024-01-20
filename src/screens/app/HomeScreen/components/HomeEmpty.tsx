import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Box, Button, Text} from '@components';
import {useAppTheme} from '@hooks';

interface Props {
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

const ERROS_MESSAGE = 'Something went wrong.';
const EMPTY_MESSAGE = 'Não há publicações.';

function handleMessage(error: unknown) {
  return error ? ERROS_MESSAGE : EMPTY_MESSAGE;
}

function Component({isLoading, error, refetch}: Props): JSX.Element {
  const {colors} = useAppTheme();

  if (isLoading) {
    return <ActivityIndicator color={colors.primary} />;
  }
  return (
    <>
      <Text variant="paragraphMediumBold" mb="s16">
        {handleMessage(error)}
      </Text>
      {error && (
        <Button
          preset="outline"
          padding="s16"
          onPress={refetch}
          title="Tentar novamente"
        />
      )}
    </>
  );
}

export function HomeEmpty({...props}: Props): JSX.Element {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Component {...props} />
    </Box>
  );
}
