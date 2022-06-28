import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { List } from 'phosphor-react';

import { Container, Section } from './styles';
import GlobalStyle from '../../styles/globalStyles';

import driveFolder from '../../assets/drive-folder.ico'


function Sidebar({ title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDriveLink() {
    return (
      window.location.assign('https://docs.google.com/spreadsheets/d/1p3eEKcdkyIoJzX0U_i5KeWD9r0-hDN0yutB_zyWTeHg/edit?usp=sharing')
    )
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <button onClick={handleShow}>
          <List />
        </button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{title}</Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="mt-0 mb-0" />
          <Offcanvas.Body>
            <Section>
              <span>Início</span>
              <span>Cenário</span>
              <span>Coisa 3</span>
              <span>Coisa 4</span>
              <span>Coisa 5</span>
              <span>Coisa 6</span>
              <img src={driveFolder} alt="pasta do google drive" onClick={handleDriveLink}/>
            </Section>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default Sidebar;