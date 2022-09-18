import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import { useCustomTheme } from '@contexts';

import { TopBar } from '@organisms';
import { Button, Logo, ThemeToggleBtn } from '@atoms';

import * as S from './styles';
import { NavBar } from '@molecules';

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useCustomTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const loggedLocations = ['/inicio', '/perfil', '/dispositivos'];

  return (
    <>
      <TopBar>
        <Logo />
        <S.Navigation>
          {loggedLocations.includes(pathname) ? (
            <NavBar />
          ) : (
            <Button text="Login" onClick={() => navigate('/login')} />
          )}
          <ThemeToggleBtn
            toggleTheme={toggleTheme}
            theme={theme.title === 'Claro'}
          />
        </S.Navigation>
      </TopBar>

      <S.Main>{children}</S.Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
