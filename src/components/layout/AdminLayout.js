import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout min-h-screen bg-gray-50">
      {/* Optional: Admin Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Admin</span>
              <button className="text-sm text-blue-600 hover:text-blue-800">Logout</button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="admin-main">
        {children}
      </main>

      {/* Optional: Admin Footer */}
      {/* <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 Industrial Solutions Admin Panel. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default AdminLayout;