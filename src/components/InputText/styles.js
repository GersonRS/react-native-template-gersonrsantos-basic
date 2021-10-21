import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #000;
  border-radius: 2px;
  background-color: #FFF;
`;

export const Input = styled.TextInput`
  padding: 5px;
  color: ${props => props.color};
`;
