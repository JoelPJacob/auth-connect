import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import "./LoginPage.css"

const REACT_APP__GOOGLE_CLIENT_ID = "726382112345-sbcja2afjvuirdd6sqkjsmlruf5ri583.apps.googleusercontent.com"

const LoginPage = ({ onLoginSuccess }) => {
  const clientId = { REACT_APP__GOOGLE_CLIENT_ID }
  // const clientId = {process.env.REACT_APP__GOOGLE_CLIENT_ID}
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSuccess = (response) => {
    setLoading(false);
    try {
      const userObject = jwtDecode(response.credential);
      console.log("Decoded User:", userObject);
      onLoginSuccess(userObject);
      navigate('/profile');
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const handleFailure = (error) => {
    setLoading(false);
    console.log("Login Failed:", error);
  };

  const handleLoginClick = () => {
    setLoading(true);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Login with Google</h1>
        {loading && <p>Loading...</p>}
        <GoogleLogin
          clientId={clientId}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          isSignedIn={true}
          onClick={handleLoginClick}
          size={'medium'}
          width={"200"}
          logo_alignment={"center"}
          shape={"rectangular"}
        />
      </div>
      <div className="login-right">
        <h2>Auth Connect</h2>
        <p>Welcome! Use Google to quickly access your account and stay connected.</p>
      </div>
    </div>
  );
};

export default LoginPage;
