import styled from 'styled-components';

import { colors } from '@styles';

export const Button = styled.button`
  display: grid;
  place-content: center;
  background: ${({ isPrimary }) =>
    isPrimary ? `${colors.primary.main}` : `${colors.secondary.main}`};
  border-radius: 40px;
  color: var(--common-white);
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 24px;
`;
