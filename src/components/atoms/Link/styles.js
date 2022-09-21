import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

import { setValueByTheme } from '@utils';

export const Link = styled(RouterLink)`
  color: ${({ theme }) =>
    setValueByTheme(theme.title, 'var(--common-black)', 'var(--common-white)')};
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: underline;
`;
