import PropTypes from 'prop-types';

import { CardHeading } from '@atoms';

import * as S from './styles';

export const UserDeviceCard = ({
  product,
  id,
  stateIcon,
  handleStateToggle,
  handleOpenDeviceModal,
}) => {
  return (
    <S.CardContainer>
      <S.CardWrapper>
        <S.ProductFigure>
          <S.ProductImg src={product.device.photoUrl} />
        </S.ProductFigure>
        <S.ProductInfos>
          <S.MoreInfoBtn
            data-id={id}
            onClick={(e) => handleOpenDeviceModal(e)}
            title="Clique no nome para mais informações do dispositivo"
          >
            <CardHeading id={product._id} text={product.device.name} />
          </S.MoreInfoBtn>
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
        <S.StateBtn
          data-id={id}
          onClick={(e) => handleStateToggle(e)}
          title="Clique para alterar status"
        >
          <S.StateIcon src={stateIcon} />
        </S.StateBtn>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

UserDeviceCard.propTypes = {
  product: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  stateIcon: PropTypes.string.isRequired,
  handleStateToggle: PropTypes.func.isRequired,
  handleOpenDeviceModal: PropTypes.func.isRequired,
};
