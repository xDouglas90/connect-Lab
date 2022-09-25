import styled from 'styled-components';

import { setValueByTheme } from '@utils';

export const Link = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) =>
    setValueByTheme(theme.title, 'var(--common-black)', 'var(--common-white)')};
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-decoration-line: underline;
`;
