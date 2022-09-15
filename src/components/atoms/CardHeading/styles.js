import styled from 'styled-components';

import { setValueByTheme } from '@utils';

export const CardTitle = styled.h2`
  color: ${({ theme }) =>
    setValueByTheme(theme.title, 'var(--common-dk-gray)', 'var(--secondary)')};
  font-size: 2rem;
`;
