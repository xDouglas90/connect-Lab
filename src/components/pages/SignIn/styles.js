import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 48px;
  gap: 28px;

  width: 454px;
  height: 400px;

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
`;

export const Error = styled.span`
  background: var(--error);
  color: var(--common-white);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  padding: 0 1rem;
`;
