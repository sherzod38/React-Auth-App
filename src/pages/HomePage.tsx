import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

// Stil obyekti
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px 0',
  },
  link: {
    color: '#2196F3',
    textDecoration: 'none',
    margin: '10px 0',
    display: 'inline-block',
  }
};

export const HomePage = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div style={styles.container}>
      <h1>Bosh Sahifa</h1>
      {isAuthenticated ? (
        <>
          <p>Xush kelibsiz, {user?.username}!</p>
          <button style={styles.button} onClick={logout}>Chiqish</button>
          <br />
          <Link style={styles.link} to="/profile">Profilga o'tish</Link>
        </>
      ) : (
        <>
          <p>Iltimos, himoyalangan sahifalarga kirish uchun tizimga kiring</p>
          <Link style={styles.link} to="/login">Kirish</Link>
        </>
      )}
    </div>
  );
};