import styled from 'styled-components';

import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureLow } from 'react-icons/fa';
import { TbTemperaturePlus, TbTemperatureMinus } from 'react-icons/tb';

import { Title } from '../../atoms/Title/styles';

import { setValueByTheme } from '@utils';

export const Container = styled.section`
  background: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-white)',
      'var(--common-dk-gray)',
    )};
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '0 4px 4px rgba(129,214,187, 0.27)',
    )};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 380px;
  padding: 40px 0;
  width: 100%;

  ${Title} {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    height: 215px;
    padding: 26px 0;
  }
`;

export const WeatherIcon = styled.img``;

export const UserCity = styled.strong`
  color: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-dk-gray)',
      'var(--common-white)',
    )};
  font-size: 32px;
  font-weight: 400;
`;

export const WeatherInfosWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 20px;

  svg {
    color: ${({ theme }) =>
      setValueByTheme(theme.title, 'var(--primary)', 'var(--secondary)')};
  }
`;

export const InfoValue = styled.strong`
  margin-left: 5px;
`;

export const TempFeelsLikeIcon = styled(FaTemperatureLow)`
  font-size: 22px;
  margin: 0 5px;
`;

export const UmidityIcon = styled(WiHumidity)`
  font-size: 33px;
  margin-left: -3px;
`;

export const TempPlusIcon = styled(TbTemperaturePlus)`
  font-size: 28px;
  margin-right: 5px;
`;

export const TempMinusIcon = styled(TbTemperatureMinus)`
  font-size: 28px;
  margin-right: 5px;
`;
