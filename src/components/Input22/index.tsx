/* eslint-disable no-return-assign */
import React from 'react';
import {TextInputProps, TextInput} from 'react-native';

import {Container} from './styles';

type Props = TextInputProps;

export function Input22({...rest}: Props) {
  return (
    <TextInput
      style={{height: 40, width: 50}}
      keyboardType="numeric"
      onChangeText={txt => (containMultipledata[index].yourObjectName = txt)}
      value={item.yourObjectName}
    />
  );
}
