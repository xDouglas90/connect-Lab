import PropTypes from 'prop-types';

import * as S from './styles';

export const Title = ({ text }) => {
  return <S.Title>{text}</S.Title>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
