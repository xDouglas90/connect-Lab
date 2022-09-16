import PropTypes from 'prop-types';

import * as S from './styles';

export const CardHeading = ({ text, id }) => {
  return <S.CardTitle data-id={id}>{text}</S.CardTitle>;
};

CardHeading.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
};
