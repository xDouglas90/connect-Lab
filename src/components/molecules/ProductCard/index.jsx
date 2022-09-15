import PropTypes from 'prop-types';

import { CardHeading } from '@atoms';

import * as S from './styles';

export const ProductCard = ({ product, stateIcon }) => {
  return (
    <S.CardContainer>
      <S.CardWrapper title='Clique para mais informações'>
        <S.ProductFigure>
          <S.ProductImg src={product.image} />
        </S.ProductFigure>
        <S.ProductInfos>
          <CardHeading text={product.name} />
          <S.ProductChars>
            <S.ProductChar>{product.place}</S.ProductChar>
            <S.ProductChar>|</S.ProductChar>
            <S.ProductChar>{product.room}</S.ProductChar>
            <S.ProductChar>|</S.ProductChar>
            <S.ProductChar>{product.state}</S.ProductChar>
          </S.ProductChars>
        </S.ProductInfos>
        <S.StateIcon src={stateIcon} />
      </S.CardWrapper>
    </S.CardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  stateIcon: PropTypes.string.isRequired,
};
