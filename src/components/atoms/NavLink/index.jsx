import PropTypes from 'prop-types';

import * as S from './styles';

export const NavLink = ({ text, link }) => {
  return <S.Link to={link}>{text}</S.Link>;
};

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
