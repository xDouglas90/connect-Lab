import { Button } from '@atoms';
import PropTypes from 'prop-types';

import * as S from './styles';

export const SearchField = ({ name, onSearchTerm }) => {
  return (
    <S.Container>
      <S.Input
        name={name}
        placeholder="Buscar pelo nome do dispositivo"
      />
      <Button text="Buscar" type="submit" onClick={onSearchTerm} isPrimary />
    </S.Container>
  );
};

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
};
