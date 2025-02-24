// src/components/PasswordProtect.js
import React, { useState, useEffect } from 'react';

const PasswordProtect = ({ children }) => {
  const [passwordVerified, setPasswordVerified] = useState(false);

  useEffect(() => {
    const verifyPassword = async () => {
      const password = prompt('Please enter the password:');
      if (password === 'arpanet') {
        setPasswordVerified(true);
      } else {
        alert('Incorrect password. Access denied.');
        window.location.href = 'https://www.grokitdata.com'; // Redirect to another page
      }
    };
    verifyPassword();
  }, []);

  if (!passwordVerified) {
    return null; // Render nothing until password is verified
  }

  return <>{children}</>;
};

export default PasswordProtect;
