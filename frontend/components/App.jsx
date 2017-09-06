import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Blog from './blog/blog'

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Blog} />
    </Switch>
  </div>
);

export default App;
