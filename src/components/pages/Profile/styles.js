import styled from 'styled-components';

import { colors } from '@styles';

import { setValueByTheme } from '@utils';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 44px 0;
  width: 338px;
  height: 399.55px;

  background: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-white)',
      'rgba( 255, 255, 255, 0.25 )',
    )};
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '0 4px 4px rgba(129,216,187, 0.27)',
    )};
  border-radius: 10px;

  @media (min-width: 576px) {
    padding: 44px 48px;
    width: 381px;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 10px;

  width: 285px;
  height: 60px;
`;

export const UserAvatar = styled.figure`
  width: 77px;
  height: 77px;
`;

export const AvatarPic = styled.img`
  border: 2px solid transparent;
  border-radius: 50%;
  width: 77px;
  height: 77px;
  display: grid;
  place-content: center;
  color: ${colors.primary.main};
  font-weight: 700;
  outline: 2px solid var(--primary);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 165px;
  height: 38px;
`;

export const UserName = styled.strong`
  color: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-dk-gray)',
      'var(--common-white)',
    )};
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-transform: capitalize;
`;

export const UserContact = styled.p`
  color: ${({ theme }) =>
    setValueByTheme(theme.title, 'var(--common-black)', 'var(--common-white)')};
  font-size: 12px;
  margin: 0;

  a {
    color: ${({ theme }) =>
      theme.title === 'Claro'
        ? 'var(--common-dk-gray)'
        : 'var(--common-white)'};
    font-size: 12px;
  }

  a:nth-child(2) {
    text-decoration: none;
  }
`;

export const UserAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 285px;
  height: 57.55px;
`;

export const AddressTitle = styled.strong`
  border-bottom: 1px solid
    ${({ theme }) =>
      setValueByTheme(
        theme.title,
        'var(--common-dk-gray)',
        'var(--common-white)',
      )};
  color: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-dk-gray)',
      'var(--common-white)',
    )};
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
`;

export const AddressZipCode = styled.p`
  color: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-dk-gray)',
      'var(--common-white)',
    )};
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

export const Address = styled.p`
  color: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-dk-gray)',
      'var(--common-white)',
    )};
  font-size: 10px;
  text-align: center;
`;
