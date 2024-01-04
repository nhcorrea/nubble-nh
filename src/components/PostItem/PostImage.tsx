import React from 'react'
import {Image, useWindowDimensions} from 'react-native'

import {Post} from '@domain'

type Props = Pick<Post, 'imageURL'>

export function PostImage({imageURL}: Props) {
  const {width} = useWindowDimensions()
  return (
    <Image
      style={{width, height: 260}}
      resizeMode="cover"
      source={{uri: imageURL}}
    />
  )
}
