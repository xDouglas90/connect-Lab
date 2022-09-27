import styled from 'styled-components';

import { setValueByTheme } from '@utils';

import { Title } from '../../atoms/Title/styles';

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
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  height: 567px;
  padding: 3rem 2rem;
  width: 315px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  ${Title} {
    text-align: center;
  }
`;

export const ProductFigure = styled.figure`
  background: var(--common-white);
  border: 4px solid transparent;
  border: 1px solid
    ${({ theme }) =>
      setValueByTheme(theme.title, 'var(--common-white)', 'var(--secondary)')};
  border-radius: 10px;
  height: 100px;
  padding: 5px;
  outline: 2px solid var(--primary);
  width: 100px;
`;

export const ProductImg = styled.img`
  height: 100%;
`;

export const StateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const State = styled.strong`
  color: var(--text);
  font-size: 16px;
  font-weight: 500;
`;

export const StateIcon = styled.img`
  height: 35px;
  width: 35px;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 219px;
  height: 135.09px;
`;

export const InfosTitle = styled.strong`
  border-bottom: 1px solid var(--primary);
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
`;

export const Info = styled.p`
  font-size: 14px;
  line-height: 18px;
`;

export const StateBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
