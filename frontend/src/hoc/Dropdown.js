import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    // Navigate to the user's profile page
    navigate('/profile');
  };

  const handleLogoutClick = () => {
    // Handle logout action
    navigate('');
  };

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate('/');
  };

  return (
    <div className="relative inline-block text-left">
      <span
        onClick={handleDropdownClick}
        type="button"
        className="flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer"
        id="user-dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div className="flex items-center">
          {user ? (
            <>
              {user.picture && (
                <img
                  src={user.picture.thumbnail}
                  alt={`Thumbnail of ${user.login.username}`}
                  className="rounded-full h-8 w-8 mr-2"
                />
              )}
             {user.name && typeof user.name === 'object' ? (
  <span>{` ${user.name.first} ${user.name.last}`}</span>
) : (
  <span>{user.name}</span>
)}


            </>
          ) : (
            'Welcome'
          )}
        </div>
      </span>

     {/* Dropdown Content */}
     {isOpen && (
        <div
          className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-dropdown"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
      {user ? (
        <>
          <span
            onClick={handleProfileClick}
            className="block px-4 font-medium py-2 text-sm cursor-pointer hover:bg-gray-100"
          >
            Profile
          </span>
                {/* Add more dropdown options */}
                <span
                  onClick={handleLogoutClick}
                  className="block px-4 font-medium py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  Log Out
                </span>
              </>
            ) : (
              // If user is not logged in, show "Log In" option
              <span
                onClick={handleLoginClick}
                className="block px-4 font-medium py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                Log In
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
