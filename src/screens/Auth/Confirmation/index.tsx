/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
} from './styles';
import Button from '../../../components/Button/index';

export const Confirmation = () => {
  return (
    <Container>
      <Content>
        <Title>RESGATE EFETUADO!</Title>
        <ResgateWrapper>
          <TextResgate>
            O valor solicitado estará em sua conta em até 5 dias úteis!
          </TextResgate>
        </ResgateWrapper>
        <Button text="NOVO RESGATE" />
      </Content>
    </Container>
  );
};
