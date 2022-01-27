import styled from 'styled-components/native';

interface ContainerProps {
  marginTop: number;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop}px;
`;

export const Text = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 10px;
`;
