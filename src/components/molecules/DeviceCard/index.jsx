import PropTypes from 'prop-types';

import { Button, Title } from '@atoms';

import * as S from './styles';

export const DeviceCard = ({ product, onClick, id }) => {
  return (
    <S.CardContainer>
      <S.ProductFigure>
        <S.ProductImg src={product.photoUrl} />
      </S.ProductFigure>

      <Title text={product.name} />

      <Button
        text="Adicionar"
        data-id={id}
        id={id}
        onClick={onClick}
        isPrimary
      />
    </S.CardContainer>
  );
};

DeviceCard.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
