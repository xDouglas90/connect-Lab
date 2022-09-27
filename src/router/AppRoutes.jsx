import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '@contexts';

import { AnimatedRoutes } from './AnimatedRoutes';

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
};
