import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.Palette.common.white};
  height: ${RFValue(60)}px;
  width: 100%;
  align-content: center;
  padding: 10px ${RFValue(20)}px;
  border-radius: 2px;
  border-width: 3px;
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

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.Palette.text.disabled};
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.Palette.common.black};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleWrapper = styled.View``;
