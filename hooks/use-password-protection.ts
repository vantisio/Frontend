'use client';

import { useState } from 'react';

export function usePasswordProtection(correctPassword: string) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const authenticate = (password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setIsLoading(true);
      setError(null);

      // Simulate API delay
      setTimeout(() => {
        if (password === correctPassword) {
          setIsAuthenticated(true);
          setIsLoading(false);
          resolve(true);
        } else {
          setError('رمز عبور اشتباه است');
          setIsLoading(false);
          resolve(false);
        }
      }, 500);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    error,
    authenticate,
    logout,
  };
}
