import Modal from 'react-modal';
import PropTypes from 'prop-types';

import * as S from './styles';
import { Button, Input, Select, Title } from '@atoms';

Modal.setAppElement('#root');

const options = ['Casa', 'Escritório'];

export const AddDeviceModal = ({
  isOpen,
  onRequestClose,
  onConfirm,
  product,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-container"
    >
      <S.Container>
        <Title text={product.name} />
        <Input
          label="Id"
          name="device-id"
          defaultValue={product.id}
          type="text"
          isDisplayed={false}
        />
        <Select label="Local*" name="device-place" options={options} />
        <Input
          label="Cômodo*"
          name="device-room"
          type="text"
          placeholder="Digite o nome do cômodo"
        />

        <S.ButtonsWrapper>
          <Button text="Cancelar" onClick={onRequestClose} />
          <Button text="Confirmar" onClick={onConfirm} isPrimary />
        </S.ButtonsWrapper>
      </S.Container>
    </Modal>
  );
};

AddDeviceModal.propTypes = {
  product: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
