import React, { Component } from 'react';
import Header from '../header';
import { Container } from './style';

export default class Board extends Component {
  render() {
    return (
        <Container>
          <header>
            <Header />
          </header>
          <main></main>
          <aside>
          </aside>            
        </Container>
    );
  }
}
