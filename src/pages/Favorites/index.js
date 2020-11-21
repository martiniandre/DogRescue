import React from 'react';

import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
/* import Dog from '../../components/Dog'; */
import { Title } from '../../Typography';

const Favorites = () => (
  <>
    <Navbar />
    <Container>
      <Title margin="30px 0">Favorites</Title>
 {/*      <Dog justify='true'/> */}
    </Container>
  </>
);
export default Favorites;
