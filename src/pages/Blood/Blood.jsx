import React from 'react';
import { Outlet } from 'react-router-dom';
import SceneryHeader from '../../components/SceneryHeader/SceneryHeader';
import GlobalStyle from '../../styles/globalStyles';
import { Footer } from './BloodComp/styles';

function Blood() {
  return (
    <>
      <SceneryHeader title="Até o Último Sangue" sideTitle="Guia de Sobrevivência" />
      <GlobalStyle />
      <Outlet />
      <Footer>
        <h2>Fallout - Metro - Warhammer40k</h2>
      </Footer>
    </>
  );
}

export default Blood;