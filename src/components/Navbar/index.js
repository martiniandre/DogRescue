import React, { useState } from 'react';

import { BiUserCircle } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { FiInfo, FiSearch, FiHome } from 'react-icons/fi';

import {
  Container,
  NavContainer,
  NavTitle,
  FlexNav,
  NavLinks,
  Hamburger,
  OpenMenu,
} from './styles';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavContainer>
        <NavTitle>PetRescue</NavTitle>
        <FlexNav>
          <NavLinks to="/dogs">Find a dog</NavLinks>
          <NavLinks to="/">Adoption Info</NavLinks>
          <NavLinks to="/">Dog Care</NavLinks>
        </FlexNav>
        <FlexNav>
          <NavLinks to="/favorites" style={{ paddingRight: '10px' }}>
            <MdFavorite size={42} />
          </NavLinks>
          <NavLinks
            to="/login"
            style={{ borderLeft: '1px solid blue', paddingLeft: '10px' }}
          >
            <BiUserCircle size={42} />
          </NavLinks>
        </FlexNav>
      </NavContainer>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <OpenMenu open={open}>
        <NavLinks to="/">
          <FiHome size={54} style={{ paddingRight: 15 }} />
          Dog Care
        </NavLinks>
        <NavLinks to="/">
          <FiSearch size={54} style={{ paddingRight: 15 }} />
          Find a dog
        </NavLinks>
        <NavLinks to="/">
          <FiInfo size={54} style={{ paddingRight: 15 }} />
          Adoption Info
        </NavLinks>
        <NavLinks to="/">
          <MdFavorite size={54} style={{ paddingRight: 15 }} />
          Favorite
        </NavLinks>
        <NavLinks to="/login">
          <BiUserCircle size={42} style={{ marginRight: 15 }} />
          User
        </NavLinks>
      </OpenMenu>
    </Container>
  );
}

export default Navbar;
