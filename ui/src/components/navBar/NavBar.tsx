import React from 'react';
import classes from './NavBar.module.css';
import Logo from '../../assets/redbackLogo.svg';
import SearchIcon from '@mui/icons-material/Search';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

// checked === true => light
// checked === false => dark
const NavBar: React.FC<{
  switchMode: (checked: boolean) => void;
  currMode: string;
}> = ({ switchMode, currMode }) => {
  return (
    <header className={classes.container}>
      <img src={Logo} alt="redback logo" />
      <div className={classes.items}>
        <label htmlFor="search">
          <SearchIcon htmlColor={currMode === 'light' ? 'black' : 'white'} />
          <input id="search" placeholder="Search" />
        </label>
        <DarkModeSwitch
          style={{
            backgroundColor: 'transparent',
            height: '30px',
            marginTop: '7px',
          }}
          checked={localStorage.getItem('colorMode') === 'dark' || false}
          onChange={switchMode}
          size={120}
          moonColor="white"
          sunColor="#FFBD35"
        />
      </div>
    </header>
  );
};

export default NavBar;
