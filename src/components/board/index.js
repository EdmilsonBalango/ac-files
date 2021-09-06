import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Explore from '../../pages/explorer';
import Trash from '../../pages/trash';
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
                <Route exact path={"/cloud"} component={Upload }/>
                <Route path={'/cloud/explore/:ids'} component={Explore} />
                <Route path={'/cloud/lixo'} component={Trash} />
              </Switch>
            </main>
          {/* </Router> */}
        </Container>
    );
  }
}
