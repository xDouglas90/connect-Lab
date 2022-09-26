import { createContext, useContext, useEffect, useState } from 'react';
import { api, createSession } from '@service';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const recoveredUser = sessionStorage.getItem('user');
    const recoveredToken = sessionStorage.getItem('token');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    if (recoveredToken) {
      setUserToken(recoveredToken);
    }

    setIsFetching(false);
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await createSession(email, password);

      setIsFetching(false);

      const loggedUser = JSON.stringify(response?.data.user);
      const token = response?.data.token;

      sessionStorage.setItem('user', loggedUser);
      sessionStorage.setItem('token', token);

      setUser(JSON.parse(sessionStorage.getItem('user')));
      setUserToken(sessionStorage.getItem('token'));
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('Sem resposta do servidor');
      } else if (error.response?.status === 401) {
        setErrorMsg('Email ou Senha inválido(s)');
      } else {
        setErrorMsg('Falha no Login');
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');

    setUser(null);
    setUserToken(null);

    api.defaults.headers.post['Content-Type'] = null;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        user,
        userToken,
        handleLogin,
        logout,
        isFetching,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
