import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import NavBar from './components/navBar/NavBar';

const App: React.FC = () => {
  const [mode, setMode] = useState(localStorage.getItem('colorMode') || 'dark');

  const switchMode = (checked: boolean): void => {
    const newMode = checked ? 'dark' : 'light';
    setMode((): string => newMode);
    localStorage.setItem('colorMode', newMode);
  };

  useEffect(() => {
    if (!localStorage.getItem('colorMode')) {
      localStorage.setItem('colorMode', 'dark');
    }
  }, []);

  return (
    <div
      color-mode={localStorage.getItem('colorMode') || 'dark'}
      className={classes.container}
    >
      <NavBar switchMode={switchMode} currMode={mode} />
    </div>
  );
};

export default App;
