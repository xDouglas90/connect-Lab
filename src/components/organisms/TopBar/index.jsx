import PropTypes from 'prop-types';

import * as S from './styles';

export const TopBar = ({ children }) => {
  return <S.Header>{children}</S.Header>;
};

TopBar.propTypes = {
  children: PropTypes.node.isRequired,
};
