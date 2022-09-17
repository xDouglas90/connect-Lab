import { NavLink } from '@atoms';
import PropTypes from 'prop-types';

import * as S from './styles';

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.Menu>
        <S.MenuItem>
          <NavLink text="Início" link="/inicio" />
        </S.MenuItem>
        <S.MenuItem>
          <NavLink text="Dispositivos" link="/dispositivos" />
        </S.MenuItem>
        <S.MenuItem>
          <NavLink text="Perfil" link="/perfil" />
        </S.MenuItem>
      </S.Menu>
    </S.NavBar>
  );
};

NavBar.propTypes = {};
