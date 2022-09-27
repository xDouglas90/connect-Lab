import PropTypes from 'prop-types';

import { CardHeading } from '@atoms';

import * as S from './styles';
import { deleteIcon, infoIcon } from '@icons';

export const UserDeviceCard = ({
  product,
  id,
  stateIcon,
  handleStateToggle,
  handleMoreInfo,
  handleDelete,
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

          <S.ActionBtnsGroup>
          <S.ActionBtn
            data-id={id}
            onClick={(e) => handleStateToggle(e)}
            title="Clique para alterar o status do dispositivo"
          >
            <S.StateIcon src={stateIcon} />
          </S.ActionBtn>

          <S.ActionBtn
            data-id={id}
            onClick={(e) => handleMoreInfo(e)}
            title="Clique mais informações do dispositivo"
          >
            <S.StateIcon src={infoIcon} />
          </S.ActionBtn>

          <S.ActionBtn
            data-id={id}
            onClick={(e) => handleDelete(e)}
            title="Clique para remover o dispositivo"
          >
            <S.StateIcon src={deleteIcon} />
          </S.ActionBtn>
        </S.ActionBtnsGroup>
        </S.ProductInfos>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

UserDeviceCard.propTypes = {
  product: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  stateIcon: PropTypes.string.isRequired,
  handleStateToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleMoreInfo: PropTypes.func.isRequired,
  handleOpenDeviceModal: PropTypes.func.isRequired,
};
