import React from 'react';
import { Container } from './styles';
import Img from '../../../assets/Longa_Estrada.jpg';
import RuneButton from '../../RuneButton/RuneButton';



function RoadCard() {
  return (
    <Container>
      <div className="imgWp">
        <img src={Img} alt="homem de costas, sentado em frente a uma fogueira" />
      </div>
      <h2>A Longa Estrada</h2>
      <p>Road. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. </p>
      <RuneButton page="road" />
    </Container>
  );
}

export default RoadCard;
