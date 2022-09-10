import PropTypes from 'prop-types';

import * as S from './styles';

export const NavLink = ({ text }) => {
  return <S.Link>{text}</S.Link>;
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
};
