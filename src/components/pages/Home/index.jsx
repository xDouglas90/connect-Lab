import { useEffect, useState } from 'react';

import {
  deleteDevice,
  getUserDevices,
  getUserLocations,
  putDeviceState,
} from '@service';

import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import { Layout } from '@templates';
import { ProductList, ProductModal, WeatherInfo } from '@organisms';
import { FilterGroup, ProductCard, ProductFullCard } from '@molecules';

import { offIcon, onIcon } from '@icons';

import * as S from './styles';

export const Home = () => {
  const userToken = sessionStorage.getItem('token');
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [userDevicesList, setUserDevicesList] = useState([]);
  const [filteredDevicesList, setFilteredDevicesList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [selectedLocationID, setSelectedLocationsID] = useState('all');

  const theme = useTheme();

  useEffect(() => {
    if (selectedLocationID !== 'all') {
      const filteredList = userDevicesList.filter(
        (device) => device.local._id === selectedLocationID,
      );

      setFilteredDevicesList([...filteredList]);
    } else {
      setFilteredDevicesList([...userDevicesList]);
    }
  }, [selectedLocationID, userDevicesList]);

  useEffect(() => {
    const getListFromAPI = async () => {
      try {
        const response = await getUserLocations(userToken);

        setLocationsList([...response.data]);
      } catch (error) {
        toast.error(`${error.response.data.error}`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
        });
      }
    };

    getListFromAPI();
  }, [theme.title, userToken]);

  useEffect(() => {
    const getListFromAPI = async () => {
      try {
        const response = await getUserDevices(user._id, userToken);

        setUserDevicesList([...response.data]);
      } catch (error) {
        toast.error(`${error.response.data.error}`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
        });
      }
    };

    getListFromAPI();
  }, [theme.title, user._id, userDevicesList, userToken]);

  const handleOpenProductModal = (e) => {
    const selectedDeviceId = e.currentTarget.dataset.id;
    const device = userDevicesList.filter(
      (device) => device._id === selectedDeviceId,
    );

    setProductModalOpen(true);
    setSelectedProduct(...device);
  };

  const handleCloseProductModal = () => setProductModalOpen(false);

  const handleSelect = (e) => {
    setSelectedLocationsID(e.target.dataset.id);

    let message = 'Todos';

    if (e.target.dataset.id !== 'all') {
      const selectedFilter = locationsList.filter(
        (location) => location._id === e.target.dataset.id,
      );

      message = selectedFilter[0].description;
    }

    toast.success(`Filtro "${message}" aplicado com sucesso.`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });
  };

  const stateToggle = async (e) => {
    const selectedDeviceId = e.currentTarget.dataset.id;
    const device = userDevicesList.filter(
      (device) => device._id === selectedDeviceId,
    );

    try {
      await putDeviceState(selectedDeviceId, userToken, !device[0].is_on)
        .then(() => setSelectedProduct(...device))
        .finally(() => {
          toast.success(
            `${device[0].device.name} ${
              !device[0].is_on ? 'Ligado' : 'Desligado'
            } com sucesso.`,
            {
              autoClose: 3000,
              position: toast.POSITION.TOP_CENTER,
              theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
            },
          );
        });
    } catch (error) {
      toast.error(`Erro ao alterar status di dispositivo. Tente novamente.`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
      });
    }
  };

  const deleteDeviceFromUserList = async () => {
    try {
      await deleteDevice(selectedProduct._id, userToken)
        .then(() => setProductModalOpen(false))
        .finally(() => {
          toast.success(`Produto removido com sucesso`, {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
            theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
          });
        });
    } catch (error) {
      toast.error(`${error.response.data.error}`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
      });
    }
  };

  return (
    <Layout>
      <S.Container>
        <WeatherInfo />
        <FilterGroup
          locationsList={locationsList}
          handleSelect={handleSelect}
        />
        <ProductList>
          {filteredDevicesList.length > 0 ? (
            filteredDevicesList.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                product={product}
                handleStateToggle={stateToggle}
                handleOpenDeviceModal={handleOpenProductModal}
                stateIcon={!product.is_on ? offIcon : onIcon}
              />
            ))
          ) : (
            <p>Lista vazia..</p>
          )}
        </ProductList>
      </S.Container>

      <ProductModal
        isOpen={isProductModalOpen}
        onRequestClose={handleCloseProductModal}
      >
        <ProductFullCard
          id={selectedProduct._id}
          product={selectedProduct}
          stateIcon={!selectedProduct.is_on ? offIcon : onIcon}
          handleStateToggle={stateToggle}
          handleRemoveDevice={deleteDeviceFromUserList}
        />
      </ProductModal>
    </Layout>
  );
};
