
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import NewProject from './pages/NewProject';
import Reports from './pages/Reports';
import Logs from './pages/Logs';
import UserManagement from './pages/UserManagement';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
