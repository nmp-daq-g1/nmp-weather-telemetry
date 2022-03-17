import React, { useContext, useEffect, useState } from 'react';
import classes from './App.module.css';
import Header from './components/navBar/Header';
import Nav from './components/navBar/Nav';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Temperature from './components/temperature/Temperature';
import Wind from './components/wind/Wind';
import Precipitation from './components/precipitation/Precipitation';
import Settings from './components/settings/Settings';
import Pause from './assets/pause.svg';
import Resume from './assets/resume.svg';
import data from './store/data-context';

const App: React.FC = () => {
  // switch between dark mode and light mode
  const [mode, setMode] = useState(localStorage.getItem('colorMode') || 'dark');
  const ctx = useContext(data);
  // console.log(ctx.realTimeData);
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
    <div color-mode={mode} className={classes.container}>
      <Header switchMode={switchMode} currMode={mode} />
      <Nav />
      {ctx.getData ? (
        <img
          src={Pause}
          alt="stop getting data"
          onClick={ctx.stopGetDataHandler}
          className={classes['status-icon']}
          title="Stop getting data"
        />
      ) : (
        <img
          src={Resume}
          alt="start getting data"
          title="Start getting data"
          onClick={ctx.startGetDataHandler}
          className={classes['status-icon']}
        />
      )}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/precipitation" element={<Precipitation />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="*"
          element={<p style={{ textAlign: 'center' }}>Oops! Page not found</p>}
        />
      </Routes>
    </div>
  );
};

export default App;
