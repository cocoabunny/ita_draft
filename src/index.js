import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InfoPage from './routes/InfoPage'
import EnquiriesPage from './routes/EnquiriesPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/info' element={<InfoPage />} />
    <Route path='enquiries' element={ <EnquiriesPage />} />
  </Routes>
  
  </BrowserRouter>

);
