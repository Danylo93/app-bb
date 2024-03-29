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

`;

export const Icon = styled(ArrowIcon).attrs({
  name: 'keyboard-arrow-left',
  size: 25,
})`
  color: ${({theme}) => theme.Palette.primary};
  background-color: ${({theme}) => theme.Palette.links.secondary};
  width: 25px;
  height: 25px;
  margin-left: 33px;
  margin-top: ${RFValue(50)}px;
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
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextResgate = styled.Text`
  color: ${({theme}) => theme.Palette.links.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  margin-top: 20px;
  text-align: left;
`;

export const TextValueResgate = styled.Text`
  color: ${({theme}) => theme.Palette.links.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  text-align: left;
`;
export const SubTextLogin = styled.Text`
  color: ${({theme}) => theme.Palette.text.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  margin-top: 3px;
  text-align: center;
`;


