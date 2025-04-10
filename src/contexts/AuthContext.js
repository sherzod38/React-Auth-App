import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const login = async (userData) => {
        if (!userData.username || !userData.email) {
            throw new Error('Foydalanuvchi ma\'lumotlari to\'liq emas');
        }
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };
    const isAuthenticated = !!user;
    return (_jsx(AuthContext.Provider, { value: { user, login, logout, isAuthenticated }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
