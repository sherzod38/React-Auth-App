import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export const ProfilePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (_jsxs("div", { style: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            position: 'relative' // Orqaga tugmasi uchun
        }, children: [_jsx("button", { onClick: () => navigate('/'), style: {
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '8px 16px',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }, children: "\u2190 Bosh sahifaga qaytish." }), _jsx("h1", { style: { textAlign: 'center' }, children: "Profil Sahifasi" }), user && (_jsxs("div", { style: {
                    marginTop: '50px',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                }, children: [_jsxs("p", { children: [_jsx("strong", { children: "Foydalanuvchi nomi:" }), " ", user.username] }), _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " ", user.email] }), _jsxs("p", { children: [_jsx("strong", { children: "Rol:" }), " ", user.role || 'oddiy foydalanuvchi'] })] }))] }));
};
