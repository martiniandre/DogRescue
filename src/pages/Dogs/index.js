import React from 'react';
import styled from 'styled-components'
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import Dog from '../../components/Dog';
import { SubTitle } from '../../Typography';
import Search from '../../components/Search';

const FormContainer = styled.div`
  width: 100%;
  height:350px;
  padding:15px;
  max-width:300px;
  background:#e3e8ec;
  border: 1px solid #3D72A4;
  border-radius:5px;

  @media(max-width:768px){
      max-width:100%;
  }
`;

const Flex = styled.div`
  display:grid;
  grid-template-columns:1fr 2fr;
  @media(max-width:768px){
    grid-template-columns:1fr;
  }
`;

const Dogs = () => (
  <>
    <Navbar />
    <Container>
      <Flex>
          <FormContainer>
          <SubTitle margin="30px 0">Search</SubTitle>
          <Search.SearchDogs/>
          </FormContainer>
          <Dog/>
          </Flex>
      </Container>
</>
);
export default Dogs;
