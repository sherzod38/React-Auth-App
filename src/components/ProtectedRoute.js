import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export const ProtectedRoute = ({ roles }) => {
    const { isAuthenticated, user } = useAuth();
    // Agar foydalanuvchi autentifikatsiyadan o'tmagan bo'lsa, login sahifasiga yo'naltirish
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    // Agar foydalanuvchi roli ruxsat etilmagan bo'lsa, bosh sahifaga yo'naltirish
    if (roles && (!user?.role || !roles.includes(user.role))) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    // Bolalar komponentlarini chiqarish
    return _jsx(Outlet, {});
};
