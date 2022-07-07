import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { 
  List, 
  MapTrifold, 
  Scroll, 
  SunHorizon, 
  UserList, 
  UsersThree, 
  LinuxLogo, 
  Mountains 
} from 'phosphor-react';

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
      window.location.href = 'https://docs.google.com/spreadsheets/d/1p3eEKcdkyIoJzX0U_i5KeWD9r0-hDN0yutB_zyWTeHg/edit?usp=sharing'
    )
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <button onClick={handleShow}>
          <List />
        </button>
        <Offcanvas show={show} onHide={handleClose} placement="end" responsive="sm" variant="dark">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{title}</Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="mt-0 mb-0" />
          <Offcanvas.Body>
            <Section>

              <div className="item">
                <SunHorizon size={40} weight="duotone" />
                <Link to="/blood" onClick={handleClose}>
                  <span>Início</span>
                </Link>
              </div>
              <hr className="mt-0 mb-0 w-75" />

              <div className="item">
                <Scroll size={40} weight="duotone" />
                <Link to="/blood/scenery" onClick={handleClose}>
                  <span>Cenário</span>              
                </Link>
              </div>
              <hr className="mt-0 mb-0 w-75" />

              <div className="item">
                <MapTrifold size={40} weight="duotone" />
                <Link to="/blood/map" onClick={handleClose}>
                  <span>Mapa</span>              
                </Link>
              </div>
              <hr className="mt-0 mb-0 w-75" />

              <div className="item">
                <UserList size={40} weight="duotone" />
                <Link to="/blood/population" onClick={handleClose}>
                  <span>População</span>            
                </Link>
              </div>
              <hr className="mt-0 mb-0 w-75" />

              <div className="item">
                <UsersThree size={40} weight="duotone" />
                <Link to="/blood/races" onClick={handleClose}>
                  <span>Raças</span>
                </Link>
              </div>
              <hr className="mt-0 mb-0 w-75" />
              
              <div className="item">
                <LinuxLogo size={40} weight="duotone" />
                <Link to="/blood/creatures" onClick={handleClose}>
                  <span>Criaturas</span>
                </Link>        
              </div>
              <hr className="mt-0 mb-0 w-75" />

              <div className="item">
                <Mountains size={40} weight="duotone" />
                <Link to="/blood/concepts" onClick={handleClose}>
                  <span>Conceitos</span>
                </Link>             
              </div>
              <hr className="mt-0 mb-0 w-75" />

              <img src={driveFolder} alt="pasta do google drive" onClick={handleDriveLink}/>
            </Section>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default Sidebar;