import { Title } from '@atoms';
import PropTypes from 'prop-types';

import * as S from './styles';

export const WeatherInfo = () => {
  return (
    <S.Container>
      <Title text="16º" />
      <S.UserCity>Pato Branco, PR</S.UserCity>
      <S.WeatherInfosWrapper>
        <S.Info>Sensação térmica: 15ºC</S.Info>
        <S.Info>-</S.Info>
        <S.Info>Precipitação: 0mm</S.Info>
        <S.Info>-</S.Info>
        <S.Info>Chance de chuva: 0%</S.Info>
      </S.WeatherInfosWrapper>
    </S.Container>
  );
};

WeatherInfo.propTypes = {};
