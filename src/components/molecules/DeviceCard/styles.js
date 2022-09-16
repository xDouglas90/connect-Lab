import styled from 'styled-components';

import { setValueByTheme } from '@utils';

export const CardContainer = styled.li`
  background: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      'var(--common-white)',
      'var(--common-dk-gray)'
    )};
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    setValueByTheme(
      theme.title,
      '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '0 4px 4px rgba(129,214,187, 0.27)'
    )};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 224px;
  padding: 20px;
  width: 350px;

  @media (min-width: 576px) {
    transition: transform ease-in 0.2s, box-shadow ease-in 0.3s;
    width: 385px;

    &:hover {
      box-shadow: ${({ theme }) =>
        setValueByTheme(
          theme.title,
          '0px 4px 10px rgba(0, 0, 0, 0.45)',
          '0 8px 10px 0 rgba(129,214,187, 0.27)'
        )};
      transform: scale(1.02);
    }
  }
`;

export const ProductFigure = styled.figure`
  background: var(--common-white);
  border: 1px solid
    ${({ theme }) =>
      setValueByTheme(theme.title, 'var(--common-white)', 'var(--secondary)')};
  border-radius: 10px;
  height: 80px;
  padding: 5px;
  width: 80px;
`;

export const ProductImg = styled.img`
  height: 100%;
`;
