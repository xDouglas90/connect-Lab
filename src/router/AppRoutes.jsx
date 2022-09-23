import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { AuthProvider } from '@contexts';

import { Devices, Home, Profile, SignIn, SignUp } from '@pages';

import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/login" element={<SignIn />} />
          <Route path="/registro" element={<SignUp />} />
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dispositivos"
            element={
              <PrivateRoute>
                <Devices />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/perfil"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<SignIn />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
