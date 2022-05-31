import React from 'react';
import { Container } from './styles';
import rune from '../../assets/rune2.png';



function RuneButton({ page }) {

  function handleClick() {
    return console.log(page)
  }

  return (
    <Container>
      <img src={rune} alt="runa" onClick={() => handleClick()}/>
    </Container>
  );
};

export default RuneButton;

