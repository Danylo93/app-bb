import styled, {DefaultTheme} from 'styled-components/native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface ButtonContainerProps extends RectButtonProps {
  marginTop: number;
  marginLeft: number;
  variant: 'advance' | 'back' | 'finish';
  disabled: boolean;
}
interface LabelProps {
  variant: 'advance' | 'back' | 'finish';
}

const BUTTON_HEIGHT = 40;
const BUTTON_ICON_HEIGHT = 32;

const defineBackgroundColor = (
  theme: DefaultTheme,
  variant: string,
  disabled: boolean,
): string => {
  if (disabled) {
    return theme.Palette.secondary;
  }

  if (variant === 'back') return theme.Palette.primary;

  return theme.Palette.primary;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  height: ${BUTTON_HEIGHT}px;
  background: ${({theme}) => theme.Palette.warning.main};
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.marginTop}px;
  margin-left: ${props => props.marginLeft}px;
  border-radius: ${2}px;
`;

export const Label = styled.Text<LabelProps>`
  text-align: center;
  color: ${({theme}) => theme.Palette.links.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${({variant}) => (variant === 'finish' ? 19 : 16)}px;
`;

// export const BackIcon = styled.Image.attrs({
//   source: arrowLeft,
//   resizeMode: 'contain',
// })`
//   height: ${BUTTON_ICON_HEIGHT}px;
//   width: ${BUTTON_ICON_HEIGHT}px;
//   position: absolute;
//   left: 4px;
//   top: ${(BUTTON_HEIGHT - BUTTON_ICON_HEIGHT) / 2}px;
// `;

// export const AdvanceIcon = styled.Image.attrs({
//   source: arrowRight,
//   resizeMode: 'contain',
// })`
//   height: ${BUTTON_ICON_HEIGHT}px;
//   width: ${BUTTON_ICON_HEIGHT}px;
//   position: absolute;
//   top: ${(BUTTON_HEIGHT - BUTTON_ICON_HEIGHT) / 2}px;
//   right: 4px;
// `;
