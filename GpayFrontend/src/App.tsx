import React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import NewEmployee from './components/NewEmployee/NewEmployee';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employees" element={<NewEmployee />} />
    </Routes>
  </HashRouter>
);

export default App;
