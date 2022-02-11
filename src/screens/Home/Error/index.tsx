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

export const Error = ({route, closeError}: Props): JSX.Element => {
  const [acoes, setAcoes] = useState([]);
  const [formatado, setFormatado] = useState('');

  const acao = async () => {
    const dataAcoes = await api.get('/');
    const obj = JSON.parse(
      JSON.stringify(dataAcoes.data.response.data.listaInvestimentos[0].acoes),
    );

    const saldo = JSON.parse(
      JSON.stringify(
        dataAcoes.data.response.data.listaInvestimentos[0].saldoTotal,
      ),
    );

    console.log(`Modal de erro:`, obj);
    console.log(
      `Valor:`,
      dataAcoes.data.response.data.listaInvestimentos[0].saldoTotal,
    );
    setAcoes(obj);
    setFormatado(saldo);
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
                    {item.nome} Valor máximo de R${' '}
                    {Number((item.percentual * formatado) / 100).toFixed(2)}
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
