import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export const HomePage = () => {
    const { user, isAuthenticated, logout } = useAuth();
    return (_jsx("div", { style: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh'
        }, children: _jsxs("div", { style: {
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }, children: [_jsx("h1", { style: {
                        color: '#2c3e50',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        fontSize: '2.5rem'
                    }, children: "Bosh Sahifa" }), isAuthenticated ? (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsxs("p", { style: {
                                fontSize: '1.2rem',
                                marginBottom: '1.5rem',
                                color: '#34495e'
                            }, children: ["Xush kelibsiz, ", _jsx("span", { style: { fontWeight: 'bold' }, children: user?.username }), "!"] }), _jsxs("div", { style: {
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '1rem',
                                marginTop: '2rem'
                            }, children: [_jsx("button", { onClick: logout, style: {
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#3498db',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        transition: 'background-color 0.3s'
                                    }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2980b9', onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3498db', children: "Chiqish" }), _jsx(Link, { to: "/profile", style: {
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#3498db',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        transition: 'background-color 0.3s'
                                    }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2980b9', onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3498db', children: "Profil sahifasi" })] })] })) : (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("p", { style: {
                                fontSize: '1.2rem',
                                marginBottom: '2rem',
                                color: '#34495e'
                            }, children: "Iltimos, tizimga kiring" }), _jsx(Link, { to: "/login", style: {
                                padding: '0.75rem 1.5rem',
                                backgroundColor: '#3498db',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'background-color 0.3s'
                            }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2980b9', onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3498db', children: "Kirish" })] }))] }) }));
};
