import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const sections = ['Dashboard', 'Users', 'Settings', 'Reports', 'Analytics'];

  return (
    <aside style={{
      width: 200,
      background: '#f0f0f0',
      padding: 20,
      height: 'calc(100vh - 60px)'
    }}>
      {sections.map(sec => {
        const path =
          sec === 'Dashboard'
            ? '/dashboard'
            : `/dashboard/${sec.toLowerCase()}`;

        return (
          <div key={sec} style={{ margin: '10px 0' }}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'blue' : 'black'
              })}
            >
              {sec}
            </NavLink>
          </div>
        );
      })}
    </aside>
  );
}
