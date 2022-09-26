import { setValueByTheme } from '@utils';
import styled from 'styled-components';

import { BiSearchAlt } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  position: relative;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1.6;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid
    ${({ theme }) =>
      setValueByTheme(
        theme.title,
        'var(--common-dk-gray)',
        'var(--secondary)',
      )};
  border-radius: 3px;
  padding: 5px 10px;
  width: 100%;

  &:focus {
    box-shadow: ${({ theme }) =>
      setValueByTheme(
        theme.title,
        `0 0 0 2px var(--primary)`,
        `0 0 0 2px var(--secondary)`,
      )};
  }

  &:focus ~ span {
    width: 360px;
  }

  &::placeholder {
    color: var(--common-dk-gray);
    font-size: 12px;
  }
`;

export const SearchIcon = styled(BiSearchAlt)`
  color: var(--primary);
  font-size: 1.65rem;
  position: absolute;
  right: 5px;
  top: 18%;
`;
