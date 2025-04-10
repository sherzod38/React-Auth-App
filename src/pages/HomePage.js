import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export const HomePage = () => {
    const { user, isAuthenticated, logout } = useAuth();
    return (_jsxs("div", { style: { maxWidth: '800px', margin: '0 auto', padding: '2rem' }, children: [_jsx("h1", { children: "Bosh Sahifa" }), isAuthenticated ? (_jsxs(_Fragment, { children: [_jsxs("p", { children: ["Xush kelibsiz, ", user?.username, "!"] }), _jsx("button", { onClick: logout, children: "Chiqish" }), _jsx("br", {}), _jsx(Link, { to: "/profile", children: "Profil sahifasi" })] })) : (_jsxs(_Fragment, { children: [_jsx("p", { children: "Iltimos, tizimga kiring" }), _jsx(Link, { to: "/login", children: "Kirish" })] }))] }));
};
