import styled from 'styled-components';

import { setValueByTheme } from '@utils';

export const Button = styled.button`
  background: ${({ selected }) =>
    selected ? 'var(--primary-light)' : 'transparent'};
  border: 1px solid var(--primary-light);
  border-radius: 3px;
  color: ${({ theme }) =>
    setValueByTheme(theme.title, 'var(--primary)', 'var(--common-white)')};
  font-size: 14px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 7px;
  text-align: center;
  text-transform: capitalize;
  transition: all ease-in-out 0.2s;

  &:hover {
    box-shadow: ${({ theme }) =>
      setValueByTheme(
        theme.title,
        '2px 2px 2px rgba(0, 0, 0, 0.25)',
        '0 4px 4px rgba(129,214,187, 0.27)'
      )};
    transform: scale(1.05);
  }
`;
