import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Launchpad from './pages/Launchpad';
import Pipeline from './pages/Pipeline';
import Portfolio from './pages/Portfolio';
import Compliance from './pages/Compliance';
import FinOps from './pages/FinOps';
import Reports from './pages/Reports';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Launchpad />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/finops" element={<FinOps />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Navigate to="/launchpad" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
