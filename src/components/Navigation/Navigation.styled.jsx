import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* gap: ${p => p.theme.spacing(4)}; */
`;

export const NavPageLink = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border-top-right-radius: ${p => p.theme.radius};
  border-top-left-radius: ${p => p.theme.radius};
  transition: all ${p => p.theme.transition};

  &.active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accent};
  }

  &:hover {
    background-color: ${p => p.theme.colors.hover};

    &.active {
      color: ${p => p.theme.colors.white};
    }
  }
`;
