/* eslint-disable no-shadow */
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {FlatList, TouchableOpacity} from 'react-native';

import {DataListProps} from '.';
import theme from '../../../global/styles/theme';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.Palette.background.input};
`;

export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.Palette.common.white};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(19)}px;
  text-align: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.Palette.links.main};
`;
export const SubHeader = styled.View`
  width: 100%;
  height: ${RFValue(4)}px;
  background-color: ${({theme}) => theme.Palette.warning.main};
`;

export const ResgateWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(13)}px;
`;

export const TextResgate = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(8)}px;
  text-align: left;
`;

export const TransactionList = styled(
  FlatList as new () => FlatList<DataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({isActive}) =>
    isActive ? theme.Palette.divider : theme.Palette.common.white};
`;


