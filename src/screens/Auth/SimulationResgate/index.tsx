/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
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
} from './styles';
import {Confirmation} from '../Confirmation';
import {Error} from '../Error';
import {HighlightCard} from '../../../components/HighlightCard';
import {InputForm} from '../../../components/InputForm';

interface FormData {
  valor: string;
}

const schema = Yup.object().shape({
  valor: Yup.number()
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

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

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
          <HighlightCard title="Nome" value={route.params?.nome} />
          <HighlightCard
            title="Saldo total disponível"
            value={route.params.email}
          />
          <ResgateWrapper>
            <TextResgate>RESGATE DO SEU JEITO</TextResgate>
          </ResgateWrapper>
          <HighlightCard title="Ação" value={route.params.acoes} />
          <HighlightCard title="Saldo Acumulado" value="R$ 40.000,00" />
          <InputForm
            title="Valor a resgatar"
            name="valor"
            control={control}
            placeholder="Digite o valor que deseja resgatar"
            keyboardType="numeric"
            error={errors.valor && errors.valor.message}
          />
          <SpaceBetween>
            <TextBetween> </TextBetween>
          </SpaceBetween>
          <HighlightCard title="Ação" value="PETR4" />
          <HighlightCard title="Saldo Acumulado" value="R$ 15.100,00" />
          <HighlightCard title="Valor a resgatar" value="12.000,00" />
          <SpaceBetween>
            <TextBetween> </TextBetween>
          </SpaceBetween>
          <HighlightCard title="Valor total a resgatar" value="R$ 19.000,00" />
          <SpaceBetween>
            <TextBetween> </TextBetween>
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
