import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(onTimeout, 1000); 
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="splash-screen">
      <h1 className="splash-text">Auth Connect</h1>
    </div>
  );
};

export default SplashScreen;
