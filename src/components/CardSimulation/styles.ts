import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';

export const ContainerSimulation = styled.View`
  background-color: ${({theme}) => theme.Palette.common.white};
  height: ${RFValue(60)}px;
  width: 100%;
  align-content: center;
  padding: 10px ${RFValue(20)}px;
  border-radius: 2px;
  border-width: 3px;
  border-color: ${({theme}) => theme.Palette.divider};
`;

export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  margin-top: 3px;
  margin-bottom: 8px;
`;

export const SimulationWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const SpaceBetween = styled.View``;

export const TextBetween = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(4)}px;
  margin-bottom: 10px;
  text-align: left;
`;

export const TextSimulation = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(11)}px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
`;
export const SubTextSimulation = styled.Text`
  color: ${({theme}) => theme.Palette.text.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  margin-top: 3px;
  text-align: center;
`;

export const TransactionList = styled(
  FlatList as new () => FlatList,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
