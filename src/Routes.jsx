import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Written from './pages/Written';
import Home from './pages/Home';

const RoutesConfig = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/written" component={Written} />
      </Switch>
    </HashRouter>
  );
};

export default RoutesConfig;
