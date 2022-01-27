/* eslint-disable react/require-default-props */
import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {ButtonContainer, Label} from './styles';


interface ButtonProps extends RectButtonProps {
  text?: string;
  marginTop?: number;
  marginLeft?: number;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  variant?: 'advance' | 'back' | 'finish';
  onPress?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text = '',
  marginTop = 0,
  disabled = false,
  variant,
  marginLeft = 0,
  ...props
}) => {
  return (
    <ButtonContainer
      enabled={!disabled}
      {...{marginTop, marginLeft, disabled, variant}}
      {...props}>
      {variant === 'finish' || variant === 'back'}
      <Label {...{variant}}>{text}</Label>
      {variant === 'advance'}
    </ButtonContainer>
  );
};

export default Button;
