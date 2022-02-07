/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {useNavigation} from '@react-navigation/native';
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

interface Props {
  closeError: () => void;
}

export const Error = ({closeError}: Props) => {

  return (
    <Container>
      <Content>
        <Title>DADOS INVÁLIDOS</Title>
        <ResgateWrapper>
          <TextResgate>
            Você preencheu um ou mais campos com valor acima do permitido:
          </TextResgate>
          <ResgateWrapper>
            {/* <TextValueResgate>
              {route.params.nome}: Valor máximo de R$ {route.params.percentual}
            </TextValueResgate>
            <TextValueResgate>
              {route.params.nome}: Valor máximo de R$ {route.params.percentual}
            </TextValueResgate> */}
          </ResgateWrapper>
        </ResgateWrapper>
        <Button text="CORRIGIR" onPress={closeError} />
      </Content>
    </Container>
  );
};
