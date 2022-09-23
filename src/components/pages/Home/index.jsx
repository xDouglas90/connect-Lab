import { useEffect, useState } from 'react';
import { useAuthContext } from '@contexts';
import { getUserDevices } from '@service';

import { Layout } from '@templates';
import { ProductList, ProductModal, WeatherInfo } from '@organisms';
import { FilterGroup, ProductCard, ProductFullCard } from '@molecules';

import { offIcon, onIcon } from '@icons';

import * as S from './styles';

export const Home = () => {
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { userToken, user } = useAuthContext();
  const [userDevicesList, setUserDevicesList] = useState([]);

  useEffect(() => {
    const getListFromAPI = async () => {
      try {
        const response = await getUserDevices(user._id, userToken);

        setUserDevicesList([...response.data]);
      } catch (error) {
        console.log(error.response);
      }
    };

    getListFromAPI();
  }, [user._id, userDevicesList, userToken]);

  const handleOpenProductModal = (e) => {
    const selectedEl = e.target.dataset.id;

    const product = userDevicesList.filter(
      (item) => item.device._id === selectedEl,
    );

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
          {userDevicesList.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              stateIcon={!product.is_on ? offIcon : onIcon}
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
