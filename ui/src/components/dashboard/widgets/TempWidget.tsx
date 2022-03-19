import React, { useContext, useState } from 'react';
import data from '../../../store/data-context';
import classes from './Temp.module.css';

const TempWidget: React.FC = () => {
  const [unit, setUnit] = useState('°C');
  const ctx = useContext(data);
  const trackTemp = Math.round(ctx.realTimeData.track_temp) || '--';
  const ambientTemp = Math.round(ctx.realTimeData.ambient_temp);
  const trackColor =
    trackTemp < 50
      ? classes.track__cold
      : trackTemp !== '--' && classes.track__hot;
  const trackFontColor =
    trackTemp < 50
      ? classes['track-temp__cold']
      : trackTemp !== '--'
      ? classes['track-temp__hot']
      : '';
  const unitMove = unit === '°C' ? classes.celsius : classes.fahrenheit;

  const convertToF = (celsius: number): number => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const switchUnitHandler = (): void => {
    setUnit((prev) => (prev === '°F' ? '°C' : '°F'));
  };

  return (
    <div className={classes.container}>
      <p>
        Track <b>Temperature</b>
      </p>
      <div className={`${classes.track} ${trackColor}`}>
        <div className={classes['track-circle']}>
          <h2 className={trackFontColor}>
            {unit === '°C'
              ? trackTemp
              : trackTemp !== '--'
              ? convertToF(trackTemp)
              : '--'}
            {trackTemp !== '--' && (
              <span className={classes.degree}>{unit}</span>
            )}
          </h2>
        </div>
      </div>
      <button onClick={switchUnitHandler}>
        <span className={`${classes.cover} ${unitMove}`}></span>
        <span>°C</span>
        <span>°F</span>
      </button>
      <h2 className={classes.ambient}>
        {unit === '°C' ? ambientTemp : convertToF(ambientTemp)}
        <span className={classes.degree}>{unit}</span>
      </h2>
      <p>Ambient Temperature</p>
    </div>
  );
};

export default TempWidget;
