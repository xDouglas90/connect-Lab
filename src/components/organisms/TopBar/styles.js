import { colors } from '@styles';
import { setValueByTheme } from '@utils';
import styled from 'styled-components';

export const Header = styled.header`
  background: ${colors.primary.main};
  background: ${colors.common.primaryGradient};
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 2px 4px rgba(0, 0, 0, 0.25)',
      '0 4px 4px rgba(129,214,187, 0.27)',
    )};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 260px;
  padding: 6px 0px 40px;

  @media (min-width: 768px) {
    height: 5rem;
    flex-direction: row;
    padding: 0 1rem;
  }
`;
