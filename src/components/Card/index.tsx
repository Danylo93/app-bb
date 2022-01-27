import React from 'react';
import {Container, Status, StatusText, StatusType, Title} from './styles';

interface CardProps {
  title: string;
  status: 'available' | 'unavailable';
  onPress: () => void;
}

export const Card = ({title, status, onPress}: CardProps) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Status>
        <StatusType />
        <StatusText>{status}</StatusText>
      </Status>
    </Container>
  );
};
