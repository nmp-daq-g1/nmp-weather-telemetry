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

const Hour = styled('span', {
  display: 'block',
  color: 'var(--color-font)',
  fontWeight: 200,
  fontSize: 15,
  marginBottom: '.25rem',
});

const Temp = styled('span', {
  display: 'block',
  color: 'var(--color-font)',
  fontWeight: 400,
  fontSize: 30,
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
