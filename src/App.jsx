import MainCard from './components/Cards/MainCard/MainCard';
import GlobalStyle from './styles/globalStyles';
import MainTitle from './components/MainTitle/MainTitle';

import { Container, World } from './styles';
import Blood from './components/Cards/SceneryCards/Blood';
import Sand from './components/Cards/SceneryCards/Sand';
import Road from './components/Cards/SceneryCards/Road';

function App() {

  return (
    <Container>
      <GlobalStyle />
      <MainTitle />
      <MainCard />
      <World>
        <Blood />
        <Sand />
        <Road />
      </World>
    </Container>
  )
}

export default App
