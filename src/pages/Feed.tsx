import React, { useState } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { Link } from 'react-router-dom';


const Feed: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);

  const handlePostSubmit = (content: string) => {
    setPosts([content, ...posts]);
  };
  function refreshPage(){ 
    window.location.reload(); 
}

  return (
    <div> <button type="button" onClick={ refreshPage }> <span>Reload</span> </button>
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
