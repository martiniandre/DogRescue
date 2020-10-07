import React from 'react';
import DogImage from '../../assets/dog.png';

import dog from './dogs';
import * as S from './style';

const Dog = ({ grid,justify }) => (
    <S.Cards grid={grid}>
      {dog.map((d, index) => (
        <S.Card key={index} justify={justify}>
          <img src={DogImage} alt="" />
          <S.dogDetails>
            <S.CardName title={d.name}>{d.name}</S.CardName>
            <div>
              <p>
                Age:
                {d.idade}
              </p>
              <p>
                Breed:
                {d.raça}
              </p>
            </div>
          </S.dogDetails>
        </S.Card>
      ))}
    </S.Cards>
);

export default Dog;
