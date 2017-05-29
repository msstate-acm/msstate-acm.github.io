import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class TwitterFeed extends Component {
  render() {
    return (
      <Card raised>
        <a className="twitter-timeline"
        data-dnt="true" data-height='500' data-chrome='nofooter' data-link-color='#800000'
        href="https://twitter.com/AcmMsu">Twitter Feed of the Association for Computing Machinery at Mississippi State University</a>
      </Card>
    );
  }
}

export default TwitterFeed;
