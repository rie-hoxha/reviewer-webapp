import React, { useState } from 'react';
import Login from '../components/Login';

const LoginPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow border rounded-2xl text-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to continue</p>
        </div>
        {showLogin ? (
          <Login onLogin={onLogin} />
        ) : (
          <button
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
