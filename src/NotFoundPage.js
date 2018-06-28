import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>404  Page not found</Header>
        <img src="/giphy.gif" alt="sadGif"/>
      </Container>
    );
  }
}

export default NotFoundPage;