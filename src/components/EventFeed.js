import React, { Component } from 'react';
import EventItem from './EventItem';
import Events from '../data/Events'
import { Container } from 'semantic-ui-react';

class EventFeed extends Component {
  render() {
    let eventItems;
    if (Events) {
      eventItems = Events.map(e => {
        return <EventItem key={e.id} header={e.header} date={e.date} description={e.description} />
      })
    }
    return (
      <Container>
        {eventItems}
      </Container>
    );
  }
}

export default EventFeed;
