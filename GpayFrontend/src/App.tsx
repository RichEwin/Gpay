import React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </HashRouter>
);

export default App;
