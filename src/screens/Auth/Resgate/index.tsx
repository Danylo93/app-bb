/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {StatusBar, Modal, Alert} from 'react-native';
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

export const Resgate = ({navigation}) => {
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
            <TextResgate>Investimentos</TextResgate>
            <TextResgate>R$</TextResgate>
          </ResgateWrapper>
        </Content>
      </Content>
      
    </Container>
  );
};
