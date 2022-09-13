import styled from 'styled-components';

import { moonIcon, sunIcon } from '@icons';

export const LightIcon = styled.div`
  background: url(${sunIcon}) center no-repeat;
  height: 100%;
  width: 100%;
`;

export const DarkIcon = styled(LightIcon)`
  background: url(${moonIcon}) center no-repeat;
`;
