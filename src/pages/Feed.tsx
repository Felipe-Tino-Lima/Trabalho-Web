import React, { useState } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { Link } from 'react-router-dom';


const Feed: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);

  const handlePostSubmit = (content: string) => {
    setPosts([content, ...posts]);
  };

  return (
    <div>
      <h1>Feed de Posts</h1>
      <Link to="/login">Login</Link><br></br>
      <Link to="/profile">Acessar Meu Perfil</Link>
      <PostForm onSubmit={handlePostSubmit} />
      {posts.map((post, index) => (
        <Post key={index} username="Usuario 01" content={post} />
      ))}
    </div>
  );
};

export default Feed;
