import React from 'react';
import { DateTime } from 'luxon';
import { styled } from '@stitches/react';

const DateWidget: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(DateTime.local());

  React.useEffect(() => {
    // let interval: NodeJS.Timer;
    if (!loaded) {
      setInterval(() => setCurrentTime(DateTime.local()), 500);
      setLoaded(true);
    }

    // return () => {
    //   clearInterval(interval);
    // };
  }, [currentTime, loaded]);

  const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem',
  });

  const DateHeading = styled('h1', {
    fontSize: '2rem',
    fontWeight: 200,
  });

  const CurrentTime = styled('h3', {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '2.2rem',
  });

  const PostDate = styled('span', {
    fontWeight: 200,
    color: 'grey',
  });

  return (
    <Container>
      <DateHeading>
        {currentTime.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
      </DateHeading>
      <CurrentTime>
        {currentTime.toLocaleString(DateTime.TIME_WITH_SECONDS).split(' ')[0]}
        <PostDate>
          {currentTime.toLocaleString(DateTime.TIME_WITH_SECONDS).split(' ')[1]}
        </PostDate>
      </CurrentTime>
    </Container>
  );
};

export default DateWidget;
