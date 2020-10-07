import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import FormContainer from '../../components/Container/FormContainer';
import Form from '../../components/Form';
import Button from '../../components/Form/Button';
import Field from '../../components/Form/Field';
import { Title, Redirect, Error } from '../../Typography';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Password é obrigatória'),
});

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    shouldFocusError: Field.Text,
    resolver: yupResolver(schema),
  });
  /* const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('') */
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <FormContainer>
      <Title color="#3700b3" margin="20px">
        Login
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)} defaultValue="" width="400px">
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
          to="/register"
          style={{ textAlign: 'right', padding: '0', marginBottom: '10px' }}
        >
          Already have an account?
        </Redirect>
        <Button.BtnBig name="Login" />
      </Form>
    </FormContainer>
  );
};
export default Login;
