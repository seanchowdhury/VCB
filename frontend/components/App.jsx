import React from 'react'
import { Provider } from 'react-redux'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import PostsIndex from './posts/posts_index'
import PostShow from './posts/post_show'
import PostCreate from './posts/post_create'

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/posts" component={PostsIndex} />
      <AuthRoute exact path="/posts/new" component={PostCreate} />
      <AuthRoute exact path="/posts/:postId" component={PostShow} />
    </Switch>
  </div>
);

export default App;
