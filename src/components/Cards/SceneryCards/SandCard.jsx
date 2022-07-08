import React from 'react';
import { Container } from './styles';
import Img from '../../../assets/Areia_Cinzas.jpg';
import RuneButton from '../../RuneButton/RuneButton';

function SandCard() {
  return (
    <Container>
      <div className="imgWp">
        <img src={Img} alt="homem de costas, sentado em frente a uma fogueira" />
      </div>
      <h2>Areia e Cinzas</h2>
      <p>Há muito tempo a terra foi abandonada, após o uso de todos seus recursos, conseguiu voltar ao seu estado natural. Uma pequena colônia de humanos que havia sido exilada para a morte para o outro lado da galáxia, achou novamente o que havia sido sua casa, há muito tempo esquecida nos livros de história. Com recursos esgotados fizeram base perto de grandes estruturas no deserto com objetivo de juntar comida e combustível para a nave. Nativos da região foram aparecendo...
      </p>
      <RuneButton page="sand" />
    </Container>
  );
}

export default SandCard;