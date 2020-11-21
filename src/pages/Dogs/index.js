import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import DogCard from '../../components/DogCard';
import {Title, SubTitle } from '../../Typography';
import Search from '../../components/Search';
import DogServices from '../../services/DogServices';

const FormContainer = styled.div`
  width: 100%;
  height:270px;
  padding:15px;
  max-width:300px;
  background:#e3e8ec;
  border: 1px solid #3D72A4;
  border-radius:5px;

  @media(max-width:768px){
      margin-bottom:40px;
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

const Dogs = () => {
  const [dog,setDog ] = useState([]);

  useEffect(()=>{
    DogServices.ListDogs(15,setDog);
  },[])

  async function HandleSearch(e){
    e.preventDefault();
    await DogServices.ListDogs(8,setDog)

  }
  return(
  <>
    <Navbar />
    <Container>
      <Title margin="20px 0">Find Dog</Title>
      <Flex>
          <FormContainer onSubmit={HandleSearch}>
          <SubTitle margin="30px 0">Search</SubTitle>
          <Search.SearchDogs/>
          </FormContainer>
          <DogCard arr={dog}/>
          </Flex>
      </Container>
</>
)}
export default Dogs;
