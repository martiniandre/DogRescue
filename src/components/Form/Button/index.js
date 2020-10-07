import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: var(--ternary);
  color: var(--white);
  width: ${props => (props.width ? props.width : '100%')};
  padding: ${props => (props.padding ? '15px' : '0')};
  text-align: center;
  font-size: 1.1rem;
  &:hover {
    color: var(--white);
    background: var(--secondary);
  }
  span {
  }
`;

const BtnSmall = ({ name, padding }) => (
  <Btn style={{ padding: { padding } }} width="250px">
    {name}
  </Btn>
);

const BtnBig = ({ name }) => <Btn padding="true">{name}</Btn>;
const Button = {
  BtnSmall,
  BtnBig,
};

export default Button;
