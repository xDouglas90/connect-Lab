import PropTypes from 'prop-types';

import * as S from './styles';

export const FilterBtn = ({ text, handleFilterSelect, selected }) => {
  return (
    <S.Button onClick={handleFilterSelect} selected={selected}>
      {text}
    </S.Button>
  );
};

FilterBtn.propTypes = {
  text: PropTypes.string.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
