import styled from 'styled-components';

export const Container = styled.div`
  width:60vw;
  height:60vh;
  background: #bdbdbd;
  z-index: 18;

  position: absolute;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center
`
