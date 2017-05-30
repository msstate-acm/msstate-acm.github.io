import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import "../css/TwitterFeed.css";

class TwitterFeed extends Component {
  render() {
    return (
      <Container>
      <Segment raised className="TwitterFeed">
        <a className="twitter-timeline"
        data-dnt="true" data-height='70vh' data-chrome='nofooter' data-link-color='#800000'
        href="https://twitter.com/AcmMsu">Twitter Feed of the Association for Computing Machinery at Mississippi State University</a>
      </Segment>
      </Container>
    );
  }
}

export default TwitterFeed;
