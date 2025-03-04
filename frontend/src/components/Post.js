// src/components/Post.js
import React from 'react';

const Post = ({ title, content, author }) => {
  return (
    <div className="max-w-md w-full space-y-4 p-4 bg-white shadow border rounded-2xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <p className="text-sm text-gray-500">Author: {author}</p>
    </div>
  );
};

export default Post;
