import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs("div", { style: styles.container, children: [_jsx("h1", { children: "Bosh Sahifa" }), isAuthenticated ? (_jsxs(_Fragment, { children: [_jsxs("p", { children: ["Xush kelibsiz, ", user?.username, "!"] }), _jsx("button", { style: styles.button, onClick: logout, children: "Chiqish" }), _jsx("br", {}), _jsx(Link, { style: styles.link, to: "/profile", children: "Profilga o'tish" })] })) : (_jsxs(_Fragment, { children: [_jsx("p", { children: "Iltimos, himoyalangan sahifalarga kirish uchun tizimga kiring" }), _jsx(Link, { style: styles.link, to: "/login", children: "Kirish" })] }))] }));
};
