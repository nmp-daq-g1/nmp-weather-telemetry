import React, { useContext } from 'react';
import classes from './Rain.module.css';
import Humidity from '../../../assets/Humidity';
import data from '../../../store/data-context';
import RainIcon from '../../../assets/nav/RainIcon';

const RainWidget: React.FC = () => {
  const ctx = useContext(data);
  const humidityData = Math.round(ctx.realTimeData.humidity * 100);
  const precipitationData = Math.round(ctx.realTimeData.precipitation);

  return (
    <div className={classes.container}>
      <p>
        Track <b>Humidity</b>
      </p>
      <div>
        <Humidity />
        <h3>{humidityData}%</h3>
      </div>
      <p>
        Track <b>Precipitation</b>
      </p>
      <div>
        <RainIcon />
        <h3>{precipitationData}mm</h3>
      </div>
    </div>
  );
};

export default RainWidget;
