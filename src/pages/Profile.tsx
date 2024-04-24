import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

const Profile: React.FC = () => {
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <UserProfile username="Usuário" bio="Essa é a bio do usuário." />
      <Link to="/">Acessar Meu Feed</Link>
    </div>
  );
};

export default Profile;
