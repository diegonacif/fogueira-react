import React from 'react';
import { Container, Section } from './styles';

import bloodImg from '../../../assets/ultimo_sangue.jpg';

import { Carousel } from 'react-bootstrap';

function Scenery() {
  return (
    <>
      <Container>    
        <Section>
        <img src={bloodImg} alt="imagem do cenário" />
        <h2>Areia e Cinzas</h2>
        <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise.</p>
        </Section>      

        <Section id="overView">
          <h2>Regras</h2>
          <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home.</p>
          <img src={bloodImg} alt="imagem do cenário" />
          <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home.</p>
        </Section>

        {/* Carrossel de imagens */}
        <Carousel className="mt-4 mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '15rem'}}
              src={bloodImg}
              alt="First slide"
            />            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '15rem'}}
              src={bloodImg}
              alt="Second slide"
            />            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '15rem'}}
              src={bloodImg}
              alt="Third slide"
            />            
          </Carousel.Item>
        </Carousel>
      </Container>  
    </>
  )
}

export default Scenery;