import MainCard from './components/Cards/MainCard/MainCard';
import GlobalStyle from './styles/globalStyles';
import { Container, World } from './styles';

import MainTitle from './components/MainTitle/MainTitle';
import Blood from './components/Cards/SceneryCards/Blood';
import Sand from './components/Cards/SceneryCards/Sand';
import Road from './components/Cards/SceneryCards/Road';
import Header from './components/Header/Header';

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Header />
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
