import PropTypes from 'prop-types';

import { Button, Title } from '@atoms';

import * as S from './styles';

export const ProductFullCard = ({ product, stateIcon }) => {
  return (
    <S.CardContainer>
      <S.Header>
        <Title text={product.name} />
        <S.Info>{product.manufacturer}</S.Info>
      </S.Header>

      <S.ProductFigure>
        <S.ProductImg src={product.image} />
      </S.ProductFigure>

      <S.StateInfo>
        {product.state === 'OFF' ? (
          <S.State>Dispositivo Desligado</S.State>
        ) : (
          <S.State>Dispositivo Ligado</S.State>
        )}
        <S.StateIcon src={stateIcon} />
      </S.StateInfo>

      <S.ProductInfos>
        <S.InfosTitle>Informações do dispositivo</S.InfosTitle>
        <S.Info>ID virtual: 1ea71523f6f296c29711</S.Info>
        <S.Info>Endereço IP: 138.204.21.221</S.Info>
        <S.Info>Endereço MAC: 87:e3:34:ff:ed:34</S.Info>
        <S.Info>Fuso horário: América/Sao_Paulo</S.Info>
        <S.Info>Força do sinal: -70dBm</S.Info>
      </S.ProductInfos>

      <Button text='Remover' />
    </S.CardContainer>
  );
};

ProductFullCard.propTypes = {
  product: PropTypes.object.isRequired,
  stateIcon: PropTypes.string.isRequired,
};
