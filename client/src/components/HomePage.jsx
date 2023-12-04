import React from 'react';
import HomeCarousel from './HomeCarousel';
import { useAuth } from './AuthContext';
import '../styles/styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleClick = function() {
    navigate('/recipes');
  }
  return (
    <div>
      <HomeCarousel />
      {!user && (
        <div className="guest-button-container">
          <button className="guest-button" onClick={handleClick}>Continue As Guest</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;