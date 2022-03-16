/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import classes from './Dashboard.module.css';
import TempWidget from './widgets/TempWidget';
import WindWidget from './widgets/WindWidget';
import WeatherWidget from './widgets/WeatherWidget';
import RainWidget from './widgets/RainWidget';
import GraphWidget from './widgets/GraphWidget';
import { Responsive, WidthProvider } from 'react-grid-layout';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const layout = {
    lg: [
      { i: 'temp', x: 0, y: 0, w: 1, h: 3 },
      { i: 'wind', x: 1, y: 0, w: 1, h: 2 },
      { i: 'weather', x: 2, y: 0, w: 1, h: 2 },
      { i: 'rain', x: 0, y: 2, w: 1, h: 2 },
      { i: 'graph', x: 2, y: 1, w: 2, h: 3 },
    ],
  };
  return (
    <section className={classes.wrapper}>
      <div className={classes.top}>
        <h2>Overview</h2>
        <div className={classes.status}>
          <p>LIVE</p>
          <span className={classes.circle} />
        </div>
      </div>
      <ResponsiveReactGridLayout
        layouts={layout}
        breakpoints={{ lg: 1200, sm: 768, xs: 480 }}
        cols={{ lg: 3, sm: 2, xs: 1 }}
        margin={[20, 20]}
      >
        <div key="temp" className={classes.temp}>
          <TempWidget />
        </div>
        <div key="wind" className={classes.wind}>
          <WindWidget />
        </div>
        <div key="weather" className={classes.weather}>
          <WeatherWidget />
        </div>
        <div key="rain" className={classes.rain}>
          <RainWidget />
        </div>
        <div key="graph" className={classes.graph}>
          <GraphWidget />
        </div>
      </ResponsiveReactGridLayout>
    </section>
  );
};

export default Dashboard;
