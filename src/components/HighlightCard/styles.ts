import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface IDProps {
  id: '1' | '2' | '3' | '4';
}

export const Container = styled.View<IDProps>`
  background-color: ${({theme}) => theme.Palette.common.white};
  height: ${RFValue(40)}px;
  width: 100%;
  align-content: center;
  padding: 10px ${RFValue(20)}px;

  border-radius: 2px;
  border-width: 1px;
  border-color: ${({theme}) => theme.Palette.divider};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.Palette.common.black};
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.Palette.text.main};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
