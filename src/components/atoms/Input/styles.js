import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4.84px;
  width: 358px;
  height: 54.09px;
`;

export const Label = styled.label`
  color: var(--primary-dark);
  font-size: 10px;
  font-weight: 400;
`;

export const Input = styled.input`
  border: 1px solid var(--secondary-light);
  border-radius: 3px;
  padding: 5px 10px;
  width: 100%;

  &:focus {
    border-color: var(--primary-main);
  }

  &::placeholder {
    color: var(--secondary-light);
    font-size: 10px;
  }
`;
