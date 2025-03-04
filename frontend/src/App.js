import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import FeedPage from './pages/FeedPage';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import NewPostModal from './components/NewPostModal';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (user) => {
    console.log("Logging in:", user);
    setCurrentUser(user);
    // Perform any additional actions upon login if needed
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to="/feed" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            currentUser ? <Profile user={currentUser} /> : <Navigate to="/" />
          }
        />

        <Route
          path="/feed"
          element={<FeedPage posts={[]} currentUser={currentUser} />}
        />
        <Route
          path="/category/:categoryId"
          element={<CategoryPage currentUser={currentUser} />}
        />
        <Route path="/post/:postId" element={<PostPage currentUser={currentUser} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
