import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 17px;
  gap: 28px;
  background: ${({ theme }) =>
    theme.title === 'Claro'
      ? 'var(--common-white)'
      : 'rgba( 255, 255, 255, 0.25 )'};
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  box-shadow: ${({ theme }) =>
    theme.title === 'Claro'
      ? '0px 4px 4px rgba(0, 0, 0, 0.25)'
      : '0 4px 4px rgba(129,214,187, 0.27)'};
  border-radius: 10px;

  @media (min-width: 576px) {
    padding: 36px 48px;
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Error = styled.span`
  color: var(--error);
  width: 100%;
  height: -1px;
  font-weight: 600;
  font-size: 0.85rem;
`;
