import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>Dashboard</Link>
            <Link to="/patients" className={styles.link}>Pacientes</Link>
            <Link to="/agendamento" className={styles.link}>Agendamento</Link>
          </nav>
          <div className={styles.userArea}>
            {user && (
              <>
                <span className={styles.greeting}>Olá, {user.nome}</span>
                <button className={styles.logoutButton} onClick={logout}>Sair</button>
              </>
            )}
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
