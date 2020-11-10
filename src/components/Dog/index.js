import React,{useState,useEffect} from 'react';
import api from '../../services/api'
import DogImage from '../../assets/dog.png';

import * as S from './style';

const Dog = ({ justify }) => {
  const [dogs,setDogs] = useState([])

  useEffect(() => {
    api.get('/dogs')
    .then(resp => setDogs(resp.data))

  },[]);

  return(
    <S.Cards justify={justify}>
      {dogs.map((d, index) => (
        <S.Card key={index}>
          <img src={DogImage} alt="" />
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

export default Dog;
