import React from 'react';
import { BsCheckCircle } from 'react-icons/bs'
import { Container,ModalContainer } from './styles';

const Modal = ({open}) =>  {
  return (
    <Container open={open}>
      <ModalContainer>
      <BsCheckCircle size={70} color="green"/>
      <a href="/">Ir</a>
      </ModalContainer>
    </Container>
  );
}

export default Modal;
