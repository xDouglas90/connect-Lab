import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import * as S from './styles';

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props, ref) => {
  const {
    name,
    label,
    type = 'text',
    placeholder,
    defaultValue,
    isDisplayed = true,
    list,
    value,
    onChange,
    children,
  } = props;

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
        ref={ref}
        list={list}
      />
      {children}
    </S.Wrapper>
  );
});

Input.propTypes = {
  children: PropTypes.node,
  isDisplayed: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  list: PropTypes.string,
};
