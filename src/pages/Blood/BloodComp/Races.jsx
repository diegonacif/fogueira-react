import { Container, Section } from './styles';

import bloodImg from '../../../assets/ultimo_sangue.jpg';

function Races() {
  return (
    <Container>
      <div className="sections">
        <Section>
          <img src={bloodImg} alt="imagem do cenário" />
          <h2>Humanos</h2>
          <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. </p>
        </Section>
        <Section>
          <img src={bloodImg} alt="imagem do cenário" />
          <h2>Ghouls</h2>
          <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. </p>
        </Section>
        <Section>
          <img src={bloodImg} alt="imagem do cenário" />
          <h2>Super Mutantes</h2>
          <p>You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. There you'll find a portal that leads you back home. You'll be allowed to bring any willing characters with you and you'll keep any advantages. Objects and Items you've attained on this journey will disappear though unless stated otherwise. You still need to eat, drink and sleep as before. The Rules of this Trial are simple: Reach the Destination. </p>
        </Section>
      </div>
    </Container>
  )
}

export default Races;