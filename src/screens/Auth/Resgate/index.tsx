/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, Modal, Alert} from 'react-native';
import axios from 'axios';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
  TransactionList,
  ContainerInvestiment,
  WrapperInvestiment,
  TitleWrapperInvestiment,
  TitleInvestiment,
  SubTitleInvestment,
  ValueInvestiment,
} from './styles';
import {Confirmation} from '../Confirmation';
import {
  CardInvestiments,
  CardInvestimentProps,
} from '../../../components/CardInvestiments';
import {api} from '../../../services/api';

export interface DataListProps extends CardInvestimentProps {
  nome: string;
  objetivo: string;
  saldoAtual: string;
}

export const Resgate = () => {
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  // const [data, setData] = useState<DataListProps[]>([]);
  const [listResgate, setListResgate] = useState<DataListProps[]>([]);
  const lista = [0, 1, 2, 3, 6];
  const navigation = useNavigation();

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  function handleOpenTransaction() {
    navigation.navigate('SimulationResgate', {init});
  }

  const transactionsFormatted: DataListProps[] = listResgate.map(
    (item: DataListProps) => {
      return {
        nome: item.nome,
        objetivo: item.objetivo,
        saldoTotal: item.saldoTotal,
      };
    },
  );
  // setListResgate(transactionsFormatted);

  const init = async () => {
    const {data} = await api.get('/');

    setListResgate(data.response.data.listaInvestimentos);
    console.log(data.response.data.listaInvestimentos);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <StatusBar translucent backgroundColor="#2a56e6" />
      <Content>
        <Header>
          <Title>Resgate</Title>
        </Header>
        <SubHeader />

        <Content>
          <ResgateWrapper>
            <TextResgate>INVESTIMENTOS</TextResgate>
            <TextResgate>R$</TextResgate>
          </ResgateWrapper>
          <TransactionList
            data={listResgate}
            keyExtractor={item => item.data}
            renderItem={({item}): JSX.Element => {
              return (
                <>
                  <ContainerInvestiment>
                    <WrapperInvestiment>
                      <TitleWrapperInvestiment>
                        <TitleInvestiment>{item.nome}</TitleInvestiment>
                        <SubTitleInvestment>{item.objetivo}</SubTitleInvestment>
                      </TitleWrapperInvestiment>
                      <ValueInvestiment>R$ {item.saldoTotal}</ValueInvestiment>
                    </WrapperInvestiment>
                  </ContainerInvestiment>
                </>
              );
            }}
          />
        </Content>
      </Content>
    </Container>
  );
};
