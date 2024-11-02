import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SplashScreen from './components/SplashScreen';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const REACT_APP__GOOGLE_CLIENT_ID = "726382112345-sbcja2afjvuirdd6sqkjsmlruf5ri583.apps.googleusercontent.com";

  const handleLoginSuccess = (profile) => {
    setUser(profile);
    setIsLoading(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoading(true);
  };

  return (
    // <GoogleOAuthProvider clientId={process.env.REACT_APP__GOOGLE_CLIENT_ID}>
    <GoogleOAuthProvider clientId={REACT_APP__GOOGLE_CLIENT_ID}>
      <Router>
        {isLoading ? (
          <SplashScreen onTimeout={() => setIsLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/profile" element={user ? <ProfilePage user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
