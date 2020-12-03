import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  max-width: 450px;
  color: ${props => (props.color ? props.color : '#3700b3')};
  margin: ${props => (props.margin ? props.margin : 0)};
`;
export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${props => (props.color ? props.color : '#23036a')};
  margin-bottom: 15px;
  max-width: 400px;
`;

export const Paragraphy = styled.p`
  font-size: 1rem;
  letter-spacing: 0.5px;
  line-height: 10px;
  color: var(--secondary);
  opacity:0.8;
  margin-bottom: 10px;
`;

export const Redirect = styled(Link)`
  font-size: 1rem;
  padding: 0 20px;
  transition: color 0.5s;
  color: var(--black);
  &:hover {
    color: var(--primary);
  }
`;
export const Read = styled.a`
  font-size: 1rem;
  padding: 0 20px;
  transition: color 0.5s;
  color: var(--ternary);
  text-decoration: underline;
  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
`;
export const Error = styled.span`
  color: red;
  display: block;
  margin: 5px 0;
`;
