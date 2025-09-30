import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from './Login.module.css';

const Login = () => {
  const { user, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    login({ nome: 'Usuário Exemplo', email: 'exemplo@teste.com' });
  };

  if (user) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Bem-vindo, {user.nome}!</h2>
        <button className={styles.button} onClick={logout}>Sair</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Você não está logado.</h2>
      <button className={styles.button} onClick={handleLogin}>Fazer Login</button>
    </div>
  );
};

export default Login;
