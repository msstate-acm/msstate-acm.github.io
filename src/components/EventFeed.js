import React, { Component } from 'react';
import EventItem from './EventItem';
import uuid from 'uuid';
import { Container } from 'semantic-ui-react';

class EventFeed extends Component {
  render() {
    const events = [
      {
        id: uuid.v4(),
        header: "Hello World",
        date: new Date(2017, 6, 15),
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: uuid.v4(),
        header: "Another Event",
        date: new Date(),
        description: "Another description"
      },
    ];

    let eventItems;
    if (events) {
      eventItems = events.map(e => {
        return <EventItem key={e.id} header={e.header} date={e.date} description={e.description} />
      })
    }
    return (
      <Container fluid>
        {eventItems}
      </Container>
    );
  }
}

export default EventFeed;
