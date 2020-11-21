import React from 'react';
import Form from '../Form';
import Button from '../Form/Button';
import Field from '../Form/Field';


import { Container } from './style';

const SearchDogs = ({register,onClick}) => {
  return(
    <Container>
      <Form width="100%" method="get">
      <Field.Text label="Name" type="text" name="name" register={register} />
      <Field.Text label="Breed" type="text" name="breed" register={register} />
      <Button.BtnBig name="Buscar"/>
      </Form>
    </Container>
  )
}

const SearchGroups = ({register,onClick}) => {
  return(
  <Container>
        <Form width="100%" method="GET">
        <Field.Text label="Name" type="text" name="name" register={register} />
        <Field.DataList label="Breed" list="breed" name="breed" register={register}/>
        <Field.Text label="Location" type="text" name="location" register={register} />
        <Button.BtnBig name="Buscar"/>
        </Form>
    </Container>
  )
}

const Search = {
  SearchDogs,
  SearchGroups
}
export default Search;
