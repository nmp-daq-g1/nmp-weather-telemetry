import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/nav/Home';
import RainIcon from '../../assets/nav/RainIcon';
import TempIcon from '../../assets/nav/TempIcon';
import WindIcon from '../../assets/nav/WindIcon';
import classes from './LinkButton.module.css';

// for buttons on nav bar
const LinkButton: React.FC<{ text: string; to: string }> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={(navData): string =>
        navData.isActive
          ? `${classes.active} ${classes.btn}`
          : `${classes.normal} ${classes.btn}`
      }
    >
      {props.text === 'Overview' && <HomeIcon />}
      {props.text === 'Temperature' && <TempIcon />}
      {props.text === 'Wind' && <WindIcon />}
      {props.text === 'Precipitation' && <RainIcon />}
      <p className={classes.text}>{props.text}</p>
    </NavLink>
  );
};

export default LinkButton;
