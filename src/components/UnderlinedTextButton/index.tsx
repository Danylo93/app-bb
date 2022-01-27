/* eslint-disable react/require-default-props */
import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {verticalScale} from 'react-native-size-matters';
import theme from '../../global/styles/theme';

import {Label} from './styles';

interface UnderlinedTextButtonProps extends RectButtonProps {
  text: string;
  fontSize?: number;
  color?: string;
}
const UnderlinedTextButton: React.FC<UnderlinedTextButtonProps> = ({
  text,
  fontSize = verticalScale(14),
  color = theme.Palette.background,
  ...props
}) => {
  return (
    <RectButton {...props}>
      <Label {...{fontSize, color}}>{text}</Label>
    </RectButton>
  );
};

export default UnderlinedTextButton;
