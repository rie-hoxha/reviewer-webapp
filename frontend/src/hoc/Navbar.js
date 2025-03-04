import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import NewPostModal from '../components/NewPostModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ currentUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostSubmit = (newPost) => {
    // Handle the submission of the new post data
    console.log('New Post:', newPost);
    // Optionally, you can send the new post data to the backend or update the state
  };

  return (
    <div className="bg-white flex items-center justify-between border-b shadow-lg py-5 px-10 lg:px-20">
      <div className="flex flex-1 items-center">
        <div className="text-2xl mr-10 font-bold">
          <span className="text-black">Product Review</span>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center ml-5">
            <Link to="/feed" state={{ currentUser }}>
              Categories
            </Link>
          </div>
        </div>
        {/* New Post Modal Trigger Button */}
        <button className="ml-5 bg-blue-500 text-white px-3 py-2 rounded" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" /> New Post
        </button>
        {/* New Post Modal */}
        {isModalOpen && (
          <NewPostModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onPostSubmit={handlePostSubmit}
          />
        )}
      </div>
      <Dropdown user={currentUser} />
    </div>
  );
};

export default Navbar;
