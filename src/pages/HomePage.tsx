import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Bosh Sahifa</h1>
      {isAuthenticated ? (
        <>
          <p>Xush kelibsiz, {user?.username}!</p>
          <button onClick={logout}>Chiqish</button>
          <br />
          <Link to="/profile">Profil sahifasi</Link>
        </>
      ) : (
        <>
          <p>Iltimos, tizimga kiring</p>
          <Link to="/login">Kirish</Link>
        </>
      )}
    </div>
  );
};