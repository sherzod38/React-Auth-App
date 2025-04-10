import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      position: 'relative' // Orqaga tugmasi uchun
    }}>
      {/* Orqaga qaytish tugmasi */}
      <button
          onClick={() => navigate('/')} // Bosh sahifaga qaytish
          style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '8px 16px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ddd',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Bosh sahifaga qaytish.
      </button>

      <h1 style={{ textAlign: 'center' }}>Profil Sahifasi</h1>
      
      {user && (
        <div style={{
          marginTop: '50px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px'
        }}>
          <p><strong>Foydalanuvchi nomi:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role || 'oddiy foydalanuvchi'}</p>
        </div>
      )}
    </div>
  );
};