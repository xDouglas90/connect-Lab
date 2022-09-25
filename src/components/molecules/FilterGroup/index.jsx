import PropTypes from 'prop-types';

import { FilterBtn } from '@atoms';

import * as S from './styles';

export const FilterGroup = ({ locationsList, handleSelect }) => {
  return (
    <S.BtnGroup>
      <FilterBtn id="all" text="todos" handleFilterSelect={handleSelect} />
      {locationsList &&
        locationsList.map((item) => (
          <FilterBtn
            key={item._id}
            id={item._id}
            text={item.description}
            handleFilterSelect={handleSelect}
          />
        ))}
    </S.BtnGroup>
  );
};

FilterGroup.propTypes = {
  locationsList: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};
