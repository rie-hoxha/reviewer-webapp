import React from 'react';
import CategoryCard from './CategoryCard';


const Feed = ({ categories }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {categories.map(category => (
        <div key={category.id} className="group">
          <CategoryCard name={category.name} description={category.description} />
        </div>
      ))}
    </div>
  );
};


export default Feed;
