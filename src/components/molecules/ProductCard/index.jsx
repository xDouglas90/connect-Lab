import PropTypes from 'prop-types';

import { CardHeading } from '@atoms';

import * as S from './styles';

export const ProductCard = ({ product, stateIcon, onClick }) => {
  return (
    <S.CardContainer>
      <S.CardWrapper
        onClick={onClick}
        data-id={product.id}
        title="Clique para mais informações"
      >
        <S.ProductFigure data-id={product.id}>
          <S.ProductImg data-id={product.id} src={product.image} />
        </S.ProductFigure>
        <S.ProductInfos data-id={product.id}>
          <CardHeading id={product.id} text={product.name} />
          <S.ProductChars data-id={product.id}>
            <S.ProductChar data-id={product.id}>{product.place}</S.ProductChar>
            <S.ProductChar data-id={product.id}>|</S.ProductChar>
            <S.ProductChar data-id={product.id}>{product.room}</S.ProductChar>
            <S.ProductChar data-id={product.id}>|</S.ProductChar>
            <S.ProductChar data-id={product.id}>{product.state}</S.ProductChar>
          </S.ProductChars>
        </S.ProductInfos>
        <S.StateIcon data-id={product.id} src={stateIcon} />
      </S.CardWrapper>
    </S.CardContainer>
  );
};

ProductCard.propTypes = {
  onClick: PropTypes.func,
  product: PropTypes.object.isRequired,
  stateIcon: PropTypes.string.isRequired,
};
