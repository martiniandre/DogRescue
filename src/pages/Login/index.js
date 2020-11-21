import React,{ useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import AuthServices from '../../services/AuthServices';

import FormContainer from '../../components/Container/FormContainer';
import Form from '../../components/Form';
import Button from '../../components/Form/Button';
import Field from '../../components/Form/Field';
import { Title, Redirect, Error } from '../../Typography';
import ErrorMessage from '../../components/ErrorMessage'
import Modal from '../../components/Modal';


const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Password é obrigatória'),
});

const Login = () => {
  const [openModal,setOpenModal] = useState(false);
  const [error,setError] = useState(false);
  const { register, handleSubmit, errors,reset } = useForm({
      shouldFocusError: Field.Text,
      resolver: yupResolver(schema),
    });


 const onSubmit = async (values) => {
     AuthServices.SignIn(values,setOpenModal,setError,reset)
 }

  return (
    <FormContainer>
      <Title color="#3700b3" margin="20px">
        Login
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)} defaultValue="" width="400px">
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
        <Redirect to="/register"
          style={{ textAlign: 'right', padding: '0', marginBottom: '10px' }}>
          Doesn't have an account?
        </Redirect>
        <Button.BtnBig name="Login" />
      </Form>
      <Modal open={openModal}/>
    </FormContainer>
  );
};
export default Login;
