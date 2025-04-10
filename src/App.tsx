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
  return (
    <div style={appStyle}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};