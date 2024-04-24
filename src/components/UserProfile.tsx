import React from 'react';

interface UserProfileProps {
  username: string;
  bio: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, bio }) => {
  return (
    <div className="user-profile">
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
