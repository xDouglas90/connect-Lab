import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 48px;
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
      : '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'};
  border-radius: 10px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 50%;
`;
