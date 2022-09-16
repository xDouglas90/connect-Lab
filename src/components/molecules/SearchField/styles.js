import styled from 'styled-components';
import { Wrapper } from '../../atoms/Input/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    line-height: 1.6;

    ${Wrapper} {
      width: 100%;
    }
  }
`;
