import React, { useState } from 'react';
import '../styles/styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


import axios from 'axios';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user', {
        username,
        password,
      });
      console.log('API response:', response.data);

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', response.data.token);
      console.log('Token saved:', response.data.token);

     login(username);
      navigate('/');
    } catch (error) {
      console.log('Error:', error);
      setError('Invalid username or password');
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <span
            className="password-toggle"
            onClick={handleTogglePassword}
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </span>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="button-group">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;


