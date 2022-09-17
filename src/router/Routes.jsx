import { Routes as AppRoutes, Route, Navigate } from 'react-router-dom';

import { Devices, Home, Profile, SignIn, SignUp } from '@pages';

import { PrivateRoute } from './PrivateRoute';

export const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registro" element={<SignUp />} />
      <Route
        path="/inicio"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/dispositivos"
        element={
          <PrivateRoute>
            <Devices />
          </PrivateRoute>
        }
      />
      <Route
        path="/perfil"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<SignIn />} />
    </AppRoutes>
  );
};
