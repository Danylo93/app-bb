import styled from 'styled-components/native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions, ViewProps, TextInputProps} from 'react-native';

const HEIGHT = 60;
const WIDTH = Dimensions.get('window').width * 0.84;

interface InputContainerProps extends ViewProps {
  dark: boolean;
  width?: number;
}
interface InputProps extends TextInputProps {
  color: string;
}

export const Container = styled.View`
  height: ${HEIGHT + 12}px;
`;

export const InputContainer = styled.View<InputContainerProps>`
  border-width: 1px;
  border-color: ${({theme}) => theme.Palette.divider};
  border-radius: ${1}px;
  height: ${HEIGHT}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: ${({width}) => width || WIDTH}px;
  background: ${({theme}) => theme.Palette.divider};
`;

export const TextInput = styled.TextInput<InputProps>`
  flex: 1;
  color: ${({theme}) => theme.Palette.common.black};
  margin-left: 10px;
  text-align: left;
`;

const ICON_SIZE = 18;

export const Icon = styled(MCIcon).attrs(({theme}) => ({
  size: ICON_SIZE,
  color: theme.Palette.warning.main,
}))`
  margin-left: 10px;
`;

export const CheckIcon = styled(MCIcon).attrs(({theme}) => ({
  size: ICON_SIZE,
  color: theme.Palette.warning.main,
}))`
  margin-left: 4px;
  margin-right: 10px;
`;

export const CheckIconValidation = styled(MCIcon).attrs(({theme}) => ({
  size: ICON_SIZE,
  color: theme.Palette.error.light,
}))`
  margin-left: 4px;
  margin-right: 10px;
`;

export const ButtonIcon = styled(CheckIcon)``;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.Palette.error.light};
  font-size: 10px;
  margin-left: 16px;
  margin-top: 4px;
`;
