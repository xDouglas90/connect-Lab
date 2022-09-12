import { Button, Link, Title } from '@atoms';
import { Layout } from '@templates';

import * as S from './styles';

export const Profile = () => {
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

        <Link text="Sair" url="#" />
      </S.Container>
    </Layout>
  );
};
