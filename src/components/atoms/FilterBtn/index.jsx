import PropTypes from 'prop-types';

import * as S from './styles';

export const FilterBtn = ({ id, text, handleFilterSelect }) => {
  return (
    <S.Button onClick={(e) => handleFilterSelect(e)} data-id={id}>
      {text}
    </S.Button>
  );
};

FilterBtn.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
};
