/* eslint-disable react/require-default-props */
import React from 'react';

import {Container, Wrapper, Title, Value} from './styles';

interface Props {
  title: string;
  value: string;
  id?: string;
}

export function HighlightCard({title, value, id}: Props) {
  return (
    <Container id={id} >
      <Wrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Wrapper>
    </Container>
  );
}
