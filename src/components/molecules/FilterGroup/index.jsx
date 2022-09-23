import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@contexts';
import { getUserLocations } from '@service';

import { FilterBtn } from '@atoms';

import * as S from './styles';

export const FilterGroup = () => {
  const { userToken } = useAuthContext();
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    const getListFromAPI = async () => {
      try {
        const response = await getUserLocations(userToken);

        setLocationsList([...response.data]);
      } catch (error) {
        console.log(error.response);
      }
    };

    getListFromAPI();
  }, [userToken]);

  return (
    <S.BtnGroup>
      <FilterBtn text="todos" handleFilterSelect={() => {}} selected={true} />
      {locationsList.map((item) => (
        <FilterBtn
          key={item._id}
          text={item.description}
          handleFilterSelect={() => {}}
          selected={false}
        />
      ))}
    </S.BtnGroup>
  );
};

FilterGroup.propTypes = {};
