import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  color: var(--white);
  background:var(--primary);
`;
export const NavContainer = styled.nav`
  width: 100%;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const NavTitle = styled.h1`
  font-size: 2.1rem;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
export const FlexNav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavLinks = styled(Link)`
  font-size: 1rem;
  padding: 0 20px;
  transition: color 0.5s;
  color: var(--white);
  vertical-align:middle;
  &:hover {
    color:var(--ternary);
  }

  @media (max-width: 769px) {
    font-size: 1.5rem;
    padding: 20px;
    color: var(--white);
    display: flex;
    align-items: center;
  }
`;
export const Hamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 22px;
  right: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 20;

  > div {
    width: 2rem;
    height: 0.45rem;
    background-color: ${({ open }) => (open ? '#FFFAFA' : '#FFFAFA')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: 0.1s;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translate(100%)' : 'translate(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
export const OpenMenu = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  background: var(--ternary);
  > div {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: 0.8s ease-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    padding: 2.3rem;
    z-index: 19;
    text-align: center;
    overflow: hidden;
  }
`;
