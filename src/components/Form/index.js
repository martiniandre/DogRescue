import styled from 'styled-components';

export const Form = styled.form`
  width: ${props => (props.width ? props.width : '500px')};
  display: flex;
  flex-direction: column;
  min-height: 100px;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 120px;
  }
`;

export default Form;
