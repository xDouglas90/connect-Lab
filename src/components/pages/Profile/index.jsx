import { useState } from 'react';
import { useAuthContext } from '@contexts';
import { useTheme } from 'styled-components';

import { formatName } from '@utils';

import { motion } from 'framer-motion';

import { toast } from 'react-toastify';

import { Layout } from '@templates';
import { Button, Link, Title } from '@atoms';

import { DefaultAvatar } from '@images';

import * as S from './styles';
import { EditUserModal } from '@organisms';

export const Profile = () => {
  const { logout, user, isFetching } = useAuthContext();
  const theme = useTheme();
  const [isEditUserModalOpen, setEditUserModalOpen] = useState(false);

  const handleLogout = () => {
    toast.success('Você deslogou de sua conta', {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });

    setTimeout(() => {
      logout();
    }, 3500);
  };

  const handleCloseEditUserModal = () => setEditUserModalOpen(false);

  if (isFetching) return <p>Carregando...</p>;

  return (
    <Layout>
      <S.Container
        as={motion.article}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Title text="Meu perfil" />

        <S.ProfileHeader>
          <S.UserAvatar>
            {user.photoUrl ? (
              <S.AvatarPic src={user.photoUrl} alt="Foto do usuário" />
            ) : (
              <S.AvatarPic src={DefaultAvatar} alt="Avatar padrão" />
            )}
          </S.UserAvatar>
          <S.UserInfo>
            <S.UserName>{formatName(user.fullName)}</S.UserName>
            <S.UserContact>
              <a href="mailto:{user.email}">{user.email}</a> <br />
              {user.phone && <a href="tel:{user.phone}">{user.phone}</a>}
            </S.UserContact>
          </S.UserInfo>
        </S.ProfileHeader>

        <S.UserAddress>
          <S.AddressTitle>Endereço</S.AddressTitle>
          <S.AddressZipCode>{user.userAddress.zipCode}</S.AddressZipCode>
          <S.Address>
            {formatName(user.userAddress.street)}, {user.userAddress.number} -{' '}
            {formatName(user.userAddress.complement)} -{' '}
            {formatName(user.userAddress.neighborhood)} -{' '}
            {formatName(user.userAddress.city)} -{' '}
            {formatName(user.userAddress.state)}{' '}
          </S.Address>
        </S.UserAddress>

        <Button
          isPrimary
          text="Editar"
          onClick={() => setEditUserModalOpen(true)}
        />

        <Link text="Sair" url="/" onClick={handleLogout} />
      </S.Container>

      <EditUserModal
        isOpen={isEditUserModalOpen}
        onRequestClose={handleCloseEditUserModal}
        userData={user}
      />
    </Layout>
  );
};
