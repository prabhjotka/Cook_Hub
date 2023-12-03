
import React, { useState } from 'react';
import '../styles/styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const handleLogin = () => {

    //login logic here
    console.log('Logging in with:', { username, password });
  };

  const handleCancel = () => {
    // Add any cancel logic or redirection here
    console.log('Login cancelled');
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