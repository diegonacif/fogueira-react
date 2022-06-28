import MainCard from './components/Cards/MainCard/MainCard';
import GlobalStyle from './styles/globalStyles';
import { Container, World } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

import BloodCard from './components/Cards/SceneryCards/BloodCard';
import SandCard from './components/Cards/SceneryCards/SandCard';
import RoadCard from './components/Cards/SceneryCards/RoadCard';
import Header from './components/Header/Header';


function App() {

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <MainCard />
      <World>
        <BloodCard />
        <SandCard />
        <RoadCard />
      </World>
    </Container>
  )
}

export default App
