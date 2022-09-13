import { NavLink } from '@atoms';
import PropTypes from 'prop-types';

import * as S from './styles';

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.Menu>
        <S.MenuItem>
          <NavLink text="Início" href="#" />
        </S.MenuItem>
        <S.MenuItem>
          <NavLink text="Dispositivos" href="#" />
        </S.MenuItem>
        <S.MenuItem>
          <NavLink text="Perfil" href="#" />
        </S.MenuItem>
      </S.Menu>
    </S.NavBar>
  );
};

NavBar.propTypes = {};
