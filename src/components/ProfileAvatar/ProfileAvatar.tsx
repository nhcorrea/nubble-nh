import React from 'react';
import {Image} from 'react-native';

interface Props {
  imageURL: string;
  /** @default 32 */
  size?: number;
  /** @default 14 */
  borderRadius?: number;
}

export function ProfileAvatar({borderRadius = 14, size = 32, imageURL}: Props) {
  return (
    <Image
      style={{width: size, height: size, borderRadius}}
      source={{uri: imageURL}}
    />
  );
}
