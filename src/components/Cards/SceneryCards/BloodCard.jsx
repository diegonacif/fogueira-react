import React from 'react';
import { Container } from './styles';
import Img from '../../../assets/ultimo_sangue.jpg';
import RuneButton from '../../RuneButton/RuneButton';
import { Link } from 'react-router-dom';

function BloodCard() {
  return (
    <Container>
      <div className="imgWp">
        <img src={Img} alt="homem de costas, sentado em frente a uma fogueira" />
      </div>
      <h2>Até o Último Sangue</h2>
      <p>Miami é um lugar difícil, não são as gangues ou os Deathclaws, são as malditas tempestades de areia ou algo muito, muito pior… Este lugar costumava ser bonito, gente de todo lugar vinha passar as férias nessas praias, famílias com crianças e trabalhadores americanos. Ah mas isso já faz um bom tempo, esse lugar costuma ser o paraíso, mas agora você tem esses garotos do norte com suas gangues, e nem vou comentar sobre os vendedores de escravos. Mas as pessoas aqui sobrevivem, alguns coletando suprimentos, outros roubando, os de bom coração se juntam para formar comunidades de proteção. </p>
      <Link to="/blood">
        <RuneButton page="blood" />
      </Link>
    </Container>
  );
}

export default BloodCard;