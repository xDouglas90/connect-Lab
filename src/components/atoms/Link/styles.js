import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) =>
    theme.title === 'Claro' ? 'var(--secondary)' : 'var(--common-white)'};
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: underline;
`;
