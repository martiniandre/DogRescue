import styled from 'styled-components';
import Imagem from '../../assets/header.svg';

export const Header = styled.header`
  width: 100%;
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Imagem}) #999;
  background-position-y: bottom;
  background-position-x: 20%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .wrapper {
    width: 100%;
    max-width: 50%;
  }
  @media (max-width: 800px) {
    clip-path: none;
    background-position-x: center;
    background-position-y: bottom;
    .wrapper {
      max-width: 100%;
    }
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;
export const Paragraphy = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: var(--white);
  margin-bottom: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const Button = styled.button`
  background: var(--secondary);
  color:var(--white);
  width: 100%;
  max-width: 250px;
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 50px;
  &:hover {
    color: var(--white);
    background: var(--secondary);
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 20px auto;
  h1 {
    text-align: center;
    padding: 10px;
    font-size: 2rem;
    position: relative;
  }
`;
export const InfoSection = styled.div`
  width: 100%;
  color: var(--primary);
  margin-bottom: 70px;
  padding: 30px;

  .underlined::after {
    content: '';
    position: absolute;
    width: 120px;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    bottom: 2px;
    background: var(--ternary);
  }
`;
export const Grid = styled.section`
  display: grid;
  width: 100%;
  max-width: 1100px;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;
export const FlexItem = styled.div`
  width: 100%;
  padding: 20px 5px 15px 10px;
  margin-right: 5px;
  h2 {
    margin: 10px auto;
  }
  p {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 24px;
    letter-spacing: 0.8px;
    opacity: 0.9;
  }
  @media (max-width: 786px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;
export const News = styled.section`
  width: 100%;
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  position:relative;
  h1 {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;
