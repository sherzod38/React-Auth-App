import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/Input';

type LoginForm = {
  username: string;
  password: string;
};

export const LoginPage: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};
    let isValid = true;

    if (!form.username.trim()) {
      newErrors.username = 'Foydalanuvchi nomi kiritilishi shart';
      isValid = false;
    }

    if (!form.password) {
      newErrors.password = 'Parol kiritilishi shart';
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Parol kamida 6 belgidan iborat bo\'lishi kerak';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      await login({ 
        username: form.username,
        email: `${form.username}@example.com`,
        role: 'user'
      });
      navigate('/profile');
    } catch (error) {
      setErrors({
        username: 'Kirish muvaffaqiyatsiz',
        password: 'Noto\'g\'ri foydalanuvchi nomi yoki parol'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto',
      padding: '2rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Tizimga Kirish
      </h1>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Foydalanuvchi nomi"
          name="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
        
        <Input
          label="Parol"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        
        <button 
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: isLoading ? '#cccccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '1rem'
          }}
        >
          {isLoading ? 'Kutilmoqda...' : 'Kirish'}
        </button>
      </form>
    </div>
  );
};