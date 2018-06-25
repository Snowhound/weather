import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class NotFoundPage extends Component {
    render() {
      return (
        <Container>
          <Header as='h2'>Page not found</Header>
          Sorry! :)
        </Container>
      );
    }
  }

  export default NotFoundPage;