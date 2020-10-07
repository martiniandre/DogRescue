import React from 'react';

import Container from '../Container';
import { Title } from '../../Typography';
import * as S from './styles';

function Footer() {
  return (
    <S.MediaContainer>
      <Container>
        <Title>Dog Rescue</Title>
        <S.FooterC>
          <p>2020 &copy; - André Martini</p>
        </S.FooterC>
      </Container>
    </S.MediaContainer>
  );
}

export default Footer;
