import styled from 'styled-components';

import { colors } from '@styles';
import { setValueByTheme } from '@utils';

export const Title = styled.strong`
  color: ${({ theme }) =>
    setValueByTheme(theme.title, colors.primary.main, colors.secondary.main)};
  font: 700 20px/26px 'Rubik', sans-serif;
`;
