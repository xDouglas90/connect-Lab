import PropTypes from 'prop-types';

import * as S from './styles';

export const Input = ({ name, label, type = 'text', placeholder }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input type={type} name={name} id={name} placeholder={placeholder} />
    </S.Wrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};
