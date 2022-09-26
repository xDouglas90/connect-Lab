import styled from 'styled-components';

import { setValueByTheme } from '@utils';
import { downArrowIcon } from '@icons';

export const Form = styled.form`
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

export const Error = styled.span`
  color: var(--error);
  width: 100%;
  height: -1px;
  font-weight: 600;
  font-size: 0.85rem;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 300px;
  height: 62px;

  @media (min-width: 576px) {
    width: 358px;
  }
`;

export const Label = styled.label`
  display: flex;
  color: ${({ theme }) =>
    setValueByTheme(theme.title, 'var(--primary)', 'var(--secondary)')};
  font-size: 14px;
  font-weight: ${({ theme }) => setValueByTheme(theme.title, '400', '600')};
`;

export const Select = styled.select`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: var(--common-white);
  background-image: url(${downArrowIcon});
  background-size: 18px;
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 10px;
  border: 1px solid
    ${({ theme }) =>
      setValueByTheme(
        theme.title,
        'var(--common-dk-gray)',
        'var(--secondary)',
      )};
  border-radius: 3px;
  color: var(--common-dk-gray);
  height: 4rem;
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
`;
