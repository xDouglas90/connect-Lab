import styled from 'styled-components';

import { colors } from '@styles';

export const Button = styled.button`
  display: grid;
  place-content: center;
  background: ${({ isPrimary }) =>
    isPrimary
      ? `${colors.common.primaryGradient}`
      : `${colors.secondary.main}`};
  border-radius: 40px;
  color: var(--common-white);
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0 0 2px var(--common-black);
  padding: 10px 24px;
`;
