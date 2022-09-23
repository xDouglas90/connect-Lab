import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { createUser } from '@service';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@utils';

import { ToastContainer, toast } from 'react-toastify';
import { Button, Input, Link, Title } from '@atoms';
import { Layout } from '@templates';
import { useTheme } from 'styled-components';

import * as S from './styles';
import 'react-toastify/dist/ReactToastify.min.css';

const STATE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const SignUp = () => {
  const [addressData, setAddressData] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    defaultValues: useMemo(() => addressData, [addressData]),
  });

  const redirect = useNavigate();
  const theme = useTheme();

  const { data } = useQuery(
    'states',
    async () => {
      const { data } = await axios.get(`${STATE_URL}/?orderBy=nome`);

      return data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  );

  useEffect(() => {
    if (data) {
      setStateList(data);
    }
  }, [data]);

  const getDataByCEP = async (cep) => {
    try {
      if (cep.length >= 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`,
        );

        return setAddressData(data);
      }
    } catch (error) {
      toast.error('CEP não encontrado', {
        autoClose: 7000,
        position: toast.POSITION.TOP_CENTER,
        theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
      });
    }
  };

  const filterStateByInitials = (list, data) => {
    const stateByInitials = list.filter((item) => item.sigla === data.uf);
    return stateByInitials[0].nome;
  };

  useEffect(() => {
    if (addressData) {
      reset({
        street: addressData.logradouro,
        neighborhood: addressData.bairro,
        complement: addressData.complemento,
        city: addressData.localidade,
        state: filterStateByInitials(stateList, addressData),
      });
    }
  }, [addressData, reset, stateList]);

  const registerSuccess = () => {
    toast.success('Conta criada com sucesso', {
      autoClose: 4000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });
    reset(addressData);
    setTimeout(() => {
      redirect('/login');
    }, 4000);
  };

  const registerFail = (errorMsg) => {
    toast.error(errorMsg, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await createUser(data);

      if (response.status === 200 || response.status === 201) {
        registerSuccess();
      }
    } catch (error) {
      registerFail(error.response.data.error);
    }
  };

  return (
    <Layout>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />

        <Title text="Cadastrar" />

        <S.FieldsContainer>
          <S.Column>
            <Input
              label="Nome completo*"
              placeholder="Seu nome"
              {...register('fullName', {
                autoComplete: false,
              })}
            >
              <S.Error role="alert">{errors.fullName?.message}</S.Error>
            </Input>

            <Input
              label="URL foto perfil"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('photoUrl', {
                autoComplete: false,
              })}
              placeholder="Sua foto"
            >
              <S.Error role="alert">{errors.photoUrl?.message}</S.Error>
            </Input>

            <Input
              label="Senha*"
              aria-invalid={errors.name ? 'true' : 'false'}
              type="password"
              {...register('password', {
                autoComplete: false,
              })}
              placeholder="Sua senha"
            >
              <S.Error role="alert">{errors.password?.message}</S.Error>
            </Input>

            <Input
              label="CEP*"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('zipCode', {
                autoComplete: false,
                onChange: (e) => getDataByCEP(e.target.value),
              })}
              placeholder="Seu CEP"
            >
              <S.Error role="alert">{errors.zipCode?.message}</S.Error>
            </Input>

            <Input
              label="Estado*"
              aria-invalid={errors.name ? 'true' : 'false'}
              list="state-name"
              {...register('state', {
                autoComplete: false,
              })}
              placeholder="Seu estado"
            >
              <S.Error role="alert">{errors.state?.message}</S.Error>
            </Input>

            <Input
              label="Cidade*"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('city', {
                autoComplete: false,
              })}
              placeholder="Sua cidade"
            >
              <S.Error role="alert">{errors.city?.message}</S.Error>
            </Input>

            <Input
              label="Numero*"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('number', {
                autoComplete: false,
              })}
              placeholder="Número de sua residência"
            >
              <S.Error role="alert">{errors.number?.message}</S.Error>
            </Input>
          </S.Column>

          <S.Column>
            <Input
              label="E-mail*"
              aria-invalid={errors.name ? 'true' : 'false'}
              type="email"
              {...register('email', {
                autoComplete: false,
              })}
              placeholder="Seu e-mail"
            >
              <S.Error role="alert">{errors.email?.message}</S.Error>
            </Input>

            <Input
              label="Telefone"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('phone', {
                autoComplete: false,
              })}
              placeholder="Seu telefone"
            >
              <S.Error role="alert">{errors.phone?.message}</S.Error>
            </Input>

            <Input
              label="Confirmação de senha*"
              aria-invalid={errors.name ? 'true' : 'false'}
              type="password"
              {...register('confirmPassword', {
                autoComplete: false,
              })}
              placeholder="Sua confirmação de senha"
            >
              <S.Error role="alert">{errors.confirmPassword?.message}</S.Error>
            </Input>

            <Input
              label="Logradouro/Endereço*"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('street', {
                autoComplete: false,
              })}
              placeholder="Seu logradouro/endereço"
            >
              <S.Error role="alert">{errors.street?.message}</S.Error>
            </Input>

            <Input
              label="Complemento"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('complement', {
                autoComplete: false,
              })}
              placeholder="Seu complemento"
            >
              <S.Error role="alert">{errors.complement?.message}</S.Error>
            </Input>

            <Input
              label="Bairro*"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('neighborhood', {
                autoComplete: false,
              })}
              placeholder="Seu bairro"
            >
              <S.Error role="alert">{errors.neighborhood?.message}</S.Error>
            </Input>
          </S.Column>
        </S.FieldsContainer>

        <Button isPrimary text="Cadastrar" type="submit" />

        <Link text="Login" onClick={() => redirect('/login')} />
      </S.Form>
    </Layout>
  );
};
