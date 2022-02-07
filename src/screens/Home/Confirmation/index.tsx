/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Content, Title, TextResgate, ResgateWrapper} from './styles';
import Button from '../../../components/Button/index';

export const Confirmation = () => {
  const navigation = useNavigation();

  function goHome() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <Title>RESGATE EFETUADO!</Title>
        <ResgateWrapper>
          <TextResgate>
            O valor solicitado estará em sua conta em até 5 dias úteis!
          </TextResgate>
        </ResgateWrapper>
        <Button text="NOVO RESGATE" onPress={goHome} />
      </Content>
    </Container>
  );
};
