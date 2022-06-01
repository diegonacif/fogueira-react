import React from 'react';
import { Container } from './styles';

import Image from '../../assets/torch.png';

function Header() {
  return (
    <Container>
      <h1>◆ A FOGUEIRA ◆</h1>
      <img src={Image} alt="image" />
      <button>Google Drive</button>
    </Container>
  );
};

export default Header;