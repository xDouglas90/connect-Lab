import { NavLink } from '@atoms';
import PropTypes from 'prop-types';

import * as S from './styles';

export const NavBar = () => {
  return (
    <S.NavBar>
      <NavLink text="Início" href="#" />
      <NavLink text="Dispositivos" href="#" />
      <NavLink text="Perfil" href="#" />
    </S.NavBar>
  );
};

NavBar.propTypes = {};
