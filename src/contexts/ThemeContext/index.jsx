import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '@themes';

const ThemeContext = createContext({});

export const useCustomTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const userPreference = sessionStorage.getItem('theme') || '';

    if (userPreference === 'dark') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme.title === 'Claro') {
      sessionStorage.setItem('theme', 'dark');
      setTheme(dark);
    } else {
      sessionStorage.setItem('theme', 'light');
      setTheme(light);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
