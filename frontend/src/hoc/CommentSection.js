import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentSection = ({ postId, currentUser }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (!currentUser) {
      // If the user is not logged in, show a notification
      toast.error('Please log in to leave a comment.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Assuming you have a function to send the comment to the backend
    // For now, we'll just add the comment to the local state
    setComments((prevComments) => [
      ...prevComments,
      {
        user: {
          username: currentUser.login.username,
          picture: currentUser.picture && currentUser.picture.thumbnail,
          name: `${currentUser.name.first} ${currentUser.name.last}`,
        },
        text: commentText,
      },
    ]);
    setCommentText('');
  };

  return (
    <div className="max-w-2xl mx-auto overflow-hidden mt-4 p-5">
      {/* Display comments */}
      {comments.map((comment, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center">
            {comment.user.picture && (
              <img
                src={comment.user.picture}
                alt={`Thumbnail of ${comment.user.username}`}
                className="rounded-full h-8 w-8 mr-2"
              />
            )}
            <strong>{comment.user.name}:</strong> {comment.text}
          </div>
        </div>
      ))}

      {/* Comment input */}
      <div className="flex items-center mt-2">
        <input
          type="text"
          placeholder="Add a review..."
          className="flex-grow outline-none p-2"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 text-white rounded bg-blue-500"
          onClick={handleCommentSubmit}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
