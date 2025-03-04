import React, { useState } from 'react';
import NewPostForm from './NewPostForm';

const NewPostModal = ({ onPostSubmit, onClose, isOpen }) => {
  const [step, setStep] = useState(1);
  const [postContent, setPostContent] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    price: '',
    description: '',
  });

  const handlePostSubmit = () => {
    // Handle the submission of the new post data
    if (step === 1) {
      // If on step 1, proceed to step 2
      setStep(2);
    } else {
      // On step 2, submit the data
      onPostSubmit({ content: postContent, ...formData });
      // Clear the input fields
      setPostContent('');
      setFormData({
        title: '',
        brand: '',
        price: '',
        description: '',
      });
      // Close the modal
      onClose();
      // Reset to step 1 for the next time
      setStep(1);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto ${isOpen ? 'flex' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
    >
      <div className="relative p-8 bg-white w-1/2 mx-auto mt-20 mb-10 rounded-lg">
        <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          {step === 1 ? 'Step 1: Product Details' : 'Step 2: Upload Photos'}
        </h2>
        {step === 1 ? (
          <NewPostForm formData={formData} setFormData={setFormData} onNext={handlePostSubmit} />
        ) : (
          <div>
            <textarea
              className="w-full h-32 p-2 border rounded mb-4"
              placeholder="Write your post here..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handlePostSubmit}
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPostModal;

