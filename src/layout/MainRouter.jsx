import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/Home/Home';
import Room from '../pages/Room/Room';

const history = createBrowserHistory();

const MainRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/room/:room" component={Room} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default MainRouter;
