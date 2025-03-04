import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ name, description }) => {
  // Use the category name as a unique identifier for the route
  const categoryId = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link to={`/category/${categoryId}`}>
      <div className="max-w-xs mx-auto bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform group-hover:scale-105 cursor-pointer">
        <div className="p-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
