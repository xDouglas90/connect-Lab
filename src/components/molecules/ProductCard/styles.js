import styled from 'styled-components';

import { setValueByTheme } from '@utils';

export const CardContainer = styled.li`
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
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 350px;

  @media (min-width: 576px) {
    transition: transform ease-in 0.25s, box-shadow ease-in 0.3s;
    width: 385px;

    &:hover {
      box-shadow: ${({ theme }) =>
        setValueByTheme(
          theme.title,
          '0px 4px 10px rgba(0, 0, 0, 0.45)',
          '0 8px 10px 0 rgba(129,214,187, 0.27)',
        )};
      transform: scale(1.05);
    }
  }
`;

export const CardWrapper = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  height: 100%;
  padding: 1.1rem;
`;

export const ProductFigure = styled.figure`
  background: var(--common-white);
  border: 1px solid
    ${({ theme }) =>
      setValueByTheme(theme.title, 'var(--common-white)', 'var(--secondary)')};
  border-radius: 4px;
  height: 90px;
  width: 90px;
`;

export const ProductImg = styled.img`
  height: 100%;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  height: 80px;
  max-width: 173px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: '...';
`;

export const ProductChars = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
`;

export const ProductChar = styled.span`
  font-size: 1rem;
`;

export const StateIcon = styled.img`
  height: 35px;
  width: 35px;
`;
