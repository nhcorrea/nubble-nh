import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[{backgroundColor}, styles.flex]}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={[{backgroundColor}, styles.flex]}>{children}</View>;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
