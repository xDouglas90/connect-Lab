import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@utils';

import { useAuthContext } from '@contexts';

import { ToastContainer, toast } from 'react-toastify';

import { useTheme } from 'styled-components';

import { Layout } from '@templates';
import { Button, Input, Link, Title } from '@atoms';

import * as S from './styles';
import 'react-toastify/dist/ReactToastify.min.css';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({
    resolver: yupResolver(loginSchema),
    validateMode: 'onBlur',
  });

  const { isAuth, handleLogin, errorMsg } = useAuthContext();
  const redirect = useNavigate();

  const theme = useTheme();

  useEffect(() => {
    if (isAuth) {
      toast('Logado com sucesso');
      redirect('/inicio');
    }
  }, [isAuth, redirect]);

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg, {
        autoClose: 7000,
        position: toast.POSITION.TOP_CENTER,
        theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
      });
    }
  }, [errorMsg, theme.title]);

  const handleLoginSubmit = ({ email, password }) => {
    return handleLogin(email, password);
  };

  return (
    <Layout>
      <ToastContainer />

      <S.Form onSubmit={handleSubmit(handleLoginSubmit)}>
        <Title text="Acessar" />

        <Input
          label="E-mail"
          placeholder="Seu e-mail"
          type="email"
          {...register('email')}
        />
        <S.Error>{formState.errors.email?.message}</S.Error>

        <Input
          label="Senha"
          placeholder="Sua senha"
          type="password"
          {...register('password')}
        />
        <S.Error>{formState.errors.password?.message}</S.Error>

        <Button isPrimary text="Acessar" type="submit" />

        <Link text="Cadastrar" url="/registro" />
      </S.Form>
    </Layout>
  );
};
