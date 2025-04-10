import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/Input';

type LoginForm = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ 
        username: form.username,
        email: `${form.username}@example.com`, // AuthContext talab qiladi
        role: 'user' // ProtectedRoute uchun
      });
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Tizimga Kirish</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Foydalanuvchi nomi"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          label="Parol"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default LoginPage;