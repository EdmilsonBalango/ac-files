import React from 'react';
import {GlobalStyles} from './global/styles'
import Board from './components/board';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './global/styles'
import Login from './components/login';


function App() {


  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route path={'/cloud'} component={Board} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
