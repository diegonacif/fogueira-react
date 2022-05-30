import Cards from './components/Cards/Cards';
import GlobalStyle from './styles/globalStyles';
import MainTitle from './components/MainTitle/MainTitle';

import { Container } from './styles';

function App() {

  return (
    <Container>
      <GlobalStyle />
      <MainTitle />
      <Cards />
    </Container>
  )
}

export default App
