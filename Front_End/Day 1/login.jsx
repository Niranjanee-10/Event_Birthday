// Login.js
import React, { useState } from 'react';
import '../assets/login.css';
import Signup from './signup';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Login logic here');
  };

  const handleSignup = (userData) => {
    // Perform signup logic or pass the data to the login logic
    console.log('Signup logic here', userData);
  };

  const toggleForm = () => {
    // Toggle showSignup based on its current value
    setShowSignup(!showSignup);
  };

  return (
    <div className="login">
      <h1>{showSignup ? 'Signup' : 'Login'}</h1>
      {showSignup ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="u"
            placeholder="Username"
            required="required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Lets Celebrate!
          </button>
        </form>
      )}
      <p onClick={toggleForm} style={{ cursor: 'pointer' }}>
        {showSignup ? 'Already an user? Login' : 'New for Celebration? Signup'}
      </p>
    </div>
  );
};

export default Login;
