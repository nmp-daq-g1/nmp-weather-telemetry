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
      { i: 'a', x: 0, y: 0, w: 1, h: 3 },
      { i: 'b', x: 1, y: 0, w: 1, h: 2 },
      { i: 'c', x: 2, y: 0, w: 1, h: 2 },
      { i: 'd', x: 0, y: 2, w: 1, h: 2 },
      { i: 'e', x: 2, y: 1, w: 2, h: 2 },
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
        <div key="a">
          <TempWidget />
        </div>
        <div key="b" className="widget">
          <WindWidget />
        </div>
        <div key="c" className="widget">
          <WeatherWidget />
        </div>
        <div key="d" className="widget">
          <RainWidget />
        </div>
        <div key="e" className="widget">
          <GraphWidget />
        </div>
      </ResponsiveReactGridLayout>
    </section>
  );
};

export default Dashboard;
