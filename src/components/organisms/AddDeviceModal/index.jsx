import { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDeviceSchema } from '@utils';

import * as S from './styles';
import { Button, Input, Title } from '@atoms';

Modal.setAppElement('#root');

export const AddDeviceModal = ({
  isOpen,
  onRequestClose,
  onAddDevice,
  device,
  userId,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addDeviceSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });

  useEffect(() => {
    reset({
      user: userId,
      device: device._id,
    });
  }, [userId, device, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-container"
    >
      <S.Form onSubmit={handleSubmit(onAddDevice)}>
        <Title text={device.name} />
        <Input
          label="Id"
          {...register('user')}
          type="text"
          isDisplayed={false}
        />

        <Input
          label="Id"
          {...register('device')}
          type="text"
          isDisplayed={false}
        />

        <S.SelectWrapper>
          <S.Label>Local*</S.Label>
          <S.Select {...register('local')}>
            <option value="">Selecione</option>
            <option value="631b34696f2d2f24a7c0c960">Casa</option>
            <option value="631b34796f2d2f24a7c0c961">Escritório</option>
            <option value="631b348a6f2d2f24a7c0c962">Fábrica</option>
          </S.Select>
          <S.Error>{errors?.local?.message}</S.Error>
        </S.SelectWrapper>

        <Input
          label="Cômodo*"
          {...register('room')}
          type="text"
          placeholder="Digite o nome do cômodo"
        >
          <S.Error>{errors?.room?.message}</S.Error>
        </Input>

        <S.ButtonsWrapper>
          <Button text="Cancelar" onClick={onRequestClose} />
          <Button text="Confirmar" type="submit" isPrimary />
        </S.ButtonsWrapper>
      </S.Form>
    </Modal>
  );
};

AddDeviceModal.propTypes = {
  device: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onAddDevice: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
