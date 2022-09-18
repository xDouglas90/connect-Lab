import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@utils';

import { useAuthContext } from '@contexts';

import { Layout } from '@templates';
import { Button, Input, Link, Title } from '@atoms';

import * as S from './styles';

export const SignIn = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const redirect = useNavigate();
  const { isAuth, handleLogin, errorMsg } = useAuthContext();

  const errorRef = useRef();

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

  const handleLoginSubmit = ({ email, password }) => {
    return handleLogin(email, password);
  };

  return (
    <Layout>
      <S.Form onSubmit={handleSubmit(handleLoginSubmit)}>
        <p ref={errorRef} aria-live="assertive">
          {errorMsg}
        </p>
        <Title text="Acessar" />
        <Input
          label="E-mail"
          placeholder="Seu e-mail"
          type="email"
          {...register('email')}
        />
        <Input
          label="Senha"
          placeholder="Sua senha"
          type="password"
          {...register('password')}
        />
        <Button isPrimary text="Acessar" type="submit" />
        <Link text="Cadastrar" url="/registro" />
      </S.Form>
    </Layout>
  );
};
