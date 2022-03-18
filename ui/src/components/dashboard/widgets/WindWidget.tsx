import React, { useContext } from 'react';
import data from '../../../store/data-context';
import classes from './Wind.module.css';
import Compass from '../../../assets/Compass.svg';
import Pointer from '../../../assets/Pointer';

const WindWidget: React.FC = () => {
  const ctx = useContext(data);
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  // eslint-disable-next-line @typescript-eslint/dot-notation
  const dir = Math.round(ctx.realTimeData['wind_speed']);
  // eslint-disable-next-line @typescript-eslint/dot-notation
  let angle = ctx.realTimeData['wind_dir'];
  const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;

  return (
    <div className={classes.container}>
      <p>
        Track <b>Wind Speed</b>
      </p>
      <img src={Compass} alt="compass" />
      <Pointer />
      <h2>
        {dir}km/h <span>{directions[index]}</span>
      </h2>
    </div>
  );
};

export default WindWidget;
