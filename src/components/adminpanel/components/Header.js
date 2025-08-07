import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      height: 60,
      background: '#282c34',
      color: '#fff'
    }}>
      <h1>adminpanel</h1>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
