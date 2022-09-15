import PropTypes from 'prop-types';

import { FilterBtn } from '@atoms';

import * as S from './styles';

export const FilterGroup = () => {
  return (
    <S.BtnGroup>
      <FilterBtn text="todos" handleFilterSelect={() => {}} selected />
      <FilterBtn text="casa" handleFilterSelect={() => {}} />
      <FilterBtn text="escritório" handleFilterSelect={() => {}} />
    </S.BtnGroup>
  );
};

FilterGroup.propTypes = {};
