import React from 'react';
import { Container } from './styles';
import { Dropdown } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar';

import torchImage from '../../assets/torch.png';
import driveFolder from '../../assets/drive-folder.ico'

function SceneryHeader({ title, sideTitle }) {
  function handleDriveLink() {
    return (
      window.location.assign('https://docs.google.com/spreadsheets/d/1p3eEKcdkyIoJzX0U_i5KeWD9r0-hDN0yutB_zyWTeHg/edit?usp=sharing')
    )
  }

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