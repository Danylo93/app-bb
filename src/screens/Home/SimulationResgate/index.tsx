/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StatusBar, Modal, Alert} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import Button from '../../../components/Button';

import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
  SpaceBetween,
  TextBetween,
  TransactionList,
} from './styles';
import {Confirmation} from '../Confirmation';
import {Error} from '../Error';
import {HighlightCard} from '../../../components/HighlightCard';
import {InputForm} from '../../../components/InputForm';
import {api} from '../../../services/api';

interface FormData {
  amount: string;
  amount1: string;
  amount2: string;
  amount3: string;
}

const schema = Yup.object().shape({
  amount: Yup.number()
    .typeError('Informe um valor numerico')
    .positive('O valor nao pode ser negativo'),
});

export const SimulationResgate = ({route}) => {
  const [valorResgate, setValorResgate] = useState('');
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  const [data, setData] = useState([]);
  const [simulation, setSimulation] = useState([]);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  const acao = async () => {
    // const item = JSON.parse(JSON.stringify(route.params.data));
    const dadosApi = await api.get('/');

    const obj = JSON.parse(
      JSON.stringify(dadosApi.data.response.data.listaInvestimentos[0].acoes),
    );

    console.log('O que vem da api:', obj);
    setData(obj);
  };

  useEffect(() => {
    acao();
  }, []);

  async function handleRegister(form: FormData) {
    const newTransaction = {
      amount: form.amount,
    };

    try {
      const dataFormatted = [newTransaction];

      setValorResgate(JSON.stringify(dataFormatted));

      reset();
      setValorResgate('');
      setConfirmationTransation(true);
    } catch (error) {
      console.log(error);
      Alert.alert('Nao foi possivel Resgatar o valor');
    }
  }

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
            <TextResgate>DADOS DO INVESTIMENTO</TextResgate>
          </ResgateWrapper>
          <HighlightCard title="Nome" value={route.params.nome} />
          <HighlightCard
            title="Saldo total disponível"
            value={`R$ ${route.params.saldoTotal}`}
          />
          <ResgateWrapper>
            <TextResgate>RESGATE DO SEU JEITO </TextResgate>
          </ResgateWrapper>

          <TransactionList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <>
                  <HighlightCard title="Ação" value={item.nome} />
                  <HighlightCard
                    title="Saldo Acumulado"
                    value={`R$ ${item.percentual}`}
                  />
                  <InputForm
                    title="Valor a resgatar"
                    name="amount"
                    control={control}
                    placeholder="Digite o valor que deseja resgatar"
                    keyboardType="numeric"
                    error={errors.amount && errors.amount.message}
                  />
                  <SpaceBetween>
                    <TextBetween />
                  </SpaceBetween>
                </>
              );
            }}
          />
          <HighlightCard title="Valor total a resgatar" value="R$ 19.000,00" />
          <SpaceBetween>
            <TextBetween />
          </SpaceBetween>
          <Button
            text="CONFIRMAR RESGATE"
            onPress={handleSubmit(handleRegister)}
          />
        </Content>
      </Content>
      <Modal visible={confirmationTransation}>
        {!control === true ? <Confirmation /> : <Error />}
      </Modal>
    </Container>
  );
};
