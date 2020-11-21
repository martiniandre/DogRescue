import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import dogs from '../../DogCard/dogs';

const Label = styled.label`
  font-size: 1rem;
  width: 100%;
  color: var(--black);
  display: flex;
    flex-direction: column;
  div {
    display: flex;
  }
  >input{
    border: 1px solid #999;
  }
  >input[list="breed"]:focus{
    border: 1px solid var(--primary);
  }
  @media (max-width: 768px) {
    div {
      flex-direction: column;
    }
    button {
      width: 100%;
      padding: 10px 11px;
    }
  }
`;
const Input = styled.input`
  width: 100%;
  max-width: 650px;
  padding: 10px;
  display: block;
  border-radius: 4px;
  background: var(--white);
  border: 1px solid #999;
  &:focus{
    border: 1px solid var(--primary);
  }


`;
const Content = styled.span``;

const News = ({ label, type, name, register, className,value,onChange }) => (
  <Label>
    <Content>{label}</Content>
    <div>
      <Input type={type} name={name} ref={register} value={value} onChange={onChange} />
      <Button.BtnSmall className={className} type="submit" name="Receber" />
    </div>
  </Label>
);

const Text = ({ label, type, name, register }) => (
  <Label>
    <Content>{label}</Content>
    <Input
      style={{ marginTop: 5, marginBottom: 10 }}
      type={type}
      name={name}
      ref={register}
    />
  </Label>
);
const DataList = ({label,list}) => (
  <Label>
    <Content>{label}</Content>
    <input type="text" list={list}  style={{ marginTop: 5, marginBottom: 10,padding:10 }} />
     <datalist id={list} >
      {dogs.map(opt => (
        <option key ={opt.raça} value={opt.raça} />
      ))}
  </datalist>
  </Label>
)
const Field = {
  News,
  Text,
  DataList
};

export default Field;

