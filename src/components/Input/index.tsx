/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, {forwardRef, useState} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'styled-components/native';


import {
  Container,
  InputContainer,
  Icon,
  TextInput,
  CheckIconValidation,
  ErrorMessage,
  ButtonIcon,
  Title,
} from './styles';

interface IDProps {
  id: [];
}


export interface InputProps extends RNTextInputProps {
  icon?: string;
  dark?: boolean;
  marginTop?: number;
  error?: string | undefined;
  touched?: boolean | undefined;
  height?: number;
  width?: number;
  title: string;
}

const Input = forwardRef<RNTextInput, InputProps>(
  (
    {
      title,
      icon,
      dark = false,
      marginTop = 0,
      error,
      touched,
      showTogglePasswordButton = false,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();

    const [secureTextEntryEnabled, setSecureTextEntryEnabled] = useState(
      showTogglePasswordButton,
    );

    return (
      <Container {...{marginTop}}>
        <Title>{title}</Title>
        <InputContainer {...{dark}}>
          {!!icon && <Icon name={icon} />}
          <TextInput
            ref={ref}
            selectionColor={
              dark ? theme.Palette.text.secondary : theme.Palette.text.secondary
            }
            color={
              dark ? theme.Palette.text.secondary : theme.Palette.text.secondary
            }
            placeholderTextColor={
              dark ? theme.Palette.text.main : theme.Palette.text.secondary
            }
            secureTextEntry={secureTextEntryEnabled}
            {...props}
          />
          {showTogglePasswordButton && (
            <TouchableOpacity
              onPress={() => setSecureTextEntryEnabled((p: any) => !p)}>
              <ButtonIcon name={!secureTextEntryEnabled ? 'eye-off' : 'eye'} />
            </TouchableOpacity>
          )}
          {touched && (
            <CheckIconValidation
              name={!error ? 'check' : 'alert-circle-check-outline'}
            />
          )}
        </InputContainer>
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  },
);

export default Input;
