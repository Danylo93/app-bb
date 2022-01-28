import React from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';

import {Input} from '../Input';

import {Container, Error, Title} from './styles';

interface Props extends TextInputProps {
  title: string;
  control: Control;
  name: string;
  error: string;
}




export function InputForm({title, control, name, error, ...rest}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
