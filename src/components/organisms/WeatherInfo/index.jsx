import { useEffect, useState } from 'react';

import { Title } from '@atoms';

import * as S from './styles';
import axios from 'axios';
import { useQuery } from 'react-query';

import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import { date } from '@utils';

const STATE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const API_URL = import.meta.env.VITE_OPEN_WEATHER_API;
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const WeatherInfo = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const {
    userAddress: { city: userCity, state: userState },
  } = user;

  const theme = useTheme();

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

  const today = date();

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
        toast.error(`Informações do tempo indisponíveis`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
        });
      }
    };

    getWeatherFromAPI(API_URL, userCity, API_KEY);
  }, [theme.title, userCity]);

  if (isLoading) {
    return <p>Carregando dados climáticos...</p>;
  }

  return (
    <S.Container>
      <S.WeatherInfosWrapper>
        <S.Temp>
          <Title text={`${parseInt(weatherData.main.temp)}º`} />

          <S.Span>{weatherData.weather[0].description}</S.Span>
        </S.Temp>

        <S.UserCity>
          {userCity}, {stateInitials}
        </S.UserCity>
        <S.Span>{today}</S.Span>
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
          <S.InfoValue>{` ${parseInt(
            weatherData.main.feels_like,
          )}ºC`}</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.TempPlusIcon />
          Temperatura máxima:
          <S.InfoValue>{` ${parseInt(
            weatherData.main.temp_max,
          )}ºC`}</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.TempMinusIcon />
          Temperatura mínima:
          <S.InfoValue>{`${parseInt(
            weatherData.main.temp_min,
          )}ºC`}</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.HumidityIcon />
          Umidade:{' '}
          <S.InfoValue>{` ${parseInt(
            weatherData.main.humidity,
          )}%`}</S.InfoValue>{' '}
        </S.Info>
        <S.Info>
          <S.WindSpeedIcon />
          Velocidade do vento:{' '}
          <S.InfoValue>{` ${parseInt(
            weatherData.wind.speed * 10,
          )}km/h`}</S.InfoValue>{' '}
        </S.Info>
      </S.WeatherInfosWrapper>
    </S.Container>
  );
};
