import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import LoginPage from "./pages/LoginPage"; // <- default import (qavs yo'q)
import { ProfilePage } from './pages/ProfilePage';
// Asosiy stil
const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
};
export const App = () => {
    return (_jsx("div", { style: appStyle, children: _jsx(AuthProvider, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { element: _jsx(ProtectedRoute, {}), children: _jsx(Route, { path: "/profile", element: _jsx(ProfilePage, {}) }) })] }) }) }) }));
};
