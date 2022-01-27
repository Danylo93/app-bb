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
  TextValueResgate,
} from './styles';
import Button from '../../../components/Button/index';

export const Error = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Title>DADOS INVÁLIDOS</Title>
        <ResgateWrapper>
          <TextResgate>
            Você preencheu um ou nais campos com valor acima do permitido:
          </TextResgate>
          <ResgateWrapper>
            <TextValueResgate>
              BBAS3: Valor máximo de R$ 11.049,28
            </TextValueResgate>
            <TextValueResgate>
              VALE3: Valor máximo de R$ 8.143,44
            </TextValueResgate>
          </ResgateWrapper>
        </ResgateWrapper>
        <Button text="CORRIGIR" />
      </Content>
    </Container>
  );
};
