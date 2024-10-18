// src/theme/Layout/index.js
import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import PasswordProtect from '../../components/PasswordProtect';

export default function Layout(props) {
  return (
    <PasswordProtect>
      <OriginalLayout {...props} />
    </PasswordProtect>
  );
}
