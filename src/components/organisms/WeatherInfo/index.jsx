import { useEffect, useState } from 'react';
import { useAuthContext } from '@contexts';
// import PropTypes from 'prop-types';

import { Title } from '@atoms';

import * as S from './styles';
import axios from 'axios';
import { useQuery } from 'react-query';

const STATE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const API_URL = import.meta.env.VITE_OPEN_WEATHER_API;
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const WeatherInfo = () => {
  const { user } = useAuthContext();
  const {
    userAddress: { city: userCity, state: userState },
  } = user;

  const [apiStates, setApiStates] = useState(null);
  const [stateInitials, setStateInitials] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setApiStates(data);
    }
  }, [data]);

  useEffect(() => {
    const getStateInitials = (stateList, stateFullName) => {
      const filteredState = stateList.filter(
        (state) => state.nome === stateFullName,
      );

      return filteredState[0].sigla;
    };

    if (apiStates) {
      setStateInitials(getStateInitials(apiStates, userState));
    }
  }, [apiStates, userState]);

  useEffect(() => {
    const getWeatherFromAPI = async (url, city, key) => {
      try {
        const response = await axios.get(
          `${url}weather?q=${city},br&APPID=${key}&units=metric&lang=pt_br`,
        );

        setWeatherData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getWeatherFromAPI(API_URL, userCity, API_KEY);
  }, [userCity]);

  if (isLoading) {
    return <p>Carregando dados climáticos...</p>;
  }

  return (
    <S.Container>
      <S.WeatherInfosWrapper>
        <S.Temp>
          <Title text={`${parseInt(weatherData.main.temp)}º`} />

          <S.Info>{weatherData.weather[0].description}</S.Info>
        </S.Temp>

        <S.UserCity>
          {userCity}, {stateInitials}
        </S.UserCity>
      </S.WeatherInfosWrapper>

      <S.WeatherIcon
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        title={weatherData.weather[0].description}
      />

      <S.WeatherInfosWrapper>
        <S.Info>
          <S.TempFeelsLikeIcon />
          Sensação térmica:
          <S.InfoValue>{` ${parseInt(weatherData.main.feels_like)}ºC`}</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.TempPlusIcon />
          Temperatura máxima:
          <S.InfoValue>{` ${parseInt(weatherData.main.temp_max)}ºC`}</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.TempMinusIcon />
          Temperatura mínima:
          <S.InfoValue>{`${parseInt(weatherData.main.temp_min)}ºC`}</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.UmidityIcon />
          Umidade: <S.InfoValue>{` ${parseInt(weatherData.main.humidity)}%`}</S.InfoValue>{' '}
        </S.Info>
      </S.WeatherInfosWrapper>
    </S.Container>
  );
};

// WeatherInfo.propTypes = {};
