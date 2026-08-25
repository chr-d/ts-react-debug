import { createContext, use } from 'react';
import type { AuthContextValue } from './AuthProvider';

export const AuthContext = createContext<AuthContextValue>(null);

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { default as AuthProvider } from './AuthProvider';
