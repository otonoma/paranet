// src/components/PasswordProtect.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Import CSS module for styling

const PasswordProtect = ({ children }) => {
  const [password, setPassword] = useState('');
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Correct password
  const CORRECT_PASSWORD = 'arpanet';

  // Check if already verified (e.g., via sessionStorage)
  useEffect(() => {
    const isVerified = sessionStorage.getItem('passwordVerified');
    if (isVerified === 'true') {
      setPasswordVerified(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setPasswordVerified(true);
      sessionStorage.setItem('passwordVerified', 'true'); // Persist verification
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword(''); // Clear input on error
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Redirect if not verified and user tries to bypass
  if (!passwordVerified && error && error !== '') {
    setTimeout(() => {
      window.location.href = 'https://www.otonoma.com';
    }, 2000); // Redirect after 2 seconds if wrong
  }

  if (!passwordVerified) {
    return (
      <div className={styles.overlay}>
        <div className={styles.passwordContainer}>
          <h2 className={styles.title}>The Paranet is Invite Only</h2>
          <p className={styles.subtitle}>Please enter the password to continue.</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={styles.input}
                autoFocus
                aria-label="Password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={styles.toggleButton}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PasswordProtect;
