import PropTypes from 'prop-types';

import { useCustomTheme } from '@contexts';

import { TopBar } from '@organisms';
import { Logo, ThemeToggleBtn } from '@atoms';

import * as S from './styles';
import { NavBar } from '@molecules';

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useCustomTheme();

  return (
    <>
      <TopBar>
        <Logo />
        <S.Navigation>
          <NavBar />
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
