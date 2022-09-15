import PropTypes from 'prop-types';

import * as S from './styles';

export const CardHeading = ({ text }) => {
  return <S.CardTitle>{text}</S.CardTitle>;
};

CardHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
