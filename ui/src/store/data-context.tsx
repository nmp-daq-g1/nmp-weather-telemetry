import React, { useState } from 'react';
import axios from 'axios';

const data = React.createContext({
  getData: false,
  stopGetDataHandler: () => {},
  startGetDataHandler: () => {},
});

export const DataProvider: React.FC = (props) => {
  const URL = 'http://nmp.vex.sh/api/start';
  const [getData, setGetData] = useState(false);

  const stopGetDataHandler = async (): Promise<void> => {
    try {
      const resp = await axios.get(URL);
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
      const resp = await axios.get(URL);
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
      value={{ getData: getData, stopGetDataHandler, startGetDataHandler }}
    >
      {props.children}
    </data.Provider>
  );
};

export default data;
