// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const AppRoutes = ({ user, onLoginSuccess, onLogout }) => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <ProfilePage user={user} onLogout={onLogout} />
          ) : (
            <LoginPage onLoginSuccess={onLoginSuccess} />
          )
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
