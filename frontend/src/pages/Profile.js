import React, { useState } from 'react';
import Navbar from '../hoc/Navbar';

const Profile = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar currentUser={user} />

      {/* Banner */}
      <div className="bg-white p-5 shadow-md  rounded-xl flex items-center justify-center">
        {/* Left Column */}
        <div className="flex">
          <div className="flex flex-col">
            <div className="rounded-full overflow-hidden w-40 h-40 mx-10">
              <img src={user.picture.large} alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              {user.name && typeof user.name === 'object' ? (
                <h1 className="text-xl font-semibold">
                  Welcome, {`${user.name.first} ${user.name.last}`}!
                </h1>
              ) : (
                <h1 className="text-xl font-semibold">Welcome, {user.name}!</h1>
              )}
            </div>
          </div>

          {/* Right Column (Profile Information) */}
          <div className="flex flex-col ml-20">
            <h2 className="text-2xl font-semibold text-gray-800 my-4 bg-gray-100 rounded-xl flex items-center justify-center">Profile Information</h2>
            <p>
              <span className='text-gray-500 font-semibold'>Name:</span> {user.name && typeof user.name === 'object' ? `${user.name.first} ${user.name.last}` : user.name}
            </p>
            <p>
              <span className='text-gray-500 font-semibold'>Gender:</span> {user.gender}
            </p>
            <p>
              <span className='text-gray-500 font-semibold'>Email:</span> {user.email}
            </p>
          </div>

          <div className='flex flex-col ml-20 my-4'>
            <h2 className='font-semibold text-2xl text-gray-800 bg-gray-100 flex items-center justify-center rounded-xl mb-3'>Friends</h2>
            <div>
              <span className='mr-5'><strong>50</strong> followers</span>
              <span><strong>65</strong> following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 ">
        {/* Add main content here */}
        <div className="flex items-center justify-center bg-white p-5 rounded-xl">
          <p
            className={`font-semibold text-2xl mr-10 px-5 flex items-center justify-center border-t ${
              selectedTab === 'posts'
                ? 'border-gray-700 text-gray-800 hover:border-gray-700 hover:text-gray-800 hover:text-semibold cursor-pointer'
                : 'border-gray-300 text-gray-500 hover:border-gray-700 hover:text-gray-800 hover:text-semibold cursor-pointer'
            }`}
            onClick={() => handleTabClick('posts')}
          >
            Posts
          </p>

          <p
            className={`font-semibold text-2xl mr-10 px-5 flex items-center justify-center border-t ${
              selectedTab === 'reviews'
                ? 'border-gray-700 text-gray-800 hover:border-gray-700 hover:text-gray-800 hover:text-semibold cursor-pointer'
                : 'border-gray-300 text-gray-500 hover:border-gray-700 hover:text-gray-800 hover:text-semibold cursor-pointer'
            }`}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
