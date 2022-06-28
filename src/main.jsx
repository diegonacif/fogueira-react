import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'
import Blood from './pages/Blood/Blood';
import BloodHome from './pages/Blood/BloodHome';
import Scenery from './pages/Blood/BloodComp/Scenery';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blood" element={<Blood />}>
          <Route path="bloodhome" element={<BloodHome />} />
          <Route path="scenery" element={<Scenery />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
)
