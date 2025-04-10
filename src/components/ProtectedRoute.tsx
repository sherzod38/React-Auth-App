import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Himoyalangan yo'l propslari
interface ProtectedRouteProps {
  roles?: string[];  // Ruxsat etilgan rollar
}

export const ProtectedRoute = ({ roles }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  // Agar foydalanuvchi autentifikatsiyadan o'tmagan bo'lsa, login sahifasiga yo'naltirish
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Agar foydalanuvchi roli ruxsat etilmagan bo'lsa, bosh sahifaga yo'naltirish
  if (roles && (!user?.role || !roles.includes(user.role))) {
    return <Navigate to="/" replace />;
  }

  // Bolalar komponentlarini chiqarish
  return <Outlet />;
};