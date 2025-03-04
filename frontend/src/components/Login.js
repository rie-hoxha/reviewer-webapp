import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UserCard = ({ user, onLogin }) => (
  <div className="bg-white p-4 rounded shadow">
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold mb-2">Log in as:</p>
      <div>
        <img
          src={user.picture.thumbnail}
          alt={`Thumbnail of ${user.login.username}`}
          className="rounded-full h-8 w-8 mb-2"
        />
      </div>
      <p className="text-lg font-semibold">{user.login.username}</p>
    </div>
    <button
      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => onLogin(user)}
    >
      Log In
    </button>
  </div>
);


const Login = ({ onLogin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch random user accounts from Random User Generator API
    axios.get('https://randomuser.me/api/?results=5')
      .then(response => setUsers(response.data.results))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-80">
      {users.map((user, index) => (
        <UserCard key={index} user={user} onLogin={onLogin} />
      ))}
    </div>
  );
};

export default Login;

