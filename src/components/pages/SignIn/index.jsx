import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@contexts';

import { Layout } from '@templates';
import { Button, Input, Link, Title } from '@atoms';

import * as S from './styles';

export const SignIn = () => {
  const redirect = useNavigate();
  const { isAuth, handleLogin, errorMsg, setErrorMsg } = useAuthContext();

  const errorRef = useRef();

  const [userEmail, setUserEmail] = useState('');
  const [userPswd, setUserPswd] = useState('');

  useEffect(() => {
    if (errorMsg) {
      errorRef.current.focus();
    }
  }, [errorMsg]);

  useEffect(() => {
    if (isAuth) {
      redirect('/inicio');
    }
  }, [isAuth, redirect]);

  const handleUserEmail = (e) => {
    setErrorMsg('');
    setUserEmail(e.target.value);
  };

  const handleUserPswd = (e) => {
    setErrorMsg('');
    setUserPswd(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    return handleLogin(userEmail, userPswd);
  };

  return (
    <Layout>
      <S.Form>
        <p ref={errorRef} aria-live="assertive">
          {errorMsg}
        </p>
        <Title text="Acessar" />
        <Input
          label="E-mail"
          name="email"
          placeholder="Seu e-mail"
          type="email"
          value={userEmail}
          onChange={handleUserEmail}
        />
        <Input
          label="Senha"
          name="password"
          placeholder="Sua senha"
          type="password"
          value={userPswd}
          onChange={handleUserPswd}
        />
        <Button
          isPrimary
          text="Acessar"
          type="submit"
          onClick={handleLoginSubmit}
        />
        <Link text="Cadastrar" url="/registro" />
      </S.Form>
    </Layout>
  );
};
