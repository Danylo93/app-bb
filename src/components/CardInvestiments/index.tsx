/* eslint-disable react/require-default-props */
import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Value,
  TitleWrapper,
} from './styles';

export interface CardInvestimentProps {
  nome: string;
  objetivo: string;
  saldoTotal: string;
}

interface Props {
  data: CardInvestimentProps;
}

export function CardInvestiments({data}: Props) {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>{data.nome}</Title>
          <SubTitle>{data.objetivo}</SubTitle>
        </TitleWrapper>
        <Value>{data.saldoTotal}</Value>
      </Wrapper>
    </Container>
  );
}
