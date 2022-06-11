import React from "react";
import GlobalStyle from "../../styles/globalStyles";
import { Container, Section } from './styles';

import bloodImg from '../../assets/ultimo_sangue.jpg';
import SceneryHeader from "../../components/SceneryHeader/SceneryHeader";

function Blood () {
  return (
    <Container>
      <GlobalStyle />
      <SceneryHeader
        title="Até o Último Sangue"
        sideTitle="Guia de Sobrevivência"
      />
      <Section>
        <img src={bloodImg} alt="imagem do cenário" />
        <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise.</p>
        
      </Section>    
    </Container>
  );
};

export default Blood;