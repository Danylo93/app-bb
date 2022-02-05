/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
} from './styles';
import {CardInvestiments} from '../../../components/CardInvestiments';
import {api} from '../../../services/api';

export const Resgate = ({route}) => {
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  const [data, setData] = useState([]);
  const [listResgate, setListResgate] = useState([]);
  const navigation = useNavigation();

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  function handleOpenTransaction() {
    navigation.navigate('SimulationResgate');
  }

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
      JSON.stringify(dataAcoes.data.response.data.listaInvestimentos),
    );

    console.log('----------------Indicador de Carencia ------------------');
    console.log(
      `Indicador de Carencia:`,
      dataAcoes.data.response.data.listaInvestimentos.indicadorCarencia,
    );

    console.log('----------------Objeto inteiro ------------------');
    console.log(`Todas as açoes do Investimento:`, obj);
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
          {listResgate.map(item => (
            <CardInvestiments
              nome={item.nome}
              objetivo={item.objetivo}
              saldoTotal={item.saldoTotal}
              onPress={async () =>
                navigation.navigate('SimulationResgate', {
                  nome: item.nome,
                  saldoTotal: item.saldoTotal,
                  data,
                })
              }
            />
          ))}
        </Content>
      </Content>
    </Container>
  );
};
