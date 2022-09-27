import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import axios from 'axios';
import { editUser } from '@service';

import { useTheme } from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@utils';

import { toast } from 'react-toastify';

import { Button, Input, Link, Title } from '@atoms';

import * as S from './styles';

Modal.setAppElement('#root');

export const EditUserModal = ({ isOpen, onRequestClose, userData }) => {
  const [addressData, setAddressData] = useState(null);
  const token = sessionStorage.getItem('token');
  const { _id } = JSON.parse(sessionStorage.getItem('user'));
  const theme = useTheme();

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
    defaultValues: useMemo(() => userData, [userData]),
  });

  useEffect(() => {
    if (userData) {
      reset({
        email: userData.email,
        password: userData.password,
        fullName: userData.fullName,
        photoUrl: userData.photoUrl,
        phone: userData.phone,
        zipCode: userData.userAddress.zipCode,
        street: userData.userAddress.street,
        number: userData.userAddress.number,
        neighborhood: userData.userAddress.neighborhood,
        city: userData.userAddress.city,
        state: userData.userAddress.state,
        complement: userData.userAddress.complement,
      });
    }
  }, [userData, reset]);

  useEffect(() => {
    if (addressData) {
      reset({
        street: addressData.logradouro,
        neighborhood: addressData.bairro,
        complement: addressData.complemento,
        city: addressData.localidade,
      });
    }
  }, [addressData, reset]);

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

  const editSuccess = () => {
    toast.success('Usuário editado com sucesso', {
      autoClose: 4000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });
    onRequestClose();
    reset(userData);
  };

  const editFail = (errorMsg) => {
    toast.error(errorMsg, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await editUser(data, token, _id);

      if (response.status === 200 || response.status === 201) {
        editSuccess();
      }
    } catch (error) {
      editFail(error.response.data.error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-container"
    >
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Title text="Cadastrar" />

        <S.FieldsContainer>
          <S.Column>
            <Input
              label="Nome completo*"
              placeholder="Seu nome"
              {...register('fullName', {
                autoComplete: false,
              })}
              aria-label="text"
              aria-required="true"
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

        <Button isPrimary text="Salvar" type="submit" />

        <Link text="Cancelar" onClick={onRequestClose} />
      </S.Form>
    </Modal>
  );
};

EditUserModal.propTypes = {
  userData: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
