import { Routes, Route, useLocation } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { Devices, Home, Profile, SignIn, SignUp } from '@pages';

import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route
          path="/"
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
      </Routes>
    </AnimatePresence>
  );
};
