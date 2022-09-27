import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: var(--common-white);
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  text-shadow: 0 0 2px var(--common-black);

  &:focus {
    outline: none;
    border: none;
  }
`;
