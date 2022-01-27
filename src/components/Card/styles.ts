import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.Palette.primary};
  width: 45%;
  border-radius: 10px;
  margin-right: ${RFPercentage(0.6)}%;
  margin-bottom: ${RFPercentage(1)}%;
  padding: ${RFPercentage(1)}% ${RFPercentage(0.5)}% ${RFPercentage(1)}%
    ${RFPercentage(0.5)}%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.Palette.text.main};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const StatusType = styled.View`
  height: 7px;
  width: 7px;
  border-radius: ${RFPercentage(50)}px;
  background-color: ${({theme}) => theme.Palette.success.main};
`;

export const StatusText = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-size: ${RFValue(12)}px;
  margin-left: 6px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
