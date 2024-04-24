

import React, { useState } from 'react'; 

const LikeButton = () => { 

  const [likes, setLikes] = useState(0); 
  const [liked, setLiked] = useState(false); 

 
  const handleLike = () => {
    if (!liked) { 
      setLikes(likes + 1); 
      setLiked(true); 
    } else { 
      setLikes(likes - 1); 
      setLiked(false); 
    }
  };

  
  return (
    <div>
 
      <button onClick={handleLike}>
      
        {liked ? 'Descurtir' : 'Curtir'}
      </button>
      
      <span>{likes} {likes === 1 ? 'curtida' : 'curtidas'}</span>
    </div>
  );
};

export default LikeButton; 
