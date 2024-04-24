import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula a autenticação
    if (username === 'usuario' && password === 'senha') {
      setLoggedIn(true);
    } else {
      alert('Nome de usuário ou senha inválidos!');
    }
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Perfil do Usuário</h1>
        <UserProfile username={username} bio="Essa é a bio do usuário." />
        <Link to="/">Acessar Meu Feed</Link>
      </div>
    );
  }

  return (
    <section id="login">
      <div className="container">
        <h1>Minha Rede Social</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <p>
          {/* Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link> */}
        </p>
      </div>
    </section>
  );
};

export default Login;