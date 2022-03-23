import React from 'react';
import { styled } from '@stitches/react';
import MainForecast from './weatherForecast/MainForecast';
import HourlyForecast from './weatherForecast/HourlyForecast';
import { getWeather, MatchedValue } from '../../../lib/weatherApi';
import { useEffectOnce } from 'react-use';

const Container = styled('div', {
  margin: '3rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '*': {
    boxSizing: 'border-box',
  },
});

const MainHeading = styled('h1', {
  color: 'white',
  fontWeight: 'normal',
});

const MiddleContainer = styled('div', {
  // display: 'flex',
  padding: '1rem',
  display: 'grid',
  gridTemplateColumns: '220px 1fr',
  gridTemplateRows: '1fr',
  height: 'fit-content',
});

const BoldedSpan = styled('span', {
  fontWeight: 'bold',
});

const HourlyContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const TempForecast: React.FC = () => {
  const [temps, setTemps] = React.useState<MatchedValue[]>([]);

  useEffectOnce(() => {
    (async (): Promise<void> => {
      const fetchData = await getWeather();
      setTemps([...fetchData]);
    })();
  });

  return (
    <Container>
      <MainHeading>
        Weather <BoldedSpan>Forecast</BoldedSpan>
      </MainHeading>
      <MiddleContainer>
        {temps.length > 0 && (
          <>
            <MainForecast temp={temps[0].temp} />
            <HourlyContainer>
              {temps.slice(1, 6).map((d) => (
                <HourlyForecast
                  key={d.time}
                  temp={d.temp}
                  time={d.time.split('T')[1]}
                />
              ))}
            </HourlyContainer>
          </>
        )}
      </MiddleContainer>
    </Container>
  );
};

export default TempForecast;
