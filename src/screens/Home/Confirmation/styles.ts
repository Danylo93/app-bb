import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';


const deviceWidth = Dimensions.get('window').width;
const bannerRatio = 682 / 1551;
export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.Palette.opacity.main};
  align-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 90%;
  margin-top: ${RFValue(20)}px;
  position: absolute;
  background-color: ${({theme}) => theme.Palette.primary};
  align-self: center;
  margin-top: ${RFValue(250)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.Palette.links.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(18)}px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.Palette.links.main};
`;
export const SubHeader = styled.View`
  width: 100%;
  height: 8px;
  background-color: ${({theme}) => theme.Palette.warning.main};
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.Palette.links.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  margin-top: 3px;
  margin-bottom: 8px;
  text-align: center;
`;

export const ResgateWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  margin-bottom: 30px;
`;

export const TextResgate = styled.Text`
  color: ${({theme}) => theme.Palette.links.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  margin-top: 20px;
  text-align: left;
`;

