import React from 'react';
import { Paragraphy, Title,Redirect } from '../../Typography';

import { Container,ModalContainer } from './styles';

const Modal = () =>  {
  return (
    <Container>
      <ModalContainer>
        <Title>Confirmado</Title>
        <Paragraphy>Parabéns, você realizou o cadastro!</Paragraphy>
        <Redirect to="/login">Ir para login</Redirect>
      </ModalContainer>
    </Container>
  );
}

export default Modal;
