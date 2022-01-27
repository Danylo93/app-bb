/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {StatusBar, Modal, Alert} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
} from './styles';
import {Confirmation} from '../Confirmation';
import {Error} from '../Error';

interface FormData {
  valor: string;
}

const schema = Yup.object().shape({
  valor: Yup.number()
    .required('Valor de resgate é Obrigatório')
    .isValid('Valor não pode ser maior que R$ 40.000,00'),
});

export const SimulationResgate = () => {
  const [confirmationTransation, setConfirmationTransation] = useState(false);

  function handleOpenConfirmationModal() {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }
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
            <TextResgate>DADOS DO INVESTIMENTO</TextResgate>
          </ResgateWrapper>
          <ResgateWrapper>
            <TextResgate>RESGATE DO SEU JEITO</TextResgate>
          </ResgateWrapper>
          <Button
            text="CONFIRMAR RESGATE"
            onPress={handleOpenConfirmationModal}
          />
        </Content>
      </Content>
      <Modal visible={confirmationTransation}>
        <Error />
      </Modal>
    </Container>
  );
};
