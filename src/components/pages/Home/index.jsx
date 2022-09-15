import PropTypes from 'prop-types';

import { Layout } from '@templates';
import { ProductList, WeatherInfo } from '@organisms';
import { FilterGroup, ProductCard } from '@molecules';

import { offIcon, onIcon } from '@icons';

import * as S from './styles';

export const Home = () => {
  const products = [
    {
      id: '156941865',
      name: 'Lâmpada',
      image: 'https://i.ibb.co/m8ycF3b/image-2.png',
      place: 'Casa',
      room: 'Sala',
      state: 'ON',
    },
    {
      id: '156945655',
      name: 'Sensor Temperatura',
      image: 'https://i.ibb.co/m5F5CHT/image-3.png',
      place: 'Casa',
      room: 'Sala',
      state: 'OFF',
    },
    {
      id: '156941333',
      name: 'Sensor de movimento',
      image: 'https://i.ibb.co/y5Sw051/image-9.png',
      place: 'Escritório',
      room: 'Corredor',
      state: 'OFF',
    },
    {
      id: '15694865',
      name: 'Lâmpada',
      image: 'https://i.ibb.co/m8ycF3b/image-2.png',
      place: 'Casa',
      room: 'Sala',
      state: 'ON',
    },
    {
      id: '1569655',
      name: 'Sensor Temperatura',
      image: 'https://i.ibb.co/m5F5CHT/image-3.png',
      place: 'Casa',
      room: 'Sala',
      state: 'OFF',
    },
    {
      id: '1541333',
      name: 'Sensor de movimento',
      image: 'https://i.ibb.co/y5Sw051/image-9.png',
      place: 'Escritório',
      room: 'Corredor',
      state: 'OFF',
    },
    {
      id: '1569415',
      name: 'Lâmpada',
      image: 'https://i.ibb.co/m8ycF3b/image-2.png',
      place: 'Casa',
      room: 'Sala',
      state: 'ON',
    },
    {
      id: '1569455',
      name: 'Sensor Temperatura',
      image: 'https://i.ibb.co/m5F5CHT/image-3.png',
      place: 'Casa',
      room: 'Sala',
      state: 'OFF',
    },
    {
      id: '156333',
      name: 'Sensor de movimento',
      image: 'https://i.ibb.co/y5Sw051/image-9.png',
      place: 'Escritório',
      room: 'Corredor',
      state: 'OFF',
    },
  ];

  return (
    <Layout>
      <S.Container>
        <WeatherInfo />
        <FilterGroup />
        <ProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              stateIcon={product.state === 'OFF' ? offIcon : onIcon}
            />
          ))}
        </ProductList>
      </S.Container>
    </Layout>
  );
};

Home.propTypes = {};
