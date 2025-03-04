// import React, { useEffect, useState } from 'react';
// import Feed from '../components/Feed';
// import Navbar from '../hoc/Navbar';

// const FeedPage = ({ currentUser }) => {
//   // Sample data for categories
//   const sampleCategories = [
//     {
//       "name": "Skincare",
//       "description": "Explore the latest skincare products and routines."
//     },
//     {
//       "name": "Technology",
//       "description": "Stay updated on the latest tech trends and innovations."
//     },
//     {
//       "name": "Travel",
//       "description": "Discover amazing travel destinations and tips."
//     },
//     {
//       "name": "Sports fashion",
//       "description": "Dedicated to sports enthuasiasts for their comfort."
//     },
//     {
//       "name": "Electronics",
//       "description": "Explore the latest electronic gadgets and devices."
//     },
//     {
//       "name": "Clothing",
//       "description": "Discover trendy clothing styles and fashion accessories."
//     },
//     {
//       "name": "Home & Kitchen",
//       "description": "Find products to enhance your home and kitchen spaces."
//     },
//     {
//       "name": "Beauty & Personal Care",
//       "description": "Discover beauty products and personal care essentials."
//     },
//     {
//       "name": "Hygiene",
//       "description": "Discover beauty products and personal care essentials."
//     },
//     // Add more categories as needed
//   ];

//   // State to store the fetched categories
//   const [categories, setCategories] = useState([]);

//   // useEffect to set categories with sample data when the component mounts
//   useEffect(() => {
//     setCategories(sampleCategories);
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div className="flex flex-col " style={{ backgroundColor: '#F3F4F6' }}>
//       <Navbar currentUser={currentUser} />
//       <div className="flex-grow p-10">
//         <h2 className="text-3xl font-extrabold text-gray-900 m-10 text-center ">Categories </h2>
//         {/* Pass the sample categories to the Feed component */}
//         <Feed categories={categories} />
//       </div>
//     </div>
//   );
// };


// export default FeedPage;


import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import Navbar from '../hoc/Navbar';

const FeedPage = ({ currentUser }) => {
  // State to store the fetched categories
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/categories', {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
          },
        })


        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); 

  return (
    <div className="flex flex-col " style={{ backgroundColor: '#F3F4F6' }}>
      <Navbar currentUser={currentUser} />
      <div className="flex-grow p-10">
        <h2 className="text-3xl font-extrabold text-gray-900 m-10 text-center ">Categories </h2>

        {loading && <p>Loading categories...</p>}
        {error && <p>Error: {error}</p>}

        {/* Pass the fetched categories to the Feed component */}
        {!loading && !error && <Feed categories={categories} />}
      </div>
    </div>
  );
};

export default FeedPage;
