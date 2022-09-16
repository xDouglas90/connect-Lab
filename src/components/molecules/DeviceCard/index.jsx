import PropTypes from 'prop-types';

import { Button, Title } from '@atoms';

import * as S from './styles';

export const DeviceCard = ({ product, onClick }) => {
  return (
    <S.CardContainer>
      <S.ProductFigure data-id={product.id}>
        <S.ProductImg data-id={product.id} src={product.image} />
      </S.ProductFigure>

      <Title id={product.id} text={product.name} />

      <Button text="Adicionar" id={product.id} onClick={onClick} isPrimary />
    </S.CardContainer>
  );
};

DeviceCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
