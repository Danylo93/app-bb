import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 1px 18px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.Palette.common.black};
  background-color: ${({ theme }) => theme.Palette.primary};
  border-radius: 5px;

  margin-bottom: 8px;
`;
