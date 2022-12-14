import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 60px;
  gap: 40px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 120px 120px 60px;
  }
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
