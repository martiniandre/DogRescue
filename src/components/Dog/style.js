import styled from 'styled-components';

export const Cards = styled.section`
  width: 100%;
  max-width: 1200px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: ${props =>{
    switch(props.grid){
      case "four":
        return "1fr 1fr 1fr 1fr";
      default:
        return "1fr 1fr 1fr"
  }}};
  grid-gap: 15px;
  justify-content: start;
  align-items: center;
  background: var(--white) 0.9;
  padding-bottom: 50px;
  @media (max-width: 766px) {
    grid-template-columns: 1fr 1fr;
    justify-self:center;
  }
`;
export const Card = styled.div.attrs({
  tabIndex: 0,
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 180px;
  justify-self: ${props => {
      switch(props.justify){
        case "center":
          return "center";
        default:
          return "start"
      }

  }};
  background: var(--white);
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 10px;
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
`;
export const CardName = styled.span`
  display: block;
  font-size: 1.5rem;
  color: var(--black);
  font-weight: bold;
  text-align: initial;
  margin-bottom: 8px;
  border-radius: 0px 0px 15px 15px;
  -moz-border-radius: 0px 0px 15px 15px;
  -webkit-border-radius: 0px 0px 15px 15px;
  border: 0px solid #000000;
  text-align:center;
`;
export const dogDetails = styled.div`
  padding: 10px;
  > div {
    font-size: 1rem;
    display: flex;
    color: var(--extras);
    flex-direction: column;
    text-align:center;
  }
  @media (max-width: 590px) {
    div {
      align-items: left;
    }
  }
`;
