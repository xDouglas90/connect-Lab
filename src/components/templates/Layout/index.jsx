import { useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

import { useCustomTheme } from '@contexts';

import { TopBar } from '@organisms';
import { Button, Logo } from '@atoms';

import { shade, lighten } from 'polished';

import { ThemeContext } from 'styled-components';
import * as S from './styles';

export const Layout = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  const { theme, toggleTheme } = useCustomTheme();

  return (
    <>
      <TopBar>
        <Logo />
        <S.Navigation>
        <Button text="Login" />
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'Claro'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={lighten(0.2, colors.primary)}
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
