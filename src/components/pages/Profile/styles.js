import styled from 'styled-components';

import { Link } from '@atoms';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 48px;
  gap: 28px;

  width: 381px;
  height: 399.55px;

  background: var(--common-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 285px;
  height: 60px;
`;

export const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
`;

export const AvatarPic = styled.div`
  background: var(--common-lt-gray);
  border-radius: 50%;
  width: 58.82px;
  height: 60px;
  display: grid;
  place-content: center;
  color: var(--primary-main);
  font-weight: 700;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 215px;
  height: 38px;
`;

export const UserName = styled.strong`
  color: var(--common-dk-gray);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
`;

export const UserContact = styled.p`
  color: var(--common-black);
  font-size: 12px;
  margin: 0;

  a {
    color: var(--common-dk-gray);
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
  align-items: flex-start;
  padding: 0px;

  width: 285px;
  height: 57.55px;
`;

export const AddressTitle = styled.strong`
  border-bottom: 1px solid var(--common-dk-gray);
  color: var(--common-dk-gray);
  font-weight: 700;
  font-size: 14px;
  text-transform: capitalize;
  width: 100%;
`;

export const AddressZipCode = styled.p`
  color: var(--common-dk-gray);
  font-weight: 400;
  font-size: 12px;
`;

export const Address = styled.p`
  color: var(--common-dk-gray);
  font-size: 10px;
`;
