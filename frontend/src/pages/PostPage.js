import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../hoc/Navbar';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactStars from 'react-rating-stars-component';
import CommentSection from '../hoc/CommentSection';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

// ... (previous imports and code)

const PostPage = ({ currentUser }) => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [postUploader, setPostUploader] = useState(null);
  const [rating, setRating] = useState(0);

  // Fetch a random user for the post uploader and post data based on postId
  useEffect(() => {
    // Fetch post data from JSONPlaceholder API
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);

        // Fetch a random user from the Random User Generator API for the post uploader
        axios
          .get('https://randomuser.me/api/')
          .then((randomUserResponse) => {
            setPostUploader(randomUserResponse.data.results[0]);
          })
          .catch((randomUserError) => {
            console.error('Error fetching random user data:', randomUserError);
          });
      })
      .catch((error) => {
        console.error('Error fetching post data:', error);
      });
  }, [postId]);

  // Slick carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Rating component settings
  const ratingSettings = {
    size: 30,
    count: 5,
    value: rating,
    isHalf: false,
    onChange: (newValue) => setRating(newValue),
  };

  return (
    <div className="flex flex-col" style={{ backgroundColor: '#F3F4F6' }}>
      <Navbar currentUser={currentUser /* Pass the currently logged-in user to the Navbar component */} />
      <div className="flex-grow p-10">
        {post && postUploader ? (
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl overflow-hidden px-5 pb-5">
            {/* User Photo and Username */}
            <div className="flex justify-between items-center mb-4">
              {/* User Info */}
              <div className="flex items-center">
                {postUploader.picture && (
                  <img
                    src={postUploader.picture.thumbnail}
                    alt={`Thumbnail of ${postUploader.login.username}`}
                    className="rounded-full h-8 w-8 mr-2"
                  />
                )}
                {postUploader.name && typeof postUploader.name === 'object' ? (
                  <span>{` ${postUploader.name.first} ${postUploader.name.last}`}</span>
                ) : (
                  <span>{postUploader.name}</span>
                )}
              </div>

              {/* Rating Stars */}
              <ReactStars {...ratingSettings} />
            </div>

            {/* User Info and Post Details */}
            <div className="py-3">
              {/* Caption/Description */}
              <p className="text-lg font-semibold mb-2">{post.title}</p>

              {/* Additional Details */}
              <div className="flex flex-col">
                <p className="text-gray-600">{post.body}</p>
                {/* Add other details as needed */}
              </div>
            </div>

            {/* Image Carousel */}
            <Slider {...carouselSettings}>
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-full h-64">
                  <img
                    src={`https://via.placeholder.com/800x400?text=Image+${index}`}
                    alt={`Post ${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>

            {/* Comment Section */}
            <CommentSection postId={postId} currentUser={currentUser /* Pass the currently logged-in user to the CommentSection component */} />

            {/* Toast Container for Notifications */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
          </div>
        ) : (
          <p>Loading...</p> // Display loading indicator while fetching data
        )}
      </div>
    </div>
  );
};

export default PostPage;
