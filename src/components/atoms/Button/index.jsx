import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({ isPrimary, type = 'button', text, onClick, id }) => {
  return (
    <S.Button type={type} onClick={onClick} data-id={id} isPrimary={isPrimary}>
      {text}
    </S.Button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};
