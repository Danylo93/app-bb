/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, Modal, Alert} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements/dist/list/ListItem';
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
  valor: string;
}

export interface DataListProps {
  nome: string;
  saldoTotal: string;
}

const schema = Yup.object().shape({
  valor: Yup.string()
    .required('O Valor de resgate é Obrigatório')
    .isValid('Valor não pode ser maior que R$ 40.000,00'),
});

export const SimulationResgate = ({route}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  const [data, setData] = useState([]);
  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  // const transactionsFormatted: DataListProps[] = data.map(
  //   (item: DataListProps) => {
  //     return {
  //       nome: item.nome,
  //       objetivo: item.objetivo,
  //       saldoTotal: item.saldoTotal,
  //     };
  //   },
  // );

  // const loadData = useCallback(async () => {
  //   const {dados} = route.params;
  //   // setData(dados);

  // function SwitchCase(nome) {
  //   switch (nome.value) {
  //     case 'INVESTIMENTO I':
  //       return 0;
  //     case 'INVESTIMENTO II':
  //       return 1;
  //     case 'INVESTIMENTO III':
  //       return 3;
  //     default:
  //       return 6;
  //   }
  // }

  const acao = async () => {
    const obj = JSON.parse(JSON.stringify(route.params.data));

    console.log('O que vem da pagina de resgate:', obj);
    setData(obj);
  };

  useEffect(() => {
    acao();
  }, []);

  async function handleRegister(form: FormData) {}

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
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}): JSX.Element => {
              return (
                <>
                  <HighlightCard title="Ação" value={item.nome} />
                  <HighlightCard
                    title="Saldo Acumulado"
                    value={`R$ ${item.percentual}`}
                  />
                  <InputForm
                    title="Valor a resgatar"
                    name="valor"
                    control={control}
                    placeholder="Digite o valor que deseja resgatar"
                    keyboardType="numeric"
                    error={errors.valor && errors.valor.message}
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
            onPress={handleOpenConfirmationModal}
          />
        </Content>
      </Content>
      <Modal visible={confirmationTransation}>
        <Confirmation />
      </Modal>
    </Container>
  );
};
