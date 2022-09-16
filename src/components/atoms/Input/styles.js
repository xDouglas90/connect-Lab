import styled from 'styled-components';

import { downArrowIcon } from '@icons';

import { colors } from '@styles';
import { setValueByTheme } from '@utils';

export const Wrapper = styled.div`
  display: ${({ isDisplayed }) => (isDisplayed ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 300px;
  height: 54.09px;

  @media (min-width: 576px) {
    width: 358px;
  }
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
    setValueByTheme(theme.title, colors.primary.main, colors.secondary.light)};
  font-size: 14px;
  font-weight: ${({ theme }) => setValueByTheme(theme.title, '400', '600')};
`;

export const Input = styled.input`
  border: 1px solid
    ${({ theme }) =>
      setValueByTheme(
        theme.title,
        'var(--common-dk-gray)',
        colors.secondary.main
      )};
  border-radius: 3px;
  padding: 5px 10px;
  width: 100%;

  &:focus {
    box-shadow: ${({ theme }) =>
      setValueByTheme(
        theme.title,
        `0 0 0 2px ${colors.primary.light}`,
        `0 0 0 2px ${colors.secondary.light}`
      )};
  }

  &::placeholder {
    color: var(--common-dk-gray);
    font-size: 12px;
  }
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
        colors.secondary.main
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
        `0 0 0 2px ${colors.primary.light}`,
        `0 0 0 2px ${colors.secondary.light}`
      )};
  }
`;
