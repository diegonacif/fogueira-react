import React from 'react';
import { Container } from './styles';
import Sidebar from '../Sidebar/Sidebar';

import torchImage from '../../assets/torch.png';

function SceneryHeader({ title, sideTitle }) {
  

  return (
    <Container>
      <h1>{title}</h1>
      <img src={torchImage} alt="image" id="torch-image" />
      {/* <img src={driveFolder} alt="google drive folder" id="drive-folder" onClick={handleDriveLink} /> */}
      <Sidebar title={sideTitle}/>
    </Container>
  );
};

export default SceneryHeader;