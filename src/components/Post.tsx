import React from 'react';
import LikeButton from './LikeButton';


interface PostProps {
  username: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ username, content }) => {
  return (
    <div className="post">
      <h3>{username}</h3>
      <p>{content}</p>
      <LikeButton /> {/* Renderiza o componente LikeButton dentro do componente Post */}
    </div>
  );
};

export default Post;