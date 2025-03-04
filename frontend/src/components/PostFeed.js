import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const PostFeed = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-10">
      {posts.map(post => (
        <div key={post.id} className="max-w-xs bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform group-hover:scale-105 cursor-pointer">
          {/* Link to the individual post page */}
          <Link to={`/post/${post.id}`}>
            {/* Pass the post data as props to the Post component */}
            <Post title={post.title} content={post.content} author={post.author} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
