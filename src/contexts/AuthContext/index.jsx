import { createContext, useContext, useState } from 'react';
import axios from '@service';
import PropTypes from 'prop-types';

const LOGIN_URL = 'auth/login';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  const handleLogin = async (email, password) => {
    console.log('Usuário antes: ', authUser);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email,
          password,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(JSON.stringify(response?.data));

      setAuthUser({ ...response?.data });
      setIsFetching(false);
      console.log('Usuário depois: ', authUser);
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('Sem resposta do servidor');
      } else if (error.response?.status === 401) {
        setErrorMsg('Não autorizado');
      } else if (error.response?.status === 400) {
        setErrorMsg('Email ou Senha inválidos');
      } else {
        setErrorMsg('Falha no Login');
      }
    }
  };

  const handleLogout = () => setAuthUser({});

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!authUser,
        handleLogin,
        handleLogout,
        isFetching,
        errorMsg,
        setErrorMsg
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
