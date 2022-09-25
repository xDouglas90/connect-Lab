import { useAuthContext } from '@contexts';

import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import { Button, Link, Title } from '@atoms';
import { Layout } from '@templates';

import * as S from './styles';

export const Profile = () => {
  const { logout } = useAuthContext();

  const theme = useTheme();

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

  return (
    <Layout>
      <S.Container>
        <Title text="Meu perfil" />

        <S.ProfileHeader>
          <S.UserAvatar>
            <S.AvatarPic>DO</S.AvatarPic>
          </S.UserAvatar>
          <S.UserInfo>
            <S.UserName>Douglas Oliveira</S.UserName>
            <S.UserContact>
              <a href="mailto:email@email.com">email@email.com</a> -{' '}
              <a href="tel:+4699999-9999">(46) 99999-9999</a>
            </S.UserContact>
          </S.UserInfo>
        </S.ProfileHeader>

        <S.UserAddress>
          <S.AddressTitle>Endereço</S.AddressTitle>
          <S.AddressZipCode>85500-000</S.AddressZipCode>
          <S.Address>
            Av. Tupi, 5790 - Ap 180 - Centro - Pato Branco - PR{' '}
          </S.Address>
        </S.UserAddress>

        <Button isPrimary text="Editar" />

        <Link text="Sair" url="/" onClick={handleLogout} />
      </S.Container>
    </Layout>
  );
};
