import { NavLink } from '@atoms';
import { useLocation } from 'react-router-dom';

import * as S from './styles';

export const NavBar = () => {
  const location = useLocation();

  return (
    <S.NavBar>
      <S.Menu>
        <S.MenuItem isActive={location.pathname === '/'}>
          <NavLink text="Início" link="/" />
        </S.MenuItem>
        <S.MenuItem isActive={location.pathname === '/dispositivos'}>
          <NavLink text="Dispositivos" link="/dispositivos" />
        </S.MenuItem>
        <S.MenuItem isActive={location.pathname === '/perfil'}>
          <NavLink text="Perfil" link="/perfil" />
        </S.MenuItem>
      </S.Menu>
    </S.NavBar>
  );
};
