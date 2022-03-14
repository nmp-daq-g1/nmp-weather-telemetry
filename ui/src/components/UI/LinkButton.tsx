import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/nav/Home';
import RainIcon from '../../assets/nav/RainIcon';
import TempIcon from '../../assets/nav/TempIcon';
import WindIcon from '../../assets/nav/WindIcon';

// for buttons on nav bar
const LinkButton: React.FC<{ text: string; to: string }> = (props) => {
  const mode = localStorage.getItem('modeColor');

  return (
    <NavLink to={props.to}>
      {props.text === 'Overview' && <HomeIcon isDarkMode={mode === 'dark'} />}
      {props.text === 'Temperature' && (
        <TempIcon isDarkMode={mode === 'dark'} />
      )}
      {props.text === 'Wind' && <WindIcon isDarkMode={mode === 'dark'} />}
      {props.text === 'Precipitation' && (
        <RainIcon isDarkMode={mode === 'dark'} />
      )}
      {/* <p>{props.text}</p> */}
    </NavLink>
  );
};

export default LinkButton;
