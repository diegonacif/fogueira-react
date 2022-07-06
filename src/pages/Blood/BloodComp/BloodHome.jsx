import React, { useEffect } from "react";
import { Container, Section, Footer } from './styles';

import bloodImg from '../../../assets/ultimo_sangue.jpg';
import RuneButton from '../../../components/RuneButton/RuneButton';
import { Link } from "react-router-dom";

function BloodHome () {
  useEffect (() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>    
      <div className="sections">
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
        <Section>
          <img src={bloodImg} alt="imagem do cenário" />
          <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home.</p>
          <Link to="/">
            <RuneButton />
          </Link>
        </Section>
      </div>    
    </Container>
  );
};

export default BloodHome;