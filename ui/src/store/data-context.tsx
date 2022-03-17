import React, { useState } from 'react';
import axios from 'axios';

const data = React.createContext({
  getData: false,
  stopGetDataHandler: () => {},
  startGetDataHandler: () => {},
});

export const DataProvider: React.FC = (props) => {
  const [getData, setGetData] = useState(
    localStorage.getItem('streaming') ? true : false,
  );

  const stopGetDataHandler = async (): Promise<void> => {
    try {
      const resp = await axios.get('https://nmp.vex.sh/api/stop');
      if (resp.status === 200) {
        localStorage.removeItem('streaming');
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
        localStorage.setItem('streaming', 'true');
        setGetData(true);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  return (
    <data.Provider
      value={{ getData: getData, stopGetDataHandler, startGetDataHandler }}
    >
      {props.children}
    </data.Provider>
  );
};

export default data;
