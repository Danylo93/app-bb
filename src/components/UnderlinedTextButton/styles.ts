import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface LabelProps extends TextProps {
  fontSize: number;
  color: string;
}
export const Label = styled.Text<LabelProps>`
  font-size: ${props => props.fontSize}px;
  color: ${({color}) => color};
  text-decoration-line: underline;
  align-self: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;
