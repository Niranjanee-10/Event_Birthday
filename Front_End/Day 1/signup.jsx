// Signup.js
import React, { useState } from 'react';
import '../assets/signup.css';

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Perform signup logic, for now, let's just pass the data to the parent component
    onSignup({ name, email, password, confirmPassword });

    // Clear the form fields after signup
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required="required"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required="required"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
