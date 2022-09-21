import styled from 'styled-components';

import { setValueByTheme } from '@utils';

export const Container = styled.div`
  background: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-white)',
      'var(--common-dk-gray)',
    )};
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '0 4px 4px rgba(129,214,187, 0.27)',
    )};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 330px;
  padding: 2rem 1rem;
  width: 360px;

  @media (min-width: 576px) {
    width: 398px;
  }
`;

export const ButtonsWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
