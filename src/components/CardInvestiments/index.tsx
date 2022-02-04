/* eslint-disable react/require-default-props */
import React from 'react';

import {
  ContainerInvestiment,
  SubTitleInvestment,
  TitleInvestiment,
  TitleWrapperInvestiment,
  ValueInvestiment,
  WrapperInvestiment,
} from './styles';

export interface CardInvestimentProps {
  nome: string;
  objetivo: string;
  saldoTotal: string;
  onPress: () => void;
}

export function CardInvestiments({
  nome,
  objetivo,
  saldoTotal,
  onPress,
}: CardInvestimentProps) {
  return (
    <ContainerInvestiment onPress={onPress}>
      <WrapperInvestiment>
        <TitleWrapperInvestiment>
          <TitleInvestiment>{nome}</TitleInvestiment>
          <SubTitleInvestment>{objetivo}</SubTitleInvestment>
        </TitleWrapperInvestiment>
        <ValueInvestiment>R$ {saldoTotal}</ValueInvestiment>
      </WrapperInvestiment>
    </ContainerInvestiment>
  );
}
