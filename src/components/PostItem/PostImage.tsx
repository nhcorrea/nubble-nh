import React from 'react';
import {Image, ImageStyle, useWindowDimensions} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  const {width} = useWindowDimensions();
  return (
    <Image
      style={{width, ...imageStyle}}
      resizeMode="cover"
      source={{uri: imageURL}}
    />
  );
}

const imageStyle: ImageStyle = {
  height: 260,
  marginHorizontal: -24,
};
