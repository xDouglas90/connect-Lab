import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 48px;
  gap: 28px;

  width: 454px;
  height: 374px;

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
