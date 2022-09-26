import { useEffect, useState } from 'react';

import { useAuthContext } from '@contexts';

import { Layout } from '@templates';
import { AddDeviceModal, ProductList } from '@organisms';
import { DeviceCard, FilterGroup, SearchField } from '@molecules';
import { Title } from '@atoms';

import { types } from '@utils';

import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { getDevices, postDevice } from '@service';

export const Devices = () => {
  const { user } = useAuthContext();
  const token = sessionStorage.getItem('token');
  const [devicesList, setDevicesList] = useState([]);
  const [devicesSearchList, setDevicesSearchList] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [isAddDeviceModalOpen, setAddDeviceModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState({});

  const theme = useTheme();

  useEffect(() => {
    const getDevicesFromAPI = async () => {
      try {
        const response = await getDevices(token);

        setDevicesList([...response?.data]);
      } catch (error) {
        toast.error(`${error.response.data.error}`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
        });
      }
    };

    getDevicesFromAPI();
  }, [theme.title, token]);

  useEffect(() => {
    if (devicesSearchList.length) {
      setRenderList([...devicesSearchList]);
    } else {
      setRenderList([...devicesList]);
    }
  }, [devicesList, devicesSearchList]);

  const handleOpenAddDeviceModal = (e) => {
    const selectedEl = e.target.dataset.id;

    const selectedDevice = renderList.filter((item) => item._id === selectedEl);

    setAddDeviceModalOpen(true);

    setSelectedDevice({ ...selectedDevice[0] });
  };

  const handleCloseAddDeviceModal = () => setAddDeviceModalOpen(false);

  const handleAddDevice = (data) => {
    try {
      const response = async () => {
        return await postDevice(
          token,
          data.user,
          data.device,
          data.local,
          data.room,
        );
      };

      response();

      setTimeout(() => {
        toast.success(`Produto adicionado com sucesso`, {
          autoClose: 5000,
          position: toast.POSITION.TOP_CENTER,
          theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
        });

        setAddDeviceModalOpen(false);
      }, Math.floor(Math.random() * (20000 - 5000 + 1) + 5000));
    } catch (error) {
      toast.error(`${error.response.data.error}`, {
        autoClose: 5000,
        position: toast.POSITION.TOP_CENTER,
        theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
      });
    }
  };

  const handleSearchChange = (e) => {
    const resultsArray = devicesList.filter(
      (device) =>
        device.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        device.type.toLowerCase().includes(e.target.value.toLowerCase()),
    );

    setDevicesSearchList([...resultsArray]);
  };

  const handleSelectByType = (e) => {
    if (e.target.innerText === 'Todos') {
      toast.success(`Selecionado Todos os dispositivos`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
      });
      return setRenderList([...devicesList]);
    }

    const resultsArray = devicesList.filter(
      (device) =>
        device.type.toLowerCase() === e.target.innerText.toLowerCase(),
    );

    toast.success(`Filtro de ${e.target.innerText} aplicado com sucesso`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
      theme: `${theme.title === 'Claro' ? 'light' : 'dark'}`,
    });

    return setRenderList([...resultsArray]);
  };

  return (
    <Layout>
      <S.Container>
        <Title text="Dispositivos" />

        <SearchField onChange={handleSearchChange} />

        <FilterGroup locationsList={types} handleSelect={handleSelectByType} />

        <ProductList>
          {devicesList.length === 0 ? (
            <p>Carregando dispositivos..</p>
          ) : (
            renderList.map((device) => (
              <DeviceCard
                key={device._id}
                id={device._id}
                product={device}
                onClick={handleOpenAddDeviceModal}
              />
            ))
          )}
        </ProductList>
      </S.Container>

      <AddDeviceModal
        isOpen={isAddDeviceModalOpen}
        onAddDevice={handleAddDevice}
        onRequestClose={handleCloseAddDeviceModal}
        device={selectedDevice}
        userId={user._id}
      />
    </Layout>
  );
};
