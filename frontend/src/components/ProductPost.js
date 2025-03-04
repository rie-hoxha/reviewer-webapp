import React from 'react';

const ProductPost = ({ post }) => {
  const { title, author, images, description, price, brand, categories } = post;

  return (
    <div className="max-w-md w-full space-y-4 p-4 bg-white shadow border rounded-2xl">
      {/* Thumbnail and username */}
      <div className="flex items-center">
        {author && author.picture && (
          <img
            src={author.picture.thumbnail}
            alt={`Thumbnail of ${author.login.username}`}
            className="rounded-full h-8 w-8 mr-2"
          />
        )}
        {author && author.login && (
          <p className="text-sm text-gray-500">Posted by {author.login.username}</p>
        )}
      </div>

      {/* Text and product images */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        {images && images.length > 0 && (
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index + 1}`} className="max-w-full h-20 object-cover" />
            ))}
          </div>
        )}
      </div>

      {/* Product details */}
      <div>
        <p className="text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">Price: {price}</p>
        <p className="text-sm text-gray-500">Brand: {brand}</p>
        <p className="text-sm text-gray-500">Categories: {categories.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProductPost;
