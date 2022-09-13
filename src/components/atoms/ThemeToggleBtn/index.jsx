import { useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade, lighten } from 'polished';
import * as S from './styles';

export const ThemeToggleBtn = ({ theme, toggleTheme }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme}
      height={30}
      width={80}
      handleDiameter={30}
      offColor={shade(0.15, colors.primary)}
      onColor={lighten(0.2, colors.primary)}
      uncheckedIcon={<S.DarkIcon />}
      checkedIcon={<S.LightIcon />}
    />
  );
};

ThemeToggleBtn.propTypes = {
  theme: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
