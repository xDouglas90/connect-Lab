import styled from 'styled-components';

export const NavBar = styled.nav`
  padding: 0px;
  gap: 5px;
  width: 100vw;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: initial;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
    gap: 20px;
  }
`;

export const MenuItem = styled.li`
  background: ${({ isActive }) =>
    isActive ? 'var(--secondary)' : 'transparent'};
  text-align: center;
  width: 100%;
  transition: background ease-in-out 0.3s;

  &:hover {
    background: var(--secondary);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 0.5rem;
  }
`;
