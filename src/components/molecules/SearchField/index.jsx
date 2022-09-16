import { Button, Input } from '@atoms';
import PropTypes from 'prop-types';

import * as S from './styles';

export const SearchField = ({ onSearchTerm, onTyping, term }) => {
  return (
    <S.Container>
      <Input
        label="Nome do dispositivo"
        name="search-device"
        placeholder="Buscar pelo nome do dispositivo"
        value={term}
        onChange={onTyping}
      />
      <Button text="Buscar" type="submit" onClick={onSearchTerm} isPrimary />
    </S.Container>
  );
};

SearchField.propTypes = {
  term: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
  onTyping: PropTypes.func.isRequired,
};
