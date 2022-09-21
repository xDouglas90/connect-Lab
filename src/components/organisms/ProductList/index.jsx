import PropTypes from 'prop-types';

import * as S from './styles';

export const ProductList = ({ children }) => {
  return <S.List>{children}</S.List>;
};

ProductList.propTypes = {
  children: PropTypes.node.isRequired,
};
