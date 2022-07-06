import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { List } from 'phosphor-react';

import { Container, Section } from './styles';
import GlobalStyle from '../../styles/globalStyles';

import driveFolder from '../../assets/drive-folder.ico'
import { Link } from 'react-router-dom';


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
        <Offcanvas show={show} onHide={handleClose} placement="end" responsive="sm">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{title}</Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="mt-0 mb-0" />
          <Offcanvas.Body>
            <Section>
              <Link to="/blood" onClick={handleClose}>
                <span>Início</span>
              </Link>
              <Link to="/blood/scenery" onClick={handleClose}>
                <span>Cenário</span>              
              </Link>
              <Link to="/blood/map" onClick={handleClose}>
                <span>Mapa</span>              
              </Link>         
              <span>Gangues e Milícias</span>
              <span>Raças</span>
              <span>Criaturas</span>
              <span>Conceitos</span>
              <img src={driveFolder} alt="pasta do google drive" onClick={handleDriveLink}/>
            </Section>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default Sidebar;