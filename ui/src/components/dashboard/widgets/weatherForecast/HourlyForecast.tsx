import * as React from 'react';
import { styled } from '@stitches/react';

interface HourlyForecastProps {
  time: string;
  temp: number;
}

const Background = styled('div', {
  padding: '.5rem',
  margin: '.5rem',
});

const Hour = styled('div', {
  fontWeight: 200,
  fontSize: 15,
  color: 'white',
  marginBottom: '.25rem',
});

const Temp = styled('div', {
  fontWeight: 400,
  fontSize: 30,
  color: 'white',
});

const HourlyForecast: React.FC<HourlyForecastProps> = ({ temp, time }) => {
  return (
    <Background>
      <Hour>{time}</Hour>
      <Temp>{temp}°</Temp>
    </Background>
  );
};

export default HourlyForecast;
