import React from 'react';
import DogImage from '../../assets/dog.png';

import * as S from './style';

const DogCard = ({justify, arr  }) => {
  return(
    <S.Cards justify={justify}>
      {arr.map((d ,index)=> (
         <S.Card key={index}>
         <img src={DogImage} alt={d.name + d.breed} />
         <S.dogDetails>
           <S.CardName title={d.name}>{d.name}</S.CardName>
           <div>
           <p>{d.breed} </p>
             <p>Age:{d.age}</p>
           </div>
         </S.dogDetails>
       </S.Card>
      ))}
    </S.Cards>
)};

export default DogCard;
