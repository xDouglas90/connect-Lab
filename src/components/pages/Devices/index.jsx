import { useState } from 'react';

import { Layout } from '@templates';
import { AddDeviceModal, ProductList } from '@organisms';
import { DeviceCard, SearchField } from '@molecules';
import { Title } from '@atoms';
import { products } from '@utils';

import * as S from './styles';

export const Devices = () => {
  const [isAddDeviceModalOpen, setAddDeviceModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenAddDeviceModal = (e) => {
    const selectedEl = e.target.dataset.id;

    const product = products.filter((item) => item.id === selectedEl);

    setAddDeviceModalOpen(true);
    setSelectedProduct(...product);
  };

  const handleCloseAddDeviceModal = () => setAddDeviceModalOpen(false);

  const handleTypingSearchTerm = (e) => setSearchTerm(e.target.value);

  const handleSubmitSearchTerm = () =>
    alert(`Você pesquisou por: ${searchTerm}`);

  const handleAddDevice = () => {
    setTimeout(() => {
      alert('device adicionado');
    }, Math.floor(Math.random() * (20000 - 5000 + 1) + 5000));
  };

  return (
    <Layout>
      <S.Container>
        <Title text="Dispositivos" />

        <SearchField
          onTyping={handleTypingSearchTerm}
          onSearchTerm={handleSubmitSearchTerm}
          term={searchTerm}
        />

        <ProductList>
          {products.map((product) => (
            <DeviceCard
              key={product.id}
              product={product}
              onClick={(e) => handleOpenAddDeviceModal(e)}
            />
          ))}
        </ProductList>
      </S.Container>

      <AddDeviceModal
        isOpen={isAddDeviceModalOpen}
        onConfirm={handleAddDevice}
        onRequestClose={handleCloseAddDeviceModal}
        product={selectedProduct}
      />
    </Layout>
  );
};
