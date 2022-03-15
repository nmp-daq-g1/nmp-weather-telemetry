import React from 'react';
import classes from './Dashboard.module.css';
import Masonry from '@mui/lab/Masonry';
import TempWidget from './widgets/TempWidget';
import WindWidget from './widgets/WindWidget';
import WeatherWidget from './widgets/WeatherWidget';
import RainWidget from './widgets/RainWidget';
import GraphWidget from './widgets/GraphWidget';

const Dashboard: React.FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.top}>
        <h2>Overview</h2>
        <div className={classes.status}>
          <p>LIVE</p>
          <span className={classes.circle} />
        </div>
      </div>
      <Masonry columns={3} spacing={2}>
        <TempWidget />
        <WindWidget />
        <WeatherWidget />
        <RainWidget />
        <GraphWidget />
      </Masonry>
    </section>
  );
};

export default Dashboard;
