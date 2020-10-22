import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import api from '../../services/api';

import FormContainer from '../../components/Container/FormContainer';
import Form from '../../components/Form';
import Button from '../../components/Form/Button';
import Field from '../../components/Form/Field';
import { Title, Redirect, Error } from '../../Typography';
import Modal from '../../components/Modal';

const Register = () => {
  const [openModal, setOpenModal] = useState(false)
  const schema = yup.object().shape({
    name: yup
      .string(3, 'Nome deve possuir mais de 3 caracteres')
      .required('Nome é obrigatório'),
    location: yup
      .string('Location deve possuir mais de 3 caracteres')
      .min(3,'Location deve possuir mais de 3 caracteres')
      .required('Location é obrigatório'),
    email: yup
      .string()
      .email('Insira um email válido')
      .required('Email é obrigatório'),
    password: yup
      .string(6, 'Insira uma senha válidoa')
      .required('Password é obrigatória'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({
    name, location, email, password,
  }) => {
    await api.post('/user', {
      name,
      email,
      password,
      location,
    });
    setOpenModal(true)
  };

  return (
    <FormContainer>
      <Title margin="20px">Register</Title>
      <Form onSubmit={handleSubmit(onSubmit)} width="400px" method="POST">
        <Field.Text label="Name" type="text " name="name" register={register} />
        <Error>{errors.name?.message}</Error>
        <Field.Text
          label="Location"
          type="text "
          name="location"
          register={register}
        />
        <Error>{errors.location?.message}</Error>
        <Field.Text
          label="Email"
          ype="email"
          name="email"
          register={register}
        />
        <Error>{errors.email?.message}</Error>
        <Field.Text
          label="Password"
          type="password"
          name="password"
          register={register}
        />
        <Error>{errors.password?.message}</Error>
        <Redirect
          to="/login"
          style={{ textAlign: 'right', padding: '0', marginBottom: '10px' }}
        >
          Already have an account?
        </Redirect>
        <Button.BtnBig name="Registrar" />
        {openModal ? <Modal/> : null}
      </Form>
    </FormContainer>
  );
};
export default Register;
