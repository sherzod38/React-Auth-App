import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/Input';
const LoginPage = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({
                username: form.username,
                email: `${form.username}@example.com`, // AuthContext talab qiladi
                role: 'user' // ProtectedRoute uchun
            });
            navigate('/profile');
        }
        catch (error) {
            console.error('Login error:', error);
        }
    };
    return (_jsxs("div", { style: { maxWidth: '400px', margin: '0 auto', padding: '20px' }, children: [_jsx("h1", { children: "Tizimga Kirish" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx(Input, { label: "Foydalanuvchi nomi", name: "username", value: form.username, onChange: handleChange }), _jsx(Input, { label: "Parol", type: "password", name: "password", value: form.password, onChange: handleChange }), _jsx("button", { type: "submit", children: "Kirish" })] })] }));
};
export default LoginPage;
