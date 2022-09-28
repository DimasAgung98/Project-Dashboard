import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//IMPORT PAGES
import DashboardPage from './pages/dashboard';
//IMPORT GLOBAL CSS
import './index.css';
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);
