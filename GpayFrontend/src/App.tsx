import React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import NewEmployee from './components/NewEmployee/NewEmployee';
import { ROUTES } from './constant/routes';
import { GlobalStyle } from './styles/global';

const App = () => (
  <HashRouter>
    <GlobalStyle />
    <Routes>
      <Route path={ROUTES.Home} element={<Dashboard />} />
      <Route path={ROUTES.Employees} element={<NewEmployee />} />
    </Routes>
  </HashRouter>
);

export default App;
