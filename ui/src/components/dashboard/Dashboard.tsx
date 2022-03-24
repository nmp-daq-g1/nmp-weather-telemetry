import React, { useContext, useEffect, useMemo, useState } from 'react';
import classes from './Dashboard.module.css';
import TempWidget from './widgets/TempWidget';
import WindWidget from './widgets/WindWidget';
import DateWidget from './widgets/DateWidget';
import RainWidget from './widgets/RainWidget';
import TempForecast from './widgets/ForecastWidget';
import ReplayIcon from '@mui/icons-material/Replay';
import { Responsive, WidthProvider } from 'react-grid-layout';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import data from '../../store/data-context';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const ctx = useContext(data);
  const status = ctx.getData ? 'LIVE' : 'OFFLINE';
  const defaultLayout = useMemo(() => {
    return {
      lg: [
        { i: 'temp', x: 0, y: 0, w: 1, h: 3 },
        { i: 'wind', x: 1, y: 0, w: 1, h: 2 },
        { i: 'weather', x: 2, y: 0, w: 1, h: 2 },
        { i: 'rain', x: 0, y: 2, w: 1, h: 2 },
        { i: 'graph', x: 2, y: 1, w: 2, h: 3 },
      ],
    };
  }, []);

  const [gridLayout, setGridLayout] = useState(
    localStorage.getItem('layout')
      ? JSON.parse(localStorage.getItem('layout') || '{}')
      : defaultLayout,
  );
  useEffect(() => {
    if (!localStorage.getItem('layout')) {
      localStorage.setItem('layout', JSON.stringify(defaultLayout));
    }
  }, [defaultLayout]);

  const backOrigin = (): void => {
    setGridLayout(defaultLayout);
    localStorage.setItem('layout', JSON.stringify(defaultLayout));
  };

  const changedLayoutHandler = (
    currentLayout: ReactGridLayout.Layout[],
  ): void => {
    setGridLayout({ lg: currentLayout });
    localStorage.setItem('layout', JSON.stringify({ lg: currentLayout }));
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.top}>
        <h2>Overview</h2>
        <div className={classes.status}>
          <p>{status}</p>
          <span
            className={`${classes.circle} ${
              status === 'LIVE' && classes['circle-flicker']
            }`}
            data-status={status}
          />
        </div>
      </div>
      <ResponsiveReactGridLayout
        layouts={gridLayout}
        breakpoints={{ lg: 1200, sm: 768, xs: 480 }}
        cols={{ lg: 3, sm: 2, xs: 1 }}
        margin={[20, 20]}
        onLayoutChange={changedLayoutHandler}
      >
        <div key="temp" className={classes.temp}>
          <TempWidget />
        </div>
        <div key="wind" className={classes.wind}>
          <WindWidget />
        </div>
        <div key="weather" className={classes.weather}>
          <DateWidget />
        </div>
        <div key="rain" className={classes.rain}>
          <RainWidget />
        </div>
        <div key="graph" className={classes.graph}>
          <TempForecast />
        </div>
      </ResponsiveReactGridLayout>
      <button
        className={classes.back}
        title="Back to original position of widgets"
        onClick={backOrigin}
      >
        <ReplayIcon className={classes['back-icon']} fontSize="large" />
      </button>
    </section>
  );
};

export default Dashboard;
