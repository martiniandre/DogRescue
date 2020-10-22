import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { FiHome, FiAward } from 'react-icons/fi';
import { FaBath } from 'react-icons/fa';

import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Dog from '../../components/Dog';
import Field from '../../components/Form/Field';

import Footer from '../../components/Footer';
import { Title, SubTitle, Paragraphy, Error, Read } from '../../Typography';

import * as S from './style';

const Home = () => {

  const schema = yup.object().shape({
    news: yup.string().email('Digite um email válido'),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <S.Header>
        <Container>
          <div className="wrapper">
            <S.HeaderTitle>Abra seu coração, abra sua casa</S.HeaderTitle>
            <S.Paragraphy>
              Conheça nosso trabalho, e conheça os dogs que estão disponivéis
              para ser a sua fiel companhia
            </S.Paragraphy>
            <S.Button>Encontre um amigo</S.Button>
          </div>
        </Container>
      </S.Header>
      <S.Main>
        <S.InfoSection>
          <Title margin="10px auto" className="underlined">
            Nossos Serviços
          </Title>
          <S.Grid>
            <S.FlexItem>
              <FiAward size={30} />
              <SubTitle>Resgate</SubTitle>
              <Paragraphy>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam reiciendis impedit recusandae sed nam repellat dolor,
                magni perspiciatis iusto soluta unde ipsum modi praesentiu
              </Paragraphy>
              <Read to="/">Veja mais</Read>
            </S.FlexItem>
            <S.FlexItem>
              <FiHome size={30} />
              <SubTitle>Busca</SubTitle>
              <Paragraphy>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam reiciendis impedit recusandae sed nam repellat dolor,
                magni perspiciatis iusto soluta unde ipsum modi praesentiu
              </Paragraphy>
              <Read to="/">Veja mais</Read>
            </S.FlexItem>
            <S.FlexItem>
              <FaBath size={30} />
              <SubTitle>Banho</SubTitle>
              <Paragraphy>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam reiciendis impedit recusandae sed nam repellat dolor,
                magni perspiciatis iusto soluta unde ipsum modi praesentiu
              </Paragraphy>
              <Read to="/">Veja mais</Read>
            </S.FlexItem>
          </S.Grid>
        </S.InfoSection>
        <Title margin="10px auto">Cachoros disponíveis para adoção</Title>
        <Dog/>
      </S.Main>

      <S.News>
        <Title color="#fbfaff" margin="0 0 20px 0">
          Join Our Newsletter
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field.News label="" type="text" name="news" register={register} />
          <Error>{errors.news?.message}</Error>
        </Form>

      </S.News>
      <Footer />
    </>
  );
};

export default Home;
