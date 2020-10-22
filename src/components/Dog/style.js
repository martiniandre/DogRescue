import styled from 'styled-components';

export const Cards = styled.section`
  width: 100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:${props => props.justify ? "start" : "center"};
  background: var(--white) 0.9;
  padding-bottom: 50px;
  margin: -10px 0 0 -10px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 5px;
  background: var(--white);
  margin-bottom: 20px;
  border-radius: 15px;
  margin: 10px 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border: 0px solid #000000;
  -webkit-box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.4);
  > img {
    width: 90%;
    max-height: 150px;
    margin:0 auto;
    border-radius: 15px 15px 0 0;
  }
  @media(max-width:768px){
    width: 40%;
  }
`;
export const CardName = styled.span`
  display: block;
  font-size: 1.3rem;
  color: var(--black);
  font-weight: bold;
  text-align: initial;
  margin-bottom: 4px;
  border-radius: 0px 0px 15px 15px;
  -moz-border-radius: 0px 0px 15px 15px;
  -webkit-border-radius: 0px 0px 15px 15px;
  border: 0px solid #000000;
  text-align:center;
`;
export const dogDetails = styled.div`
  > div {
    font-size: 1rem;
    display: flex;
    color: var(--extras);
    flex-direction: column;
    text-align:center;
  }
  p{
    margin-bottom: 4px;
  }
  @media (max-width: 590px) {
    div {
      align-items: left;
    }
  }
`;
