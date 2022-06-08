import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'
import Blood from './pages/Blood/Blood';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blood" element={<Blood />} />
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
)
