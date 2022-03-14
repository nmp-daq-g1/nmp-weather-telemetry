import React from 'react';
import classes from './Nav.module.css';
import LinkButton from '../UI/LinkButton';

const Nav: React.FC = () => {
  return (
    <nav className={classes.container}>
      <LinkButton text="Overview" to="/" />
      <LinkButton text="Temperature" to="/temperature" />
      <LinkButton text="Wind" to="/wind" />
      <LinkButton text="Precipitation" to="/precipitation" />
    </nav>
  );
};

export default Nav;
