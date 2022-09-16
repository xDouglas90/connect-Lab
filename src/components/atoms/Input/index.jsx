import PropTypes from 'prop-types';

import * as S from './styles';

export const Input = ({
  name,
  label,
  type = 'text',
  placeholder,
  defaultValue,
  isDisplayed = true,
  value,
  onChange,
}) => {
  return (
    <S.Wrapper isDisplayed={isDisplayed}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

Input.propTypes = {
  isDisplayed: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
