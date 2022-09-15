import styled from 'styled-components';

import { Title } from '../../atoms/Title/styles';

import { setValueByTheme } from '@utils';

export const Container = styled.section`
  background: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-white)',
      'rgba( 255, 255, 255, 0.25 )'
    )};
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
    )};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 380px;
  padding: 40px 0;
  width: 100%;

  ${Title} {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    height: 215px;
    padding: 26px 0;
  }
`;

export const UserCity = styled.strong`
  color: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-dk-gray)',
      'var(--common-white)'
    )};;
  font-size: 32px;
  font-weight: 400;
`;

export const WeatherInfosWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Info = styled.span`
  color: var(--text);
  font-size: 24px;
`;
