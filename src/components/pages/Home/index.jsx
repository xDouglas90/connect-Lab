import { useState } from 'react';

import { Layout } from '@templates';
import { ProductList, ProductModal, WeatherInfo } from '@organisms';
import { FilterGroup, ProductCard, ProductFullCard } from '@molecules';

import { offIcon, onIcon } from '@icons';

import * as S from './styles';

const products = [
  {
    id: '156941865',
    name: 'Lâmpada',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/m8ycF3b/image-2.png',
    place: 'Casa',
    room: 'Sala',
    state: 'ON',
  },
  {
    id: '156945655',
    name: 'Sensor Temperatura',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/m5F5CHT/image-3.png',
    place: 'Casa',
    room: 'Sala',
    state: 'OFF',
  },
  {
    id: '156941333',
    name: 'Sensor de movimento',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/y5Sw051/image-9.png',
    place: 'Escritório',
    room: 'Corredor',
    state: 'OFF',
  },
  {
    id: '15694865',
    name: 'Lâmpada',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/m8ycF3b/image-2.png',
    place: 'Casa',
    room: 'Sala',
    state: 'ON',
  },
  {
    id: '1569655',
    name: 'Sensor Temperatura',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/m5F5CHT/image-3.png',
    place: 'Casa',
    room: 'Sala',
    state: 'OFF',
  },
  {
    id: '1541333',
    name: 'Sensor de movimento',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/y5Sw051/image-9.png',
    place: 'Escritório',
    room: 'Corredor',
    state: 'OFF',
  },
  {
    id: '1569415',
    name: 'Lâmpada',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/m8ycF3b/image-2.png',
    place: 'Casa',
    room: 'Sala',
    state: 'ON',
  },
  {
    id: '1569455',
    name: 'Sensor Temperatura',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/m5F5CHT/image-3.png',
    place: 'Casa',
    room: 'Sala',
    state: 'OFF',
  },
  {
    id: '156333',
    name: 'Sensor de movimento',
    manufacturer: 'Intelbras',
    image: 'https://i.ibb.co/y5Sw051/image-9.png',
    place: 'Escritório',
    room: 'Corredor',
    state: 'OFF',
  },
];

export const Home = () => {
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleOpenProductModal = (e) => {
    const selectedEl = e.target.dataset.id;

    const product = products.filter((item) => item.id === selectedEl);

    setProductModalOpen(true);
    setSelectedProduct(...product);
  };

  const handleCloseProductModal = () => setProductModalOpen(false);

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
              onClick={(e) => handleOpenProductModal(e)}
            />
          ))}
        </ProductList>
      </S.Container>

      <ProductModal
        isOpen={isProductModalOpen}
        onRequestClose={handleCloseProductModal}
      >
        <ProductFullCard
          product={selectedProduct}
          stateIcon={selectedProduct.state === 'OFF' ? offIcon : onIcon}
        />
      </ProductModal>
    </Layout>
  );
};
