import React from 'react';
import { Card } from 'semantic-ui-react';

function EventItem(props) {
  return (
    <Card fluid raised>
      <Card.Content>
        <Card.Header children={props.header} />
        <Card.Meta children={props.date.toDateString()} />
        <Card.Description children={props.description} />
      </Card.Content>
    </Card>
  );
}

export default EventItem;
