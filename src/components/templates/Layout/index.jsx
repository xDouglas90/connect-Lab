import PropTypes from 'prop-types';

import { useCustomTheme } from '@contexts';

import { TopBar } from '@organisms';
import { Button, Logo, ThemeToggleBtn } from '@atoms';

import * as S from './styles';

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useCustomTheme();

  return (
    <>
      <TopBar>
        <Logo />
        <S.Navigation>
          <Button text="Login" />
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
