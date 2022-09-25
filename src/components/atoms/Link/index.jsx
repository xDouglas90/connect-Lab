import PropTypes from 'prop-types';

import * as S from './styles';

export const Link = ({ text, onClick }) => {
  return <S.Link onClick={onClick}>{text}</S.Link>;
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
