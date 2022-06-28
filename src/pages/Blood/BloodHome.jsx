import React, { useEffect } from "react";
import { Container, Section, Footer } from './styles';

import bloodImg from '../../assets/ultimo_sangue.jpg';
import SceneryHeader from "../../components/SceneryHeader/SceneryHeader";
import RuneButton from '../../components/RuneButton/RuneButton';

function BloodHome () {
  // useEffect (() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Container>
      <SceneryHeader
        title="Até o Último Sangue"
        sideTitle="Guia de Sobrevivência"
      />
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
          <RuneButton />
        </Section>
      </div>
      <Footer>
        <h2>Fallout - Metro - Warhammer40k</h2>
      </Footer>
    </Container>
  );
};

export default BloodHome;