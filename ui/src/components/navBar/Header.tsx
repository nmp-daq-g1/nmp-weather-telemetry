import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/redbackLogo.svg';
import SearchIcon from '@mui/icons-material/Search';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useNavigate } from 'react-router-dom';

// checked === true => light
// checked === false => dark
const Header: React.FC<{
  switchMode: (checked: boolean) => void;
  currMode: string;
}> = ({ switchMode, currMode }) => {
  const navigate = useNavigate();

  return (
    <header className={classes.container}>
      <img
        src={Logo}
        alt="redback logo"
        onClick={(): void => {
          navigate('/');
        }}
      />
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
          checked={currMode === 'dark'}
          onChange={switchMode}
          size={120}
          moonColor="white"
          sunColor="#FFBD35"
        />
      </div>
    </header>
  );
};

export default Header;
