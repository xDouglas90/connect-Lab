import { colors } from '@styles';
import { setValueByTheme } from '@utils';
import styled from 'styled-components';

export const Header = styled.header`
  background: ${colors.primary.main};
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 2px 4px rgba(0, 0, 0, 0.25)',
      '0px 10px 4px rgba( 31, 38, 135, 0.37 )'
    )};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 40px;
`;
