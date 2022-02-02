/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
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
import {SimulationProps} from '../../../routes/app.routes';
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

export const Resgate = ({route}) => {
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  const [data, setData] = useState<DataListProps[]>([]);
  const [listResgate, setListResgate] = useState<DataListProps[]>([]);
  const navigation = useNavigation();

  const callBack = item => {
    setListResgate(item);
  };

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  function handleOpenTransaction(item: DataListProps[]) {
    navigation.navigate('SimulationResgate', {callBack});
  }

  // const transactionsFormatted: DataListProps[] = listResgate.map(
  //   (item: DataListProps) => {
  //     return {
  //       nome: item.nome,
  //       objetivo: item.objetivo,
  //       saldoTotal: item.saldoTotal,
  //     };
  //   },
  // );
  // setListResgate(transactionsFormatted);

  const init = async () => {
    const {data} = await api.get('/');

    setListResgate(data.response.data.listaInvestimentos);
    console.log('Investimentos:', data.response.data.listaInvestimentos);
  };

  useEffect(() => {
    init();
  }, []);

  const acao = async () => {
    const dataAcoes = await api.get('/');

    const invest = 1 || 2 || 3;

    const obj = JSON.parse(
      JSON.stringify(dataAcoes.data.response.data.listaInvestimentos[0].acoes),
    );

    console.log('----------------Objeto inteiro ------------------');
    console.log(`Todas as açoes do Investimento ${invest} :`, obj);
    setData(obj);
  };

  useEffect(() => {
    acao();
  }, []);

  return (
    <Container>
      <StatusBar translucent backgroundColor="#2342a8" />
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
            keyExtractor={item => item.id}
            renderItem={({item}): JSX.Element => {
              return (
                <>
                  <ContainerInvestiment
                    onPress={() =>
                      navigation.navigate('SimulationResgate', {
                        nome: item.nome,
                        saldoTotal: item.saldoTotal,
                        data,
                      })
                    }>
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
