// src/pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../components/Feed';
import PostFeed from '../components/PostFeed';
import Navbar from '../hoc/Navbar';

const CategoryPage = ({ currentUser }) => {
  const { categoryId } = useParams();


  // For now, let's use static data. In a real app, you would fetch posts for the specific category.
  const postsForCategory = [
    { id: 1, title: 'Post 1', content: 'Content for post 1', author: 'Author 1' },
    { id: 2, title: 'Post 2', content: 'Content for post 2', author: 'Author 2' },
    { id: 3, title: 'Post 3', content: 'Content for post 3', author: 'Author 3' },
    { id: 4, title: 'Post 4', content: 'Content for post 4', author: 'Author 4' },
    { id: 5, title: 'Post 5', content: 'Content for post 5', author: 'Author 5' },
    { id: 6, title: 'Post 6', content: 'Content for post 6', author: 'Author 6' },
    { id: 7, title: 'Post 7', content: 'Content for post 7', author: 'Author 7' },
    { id: 8, title: 'Post 8', content: 'Content for post 8', author: 'Author 8' },
    { id: 9, title: 'Post 9', content: 'Content for post 9', author: 'Author 9' },
    // Add more posts as needed
  ];

  
  return (
    <div className="flex flex-col " style={{ backgroundColor: '#F3F4F6' }} >
      <Navbar currentUser={currentUser} />
      <div className="flex-grow p-10">
        <h2 className="text-3xl font-extrabold text-gray-900 m-10 text-center">{categoryId} Posts</h2>
        {/* Use CategoryFeed for categories */}
        <Feed categories={[/* categories data here */]} />
        {/* Use PostFeed for posts */}
        <PostFeed posts={postsForCategory} />
      </div>
    </div>
  );
};

export default CategoryPage;

