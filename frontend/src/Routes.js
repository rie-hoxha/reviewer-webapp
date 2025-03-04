import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login';
// Import other components as needed

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* Add more routes for other components/pages */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
