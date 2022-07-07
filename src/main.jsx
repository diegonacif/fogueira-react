import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'
import Blood from './pages/Blood/Blood';
import BloodHome from './pages/Blood/BloodComp/BloodHome';
import Scenery from './pages/Blood/BloodComp/Scenery';
import Map from './pages/Blood/BloodComp/Map';
import Population from './pages/Blood/BloodComp/Population';
import Races from './pages/Blood/BloodComp/Races';
import Creatures from './pages/Blood/BloodComp/Creatures';
import Concepts from './pages/Blood/BloodComp/Concepts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blood" element={<Blood />}>
          <Route index element={<BloodHome />} />
          <Route path="scenery" element={<Scenery />} />
          <Route path="map" element={<Map />} />
          <Route path="population" element={<Population />} />
          <Route path="races" element={<Races />} />
          <Route path="creatures" element={<Creatures />} />
          <Route path="concepts" element={<Concepts />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
)
