import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as keyGen } from 'uuid';

import * as S from '../styles';

// eslint-disable-next-line react/display-name
export const Select = forwardRef((props, ref) => {
  const { name, label, options } = props;

  return (
    <S.SelectWrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select name={name} id={name} ref={ref}>
        {options.map((item) => (
          <option key={keyGen()} value={item}>
            {item}
          </option>
        ))}
      </S.Select>
    </S.SelectWrapper>
  );
});

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
