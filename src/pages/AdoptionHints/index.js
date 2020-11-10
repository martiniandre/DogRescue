import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
const Information = styled.main`
  width:100%;
  max-width: 70%;
  margin: 0 auto;
`
const ListMenu = styled.ol`
  font-size:1.8rem;
  color: var(--primary);
  margin: 30px;
`
const Title = styled.h1`
  font-size:2.4rem;
  margin: 20px 0;
  color:var(--primary);
`
const SubTitle = styled.h2`
  font-size:1.6rem;
  color:var(--primary);
`
const Text = styled.p`
  font-size:1.1rem;
  margin-bottom:10px;
  color:var(--primary);
  line-height:30px;
`

const AdoptionHints = () => (
  <>
    <Navbar />
    <Container>
      <Information>
      <Title>Dicas para Adoção</Title>
        <Text>
        A adoção de cachorro é um ato de amor. Afinal, acolher um cãozinho abandonado vai trazer amor tanto para a vida dele, que vai ganhar uma família,
        quanto para a sua, que vai ter o afeto e companhia de um animal eternamente grato.
        </Text>
        <Text>A adoção de cachorro é um ato de amor. Afinal, acolher um cãozinho abandonado vai trazer amor tanto para a vida dele, que vai ganhar uma família, quanto para a sua, que vai ter o afeto e companhia de um animal eternamente grato.</Text>
        <Text>Se você tem vontade de se tornar mãe ou pai de um cachorro, este texto vai te ajudar a tomar a decisão, a encontrar seu cãozinho (ou cãezinhos!) e a cuidar dele, desde os primeiros momentos até os desafios do dia a dia. Confira!</Text>
        <SubTitle>10 motivos para adotar um cachorro</SubTitle>
        <Text>Bateu aquela vontade de trazer um peludo para a sua vida, mas ainda não se convenceu totalmente? Reunimos 10 motivos para apostar na adoção de um cachorro:</Text>
        <ListMenu>
          <li>
          <SubTitle>Você salva uma vida</SubTitle>
          <Text>Um cachorro que está para adoção em organizações ou abandonado na rua não tem uma vida fácil. Cães precisam do amor e dos cuidados de uma família, com quem possam compartilhar o dia a dia. Tirar um peludo de uma situação assim é, antes de tudo, salvar uma vida.</Text>
          </li>
          <li>
          <SubTitle>Não vai faltar amor</SubTitle>
          <Text>Acredite: adotar um cachorro muda completamente a vida de alguém. E o amor que eles nos dão é tão grande que fica até difícil retribuir à altura!</Text>
          </li>
          <li>
          <SubTitle>Saúde mais forte</SubTitle>
          <Text>Cães disponíveis para adoção geralmente não têm uma raça definida. Existem estudos que mostram que nossos queridos vira-latas têm menos tendência a desenvolver uma série de doenças e, portanto, costumam ser mais saudáveis. Quer algo melhor que isso?</Text>
          </li>
          <li>
          <SubTitle>A melhor companhia</SubTitle>
          <Text>Adotar um cachorro vai deixá-lo eternamente grato a você. Você vai ter a melhor companhia que poderia querer em todos os momentos!</Text>
          </li>
          <li>
          <SubTitle>Perfeito para crianças</SubTitle>
          <Text>Se você tem filhos, a adoção de cachorros pode ser ainda mais benéfica. A convivência com esses seres peludos ajuda no desenvolvimento, além de ensinar sobre amor e cuidado.</Text>
          </li>
          <li>
          <SubTitle>Diminui o estresse</SubTitle>
          <Text>Você sabia que adotar um cachorro ajuda a diminuir o estresse? Sim! Até nisso eles contribuem.</Text>
          </li>
        </ListMenu>



      </Information>
      </Container>
</>
);
export default AdoptionHints;
