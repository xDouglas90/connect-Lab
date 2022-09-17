import PropTypes from 'prop-types';

import * as S from './styles';

export const Link = ({ text, url }) => {
  return <S.Link to={url}>{text}</S.Link>;
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
