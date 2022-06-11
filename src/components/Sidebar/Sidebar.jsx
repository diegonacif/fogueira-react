import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Container, Section } from './styles';
import { List } from 'phosphor-react';
import GlobalStyle from '../../styles/globalStyles';


function Sidebar({ title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <hr />
          <Offcanvas.Body>
            <Section>
              <span>Cenário</span>
              <span>Coisa 2</span>
              <span>Coisa 3</span>
              <span>Coisa 4</span>
              <span>Coisa 5</span>
              <span>Coisa 6</span>
            </Section>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default Sidebar;