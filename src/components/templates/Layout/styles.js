import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 120px 0;
  gap: 40px;
  width: 100%;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
