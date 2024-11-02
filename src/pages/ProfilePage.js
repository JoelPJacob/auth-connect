import React from 'react';
import { clearSession } from '../utils/auth';
import "./ProfilePage.css";

const ProfilePage = ({ user, onLogout }) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      clearSession();
      onLogout();
    }
  };

  return (
    <div className="profile-page">
      <h1>Welcome, {user.name} 👋</h1>
      <img src={user.picture} alt="Profile" />
      <p>Email: {user.email}</p>
      <div onClick={handleLogout} className="logout-button">Logout</div>
    </div>
  );
};

export default ProfilePage;
