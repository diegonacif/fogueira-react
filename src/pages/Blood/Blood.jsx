import React from 'react';
import { Outlet } from 'react-router-dom';
import Scenery from './BloodComp/Scenery';
import BloodHome from './BloodHome';

function Blood() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Blood;