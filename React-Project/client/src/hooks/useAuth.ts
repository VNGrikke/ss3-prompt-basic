import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { loginUser, registerUser, logoutUser, clearError } from '../store/slices/authSlice';
import { User } from '../types';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isLoading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      return dispatch(loginUser(credentials));
    },
    [dispatch]
  );

  const register = useCallback(
    async (userData: { name: string; email: string; password: string }) => {
      return dispatch(registerUser(userData));
    },
    [dispatch]
  );

  const logout = useCallback(async () => {
    return dispatch(logoutUser());
  }, [dispatch]);

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    clearError: clearAuthError,
  };
};
