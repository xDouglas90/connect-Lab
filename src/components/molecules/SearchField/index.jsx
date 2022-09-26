import PropTypes from 'prop-types';

import * as S from './styles';

export const SearchField = ({ onChange }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Input
          name="search-term"
          placeholder="Buscar pelo nome do dispositivo"
          onChange={onChange}
        />
        <S.SearchIcon />
      </S.Wrapper>
    </S.Container>
  );
};

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
};
