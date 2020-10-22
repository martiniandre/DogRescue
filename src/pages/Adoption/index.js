import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import { Paragraphy } from '../../Typography';

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
  margin:15px 0;                                                                                                                                     ;
`
const Text = styled.p`
  font-size:1.1rem;
  margin-bottom:10px;
  color:var(--primary);
`

const Adoption = () => (
  <>
    <Navbar />
    <Container>
      <Information>
      <Title>Requistos para adotar</Title>
        <Text>
        A primeira coisa que você tem que fazer para entender melhor como adotar um cachorro é entrar em contato conosoco ou nos visitar para poder te orientar melhor.
        Mas, apesar de cada local de adoção ter os próprios requisitos, as principais exigências para adotar um cachorro são:</Text>
        <SubTitle>O que é preciso para adotar um cachorro</SubTitle>
        <Text>Cada local de adoção de cachorro possui os próprios requisitos na hora de entregar um pet. Esse trabalho é importante porque garante que os futuros tutores são responsáveis e que aquele animal não vai voltar às ruas em breve. Veja as principais exigências:</Text>
        <ListMenu>
          <li>
          <Text>Ter no mínimo 21 anos</Text>
          </li>
          <li>
          <Text>Apresentar documentos como RG, CPF e comprovante de residência</Text>
          </li>
          <li>
          <Text>Assinar um termo de responsabilidade se comprometendo a cuidar do pet.</Text>
          </li>
        </ListMenu>
        <Text>Além disso, em alguns lugares é possível que você precise preencher um cadastro, falando sobre como será o dia a dia do cão, como é sua casa e se você já tem outros cães ou gatos. Isso ajuda as pessoas que trabalham lá a entender melhor o perfil de quem vai adotar e, portanto, os cachorros que melhor se adaptariam.</Text>
        <SubTitle>Depois da adoção de cachorro</SubTitle>
        <Text>Em primeiro lugar, bem-vindo ao grupo de mães e pais de cachorro! Agora que você tem um filho, mesmo que de quatro patas, precisa pensar nos cuidados de que ele precisa. E é preciso ser muito responsável com isso. Muitas doenças graves, como cinomose e doença do carrapato, podem ser prevenidas com medidas simples.</Text>
        <Text>Cães adotados em ONGs ou em um Centro de Controle de Zoonoses, em geral, são castrados, vacinados e vermifugados. Isso já é muito importante. Garanta que é o caso do seu peludo e, se não for, visite logo um veterinário para consultá-lo sobre esses três pontos fundamentais.</Text>
      </Information>
      </Container>
</>
);
export default Adoption;
