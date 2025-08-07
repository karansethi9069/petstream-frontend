import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  {
    name:   'Jane Cooper',
    email:  'jane.cooper@example.com',
    title:  'Regional Paradigm Technician',
    status: 'Active',
    age:     27,
    role:   'adminpanel',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name:   'Cody Fisher',
    email:  'cody.fisher@example.com',
    title:  'Product Directives Officer',
    status: 'Inactive',
    age:     43,
    role:   'Owner',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    name:   'Esther Howard',
    email:  'esther.howard@example.com',
    title:  'Forward Response Developer',
    status: 'Active',
    age:     32,
    role:   'Member',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name:   'Jenny Wilson',
    email:  'jenny.wilson@example.com',
    title:  'Central Security Manager',
    status: 'Offline',
    age:     29,
    role:   'Member',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name:   'Kristin Watson',
    email:  'kristin.watson@example.com',
    title:  'Lean Implementation Liaison',
    status: 'Inactive',
    age:     36,
    role:   'adminpanel',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
  }
];

// map status → styling
const statusStyles = {
  Active:   { background: '#d4edda', color: '#155724' },
  Inactive: { background: '#fff3cd', color: '#856404' },
  Offline:  { background: '#f8d7da', color: '#721c24' },
};

export default function UsersTable() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Users</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif'
      }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>
              Name
            </th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>
              Title
            </th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>
              Status
            </th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>
              Age
            </th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email}>
              {/* Name + avatar */}
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 600 }}>{user.name}</div>
                    <div style={{ fontSize: 12, color: '#555' }}>{user.email}</div>
                  </div>
                </div>
              </td>

              {/* Title */}
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                {user.title}
              </td>

              {/* Status */}
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 8px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 600,
                  ...statusStyles[user.status]
                }}>
                  {user.status}
                </span>
              </td>

              {/* Age */}
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                {user.age}
              </td>

              {/* Role */}
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}