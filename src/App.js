import React, { Component } from 'react';
import Banner from './components/Banner';
import EventFeed from './components/EventFeed';
import TwitterFeed from './components/TwitterFeed';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Banner />
        <br />
        <Grid centered columns='2' stackable>
          <Grid.Column>
            <EventFeed />
          </Grid.Column>
          <Grid.Column width={4} only='tablet computer'>
            <TwitterFeed />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
