import styled from 'styled-components';

export const NavBar = styled.nav`
  padding: 0px;
  gap: 5px;
  width: 298px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 31px;
    gap: 20px;
  }
`;

export const MenuItem = styled.li`
  text-align: center;
`;
