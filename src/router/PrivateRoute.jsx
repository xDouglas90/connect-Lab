import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '@contexts';

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuthContext();

  return isAuth ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
