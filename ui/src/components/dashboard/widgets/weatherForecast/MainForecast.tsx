import * as React from 'react';
import { styled } from '@stitches/react';

interface MainForecastProps {
  temp: number;
}

const MainCard = styled('div', {
  borderRadius: 10,
  backgroundColor: 'rgba(44, 44, 46, 0.2);',
  margin: '1rem',
  filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TodayHeading = styled('h3', {
  color: 'white',
  fontWeight: '300',
  textAlign: 'center',
  fontSize: 20,
});

const WeatherText = styled('p', {
  fontSize: 40,
  background:
    'linear-gradient(178.97deg, #0971D1 0.89%, rgba(255, 255, 255, 0.76) 76.14%);',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textAlign: 'center',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: 0,
  marginBottom: '1rem',
});

const Chip = styled('div', {
  height: 40,
  width: 140,
  borderRadius: 20,
  background: 'rgba(78, 139, 197, 0.2)',
  color: 'white',
  fontWeight: 400,
  fontSize: 14,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
});

const MainForecast: React.FC<MainForecastProps> = ({ temp }) => {
  return (
    <MainCard>
      <TodayHeading>Right Now</TodayHeading>
      <WeatherText>{temp}°</WeatherText>
      <Chip>Sydney, NSW</Chip>
    </MainCard>
  );
};

export default MainForecast;
