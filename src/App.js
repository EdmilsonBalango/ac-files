import React from 'react';
import {GlobalStyles} from './global/styles'
import Board from './components/board';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './global/styles'
import Login from './components/login';
import { isAuthenticated } from './configs/auth';


function App() {
console.log(isAuthenticated())
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Login} />
          {isAuthenticated() ? <Route path={'/cloud'} component={Board} /> : <Redirect to={{pathname: '/'}}/>}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
