import React, { Component } from 'react';
import '../css/Banner.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';

class Banner extends Component {
  render() {
    return (
      <Container fluid>
        <Segment clearing attached className='BannerImage'>
          <br />
          <Header size='huge' className='BannerText'>
            Association for Computing Machinery
          </Header>
          <Button circular color='twitter' icon='twitter' floated='right'
            href='https://www.twitter.com/AcmMsu/' />
          <Button circular color='instagram' icon='instagram' floated='right'
            href='https://www.instagram.com/msstate.acm/' />
          <Button circular color='facebook' icon='facebook f' floated='right'
            href='https://www.facebook.com/MSUACM/' />
          <Header size='small' className='BannerText'>
            <em>The</em> Computer Science Organization at Mississippi State University
          </Header>
        </Segment>
      </Container>
    );
  }
}

export default Banner;
