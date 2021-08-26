import React, { Component } from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Explore from '../../pages/explorer';
import InnerBag from '../../pages/innerBag';
import Upload from '../../pages/upload';
import Header from '../header';
import Navigator from '../navigation';
import { Container } from './style';

export default class Board extends Component {
  render() {
    return (
        <Container onContextMenu={event => event.preventDefault()}>
          {/* <Router> */}
            <header>
              <Header />
            </header>
            <aside>
              <Navigator />            
            </aside>            
            <main>
              <Switch>
                <Route exact path={"/"} component={Upload }/>
                <Route path={'/explore/:ids'} component={Explore} />
                <Route path={'/folder'} component={InnerBag} />
              </Switch>
            </main>
          {/* </Router> */}
        </Container>
    );
  }
}
