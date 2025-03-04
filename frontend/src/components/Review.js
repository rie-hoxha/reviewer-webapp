import React, { useState } from 'react';

const Review = ({ addReview, currentUser }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ text: '' });
    

  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Assuming currentUser has a structure like { username: '...', profilePicture: '...' }
    addReview({
      text: newReview,
      username: currentUser.username,
      profilePicture: currentUser.profilePicture,
      timestamp: new Date().toLocaleString(),
    });

    // Clear the input
    setNewReview('');
  };

  return (
    <div className="max-w-2xl mx-auto overflow-hidden mt-4 p-5">
        <form onSubmit={handleReviewSubmit} className="flex items-center" >
        <textarea
          className="flex-grow outline-none background-transparent"
          placeholder="Leave a review"
          value={newReview}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 text-white rounded bg-blue-500"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default Review;
