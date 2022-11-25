import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { paths } from './configRoutes';

export const PrivateRoute = () => {
  const { isAdmin } = useAppSelector(({ user }) => user);

  return isAdmin ? <Outlet /> : <Navigate to={paths.REDIRECT} />;
};
