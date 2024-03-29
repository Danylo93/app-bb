import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.Palette.primary};
`;

export const Error = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.Palette.error.main};

  margin: 3px 10px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.Palette.links.primary};
  padding-left: ${RFValue(14)}px;
  padding-top: ${RFValue(10)}px;
`;
