import PropTypes from 'prop-types';

import { motion } from 'framer-motion';

import { Button, Title } from '@atoms';

import * as S from './styles';

export const UserDeviceFullCard = ({
  product,
  stateIcon,
  id,
  handleStateToggle,
  handleRemoveDevice,
}) => {
  return (
    <S.CardContainer
      as={motion.li}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Header>
        <Title text={product.device.name} />
        <S.Info>{product.device.madeBy}</S.Info>
      </S.Header>

      <S.ProductFigure>
        <S.ProductImg src={product.device.photoUrl} />
      </S.ProductFigure>

      <S.StateInfo>
        {product.is_on ? (
          <S.State>Dispositivo Ligado</S.State>
        ) : (
          <S.State>Dispositivo Desligado</S.State>
        )}
        <S.StateBtn
          data-id={id}
          onClick={(e) => handleStateToggle(e)}
          title="Clique para alterar status"
        >
          <S.StateIcon src={stateIcon} />
        </S.StateBtn>
      </S.StateInfo>

      <S.StateInfo>
        <S.Info>{product.local.description}</S.Info> |
        <S.Info>{product.room}</S.Info>
      </S.StateInfo>

      <S.ProductInfos>
        <S.InfosTitle>Informações do dispositivo</S.InfosTitle>
        <S.Info>ID virtual: {product.device.info.virtual_id}</S.Info>
        <S.Info>Endereço IP: {product.device.info.ip_address}</S.Info>
        <S.Info>Endereço MAC: {product.device.info.mac_address}</S.Info>
        <S.Info>Fuso horário: América/Sao_Paulo</S.Info>
        <S.Info>Força do sinal: {product.device.info.signal}</S.Info>
      </S.ProductInfos>
      <Button text="Remover" onClick={handleRemoveDevice} />
    </S.CardContainer>
  );
};

UserDeviceFullCard.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
  stateIcon: PropTypes.string.isRequired,
  handleStateToggle: PropTypes.func.isRequired,
  handleRemoveDevice: PropTypes.func.isRequired,
};
