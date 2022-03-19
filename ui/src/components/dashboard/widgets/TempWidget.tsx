import React, { useContext } from 'react';
import data from '../../../store/data-context';
import classes from './Temp.module.css';

const TempWidget: React.FC = () => {
  const ctx = useContext(data);
  const trackTemp = Math.round(ctx.realTimeData.track_temp);
  const ambientTemp = Math.round(ctx.realTimeData.ambient_temp);

  return (
    <div className={classes.container}>
      <p>
        Track <b>Temperature</b>
      </p>
      <h2>{trackTemp}</h2>
      <h2>{ambientTemp}</h2>
      <p>Ambient Temperature</p>
    </div>
  );
};

export default TempWidget;
