/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, Modal, Alert} from 'react-native';
import axios from 'axios';
import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
  TransactionList,
} from './styles';
import {Confirmation} from '../Confirmation';
import {
  CardInvestiments,
  CardInvestimentProps,
} from '../../../components/CardInvestiments';
import {api} from '../../../services/api';

export interface DataListProps extends CardInvestimentProps {
  listaInvestimentos: string;
}

export const Resgate = ({navigation}) => {
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  const [data, setData] = useState<DataListProps[]>([]);

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  // const data = async () => {
  //   const response = await api.get('/ca4ec77d-b941-4477-8a7f-95d4daf7a653');
  //   setTransactions(response.data);
  //   console.log(response.data);
  // };

  async function loadTransactions() {
    const response = await axios.get(
      'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653',
    );
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormmated: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const nome = String(item.nome);

        return {
          nome: item.nome,
          objetivo: item.objetivo,
          saldoTotal: item.saldoTotal,
        };
      },
    );

    setData(transactionsFormmated);
  }

  useEffect(() => {
    loadTransactions();
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
            <TextResgate>Investimentos</TextResgate>
            <TextResgate>R$</TextResgate>
          </ResgateWrapper>
          <TransactionList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CardInvestiments data={item} />}
          />
        </Content>
      </Content>
    </Container>
  );
};
