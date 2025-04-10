import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const HomePage = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2.5rem'
        }}>
          Bosh Sahifa
        </h1>

        {isAuthenticated ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              color: '#34495e'
            }}>
              Xush kelibsiz, <span style={{ fontWeight: 'bold' }}>{user?.username}</span>!
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <button
                onClick={logout}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
              >
                Chiqish
              </button>
              
              <Link
                to="/profile"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
              >
                Profil sahifasi
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              color: '#34495e'
            }}>
              Iltimos, tizimga kiring
            </p>
            
            <Link
              to="/login"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
            >
              Kirish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};