import { useState } from 'react';
import { products } from '@utils';

import { Layout } from '@templates';
import { ProductList, ProductModal, WeatherInfo } from '@organisms';
import { FilterGroup, ProductCard, ProductFullCard } from '@molecules';

import { offIcon, onIcon } from '@icons';

import * as S from './styles';

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
