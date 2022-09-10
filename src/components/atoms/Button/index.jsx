import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({ isPrimary, type = 'button', text }) => {
  return (
    <S.Button type={type} isPrimary={isPrimary}>
      {text}
    </S.Button>
  );
};

Button.propTypes = {
  isPrimary: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};
