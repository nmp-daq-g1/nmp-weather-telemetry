import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import Header from './components/navBar/Header';
import Nav from './components/navBar/Nav';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Temperature from './components/temperature/Temperature';
import Wind from './components/wind/Wind';
import Precipitation from './components/precipitation/Precipitation';
import Settings from './components/settings/Settings';

const App: React.FC = () => {
  const [mode, setMode] = useState(localStorage.getItem('colorMode') || 'dark');
  console.log('🚀 ~ mode', mode);

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
