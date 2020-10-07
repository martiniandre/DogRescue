import styled from 'styled-components';

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 200px;
  max-height: 300px;
  margin: 0 auto;
  position: relative;
  .media {
    display: flex;
  }
`;
export const FooterC = styled.footer`
  position: absolute;
  color: var(--secondary);
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;
