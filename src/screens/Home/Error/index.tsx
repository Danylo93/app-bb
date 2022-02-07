/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

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
import {api} from '../../../services/api';

interface Props {
  closeError: () => void;
}

export const Error = ({closeError}: Props) => {
  const [acoes, setAcoes] = useState([]);

  const acao = async () => {
    const dataAcoes = await api.get('/');
    const obj = JSON.parse(
      JSON.stringify(dataAcoes.data.response.data.listaInvestimentos[0].acoes),
    );
    console.log(`Modal de erro:`, obj);
    setAcoes(obj);
  };

  useEffect(() => {
    acao();
  }, []);

  return (
    <Container>
      <Content>
        <Title>DADOS INVÁLIDOS</Title>
        <ResgateWrapper>
          <TextResgate>
            Você preencheu um ou mais campos com valor acima do permitido:
          </TextResgate>
          <ResgateWrapper>
            {acoes.map((item): JSX.Element => {
              return (
                <>
                  <TextValueResgate>
                    {item.nome} Valor máximo de R${item.percentual}
                  </TextValueResgate>
                </>
              );
            })}
          </ResgateWrapper>
        </ResgateWrapper>
        <Button text="CORRIGIR" onPress={closeError} />
      </Content>
    </Container>
  );
};
