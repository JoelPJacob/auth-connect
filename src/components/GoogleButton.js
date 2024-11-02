// src/components/GoogleButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../constants';

const GoogleButton = ({ onSuccess, onFailure }) => (
  <GoogleLogin
    clientId={GOOGLE_CLIENT_ID}
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy="single_host_origin"
  />
);

export default GoogleButton;
