import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const TopNavigationBar = () => {
  return (
    <div className="top-navbar">
      <div className="logo">
        <h2>CookHub</h2>
        {/* <img src="Our logo url goes here" alt="Logo" /> */}
      </div>
      
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/all-recipes">All Recipes</Link>
        <Link to="/favorite-recipes">Favorite Recipes</Link>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search recipes..." />
        <button>Search</button>
      </div>

      <div className="login-button">
        <button>Login</button>
      </div>
    </div>
  );
};

export default TopNavigationBar;