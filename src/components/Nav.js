import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/calculator" activeStyle={activeStyle}>
        Calculator
      </NavLink>
      {' | '}
      <NavLink to="/quote" activeStyle={activeStyle}>
        Qoute
      </NavLink>
    </nav>
  );
};

export default Nav;
