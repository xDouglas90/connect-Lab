import PropTypes from 'prop-types';

import { CardHeading } from '@atoms';

import * as S from './styles';

export const ProductCard = ({ product, stateIcon, onClick }) => {
  return (
    <S.CardContainer>
      <S.CardWrapper onClick={onClick} title="Clique para mais informações">
        <S.ProductFigure>
          <S.ProductImg src={product.device.photoUrl} />
        </S.ProductFigure>
        <S.ProductInfos>
          <CardHeading id={product._id} text={product.device.name} />
          <S.ProductChars>
            <S.ProductChar>{product.local.description}</S.ProductChar>
            <S.ProductChar>|</S.ProductChar>
            <S.ProductChar>{product.room}</S.ProductChar>
            <S.ProductChar>|</S.ProductChar>
            <S.ProductChar>
              {product.is_on ? 'Ligado' : 'Desligado'}
            </S.ProductChar>
          </S.ProductChars>
        </S.ProductInfos>
        <S.StateIcon src={stateIcon} />
      </S.CardWrapper>
    </S.CardContainer>
  );
};

ProductCard.propTypes = {
  onClick: PropTypes.func,
  product: PropTypes.object.isRequired,
  stateIcon: PropTypes.string.isRequired,
};
