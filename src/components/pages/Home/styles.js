import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 330px;

  @media (min-width: 576px) {
    width: 495px;
  }

  @media (min-width: 768px) {
    width: 695px;
  }

  @media (min-width: 992px) {
    width: 794px;
  }

  @media (min-width: 1440px) {
    width: 1200px;
  }
`;
