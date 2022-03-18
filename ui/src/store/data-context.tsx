import React, { useEffect, useState } from 'react';
import axios from 'axios';

const data = React.createContext({
  getData: false,
  realTimeData: {
    ambient_temp: 0,
    humidity: 0,
    precipitation: 0,
    track_temp: 0,
    wind_dir: 0,
    wind_speed: 0,
  },
  stopGetDataHandler: () => {},
  startGetDataHandler: () => {},
});

export const DataProvider: React.FC = (props) => {
  const [getData, setGetData] = useState(false);
  const [realTimeData, setRealTimeData] = useState({
    ambient_temp: 0,
    humidity: 0,
    precipitation: 0,
    track_temp: 0,
    wind_dir: 0,
    wind_speed: 0,
  });

  useEffect(() => {
    const dup = realTimeData;
    const interval = setInterval(() => {
      if (JSON.stringify(dup) === JSON.stringify(realTimeData)) {
        setGetData(false);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [realTimeData]);

  useEffect(() => {
    const ws = new WebSocket('wss://nmp.vex.sh/wss');
    ws.onopen = (): void => {
      // eslint-disable-next-line no-console
      console.log('connected');
    };
    ws.onmessage = (evt): void => {
      const weather = JSON.parse(evt.data);
      setRealTimeData(weather);
      if (weather) {
        setGetData(true);
      }
    };
    ws.onclose = (): void => {
      // eslint-disable-next-line no-console
      console.log('disconnected');
    };
  }, []);

  const stopGetDataHandler = async (): Promise<void> => {
    try {
      const resp = await axios.get('https://nmp.vex.sh/api/stop');
      if (resp.status === 200) {
        setGetData(false);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const startGetDataHandler = async (): Promise<void> => {
    try {
      const resp = await axios.get('https://nmp.vex.sh/api/start');
      if (resp.status === 200) {
        setGetData(true);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  return (
    <data.Provider
      value={{
        getData: getData,
        realTimeData: realTimeData,
        stopGetDataHandler,
        startGetDataHandler,
      }}
    >
      {props.children}
    </data.Provider>
  );
};

export default data;
