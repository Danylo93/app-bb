/* eslint-disable react/require-default-props */
import React from 'react';

import {
  ContainerSimulation,
  SimulationWrapper,
  SubTitle,
  TextSimulation,
} from './styles';

export interface CardSimulationProps {
  nome: string;
  saldoTotal: string;
}

export function CardSimulation({nome, saldoTotal}: CardSimulationProps) {
  return (
    <ContainerSimulation>
      <SimulationWrapper>
        <TextSimulation>{nome}</TextSimulation>
        <SubTitle>R$ {saldoTotal}</SubTitle>
      </SimulationWrapper>
    </ContainerSimulation>
  );
}
