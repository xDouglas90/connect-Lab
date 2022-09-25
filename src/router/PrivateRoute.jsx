import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '@contexts';

export const PrivateRoute = ({ children }) => {
  const { isAuth, isFetching } = useAuthContext();

  if (isFetching) {
    return (
      <div>
        <p>Carregando conteúdo...</p>
      </div>
    );
  }

  return isAuth ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
