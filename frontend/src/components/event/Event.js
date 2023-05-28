import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px top -100px;
  background-size: cover;
`;

const events = [
  {
    title: 'Code Air',
    description: 'Coding competition for all the students of the college.',
    date: 'May 1, 2023',
  },
  {
    title: 'Devsinc Event',
    description: 'AI summit for all the students of the college.',
    date: 'May 10, 2023',
  },
  {
    title: 'Convocation',
    description: 'Passsout event for all the students of the college.',
    date: 'May 20, 2023',
  },
  // Add more events here
];

const TimelineContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '40px',
});

const EventItem = styled(Box)({
  marginBottom: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  maxWidth: '500px',
});

const EventTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '8px',
});

const EventDate = styled(Typography)({
  fontSize: '14px',
  color: '#666',
  marginBottom: '12px',
});

const EventDescription = styled(Typography)({
  marginBottom: '8px',
});

const Event = () => {
  return (
    <>
      <Banner />
      <TimelineContainer>
        {events.map((event, index) => (
          <EventItem key={index}>
            <EventTitle variant="h6" component="div">
              {event.title}
            </EventTitle>
            <EventDate variant="subtitle2">{event.date}</EventDate>
            <EventDescription variant="body2">{event.description}</EventDescription>
          </EventItem>
        ))}
      </TimelineContainer>
    </>
  );
};

export default Event;
