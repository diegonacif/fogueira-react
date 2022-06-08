import React from 'react';
import { Container } from './styles';
import Img from '../../../assets/Fogueira.jpg';
import RuneButton from '../../RuneButton/RuneButton';
import { Link } from 'react-router-dom';

function BloodCard() {
  return (
    <Container>
      <img src={Img} alt="homem de costas, sentado em frente a uma fogueira" />
      <p>Blood. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. </p>
      <Link to="/blood">
        <RuneButton page="blood" />
      </Link>
    </Container>
  );
}

export default BloodCard;