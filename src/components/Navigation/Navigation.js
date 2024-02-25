// import { NavLink } from 'react-router-dom';
import { NavList, NavPageLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <NavPageLink to="/">Home</NavPageLink>
        </li>
        <li>
          <NavPageLink to="/catalog">Catalog</NavPageLink>
        </li>
        <li>
          <NavPageLink to="/favorites">Favorites</NavPageLink>
        </li>
      </NavList>
    </nav>
  );
};
