import React, { useState } from 'react';

const data = React.createContext({
  getData: false,
  stopGetDataHandler: () => {},
  startGetDataHandler: () => {},
});

export const DataProvider: React.FC = (props) => {
  const [getData, setGetData] = useState(false);
  const stopGetDataHandler = (): void => {
    setGetData(false);
  };

  const startGetDataHandler = (): void => {
    setGetData(true);
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
