import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;
