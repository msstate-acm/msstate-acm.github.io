import React, { Component } from 'react';
import '../css/Banner.css';
import { Container, Segment, Header } from 'semantic-ui-react';

class Banner extends Component {
  render() {
    return (
      <Container fluid>
      <Segment inverted attached className='Banner'>
        <br />
        <Header size='huge'>
          Association for Computing Machinery
        </Header>
        <Header size='small'>
          <em>The</em> Computer Science Organization at Mississippi State University
        </Header>
      </Segment>
      </Container>
    );
  }
}

export default Banner;
