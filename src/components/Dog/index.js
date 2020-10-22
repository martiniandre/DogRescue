import React from 'react';
import DogImage from '../../assets/dog.png';

import dog from './dogs';
import * as S from './style';

const Dog = ({ justify }) => (
    <S.Cards justify={justify}>
      {dog.map((d, index) => (
        <S.Card key={index}>
          <img src={DogImage} alt="" />
          <S.dogDetails>
            <S.CardName title={d.name}>{d.name}</S.CardName>
            <div>
            <p>{d.raça} </p>
              <p>Age:{d.idade}</p>

            </div>
          </S.dogDetails>
        </S.Card>
      ))}
    </S.Cards>
);

export default Dog;
