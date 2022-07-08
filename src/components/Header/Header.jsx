import React from 'react';
import { Container } from './styles';

import torchImage from '../../assets/torch.png';
import driveFolder from '../../assets/drive-folder.ico'

function Header() {
  return (
    <Container>
      <h1>◆ A FOGUEIRA ◆</h1>
      {/* <img src={torchImage} alt="image" id="torch-image" /> */}
      <img src={driveFolder} alt="google drive folder" id="drive-folder" />
      {/* <button>Google Drive</button> */}
    </Container>
  );
};

export default Header;