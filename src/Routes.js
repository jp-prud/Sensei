import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Categories from './pages/Categories';
import Extensions from './pages/Extensions';
import Users from './pages/Users';
import MyAccount from './pages/MyAccount';
import NewAdmin from './pages/MyAccount/NewUser';
import EditAdmin from './pages/MyAccount/EditUser';
import NotFound from './pages/NotFound';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      height: '100%', width: '100%', opacity: 0, transform: 'translateY(50px)', position: 'absolute', padding: '20px',
    },
    enter: {
      height: '100%', width: '100%', opacity: 1, transform: 'translateY(0)', position: 'absolute', padding: '20px',
    },
    leave: {
      height: '100%', width: '100%', opacity: 0, transform: 'translateY(50px)', position: 'absolute', padding: '20px',
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/categories" component={Categories} />
        <Route path="/extensions" component={Extensions} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/new-user" exact component={NewAdmin} />
        <Route path="/users/edit-user/:id" component={EditAdmin} />
        <Route path="/my-account" exact component={MyAccount} />
        <Route path="/my-account/new-user" exact component={MyAccount} />
        <Route path="/my-account/edit-user/:id" exact component={MyAccount} />

        <Route path="*" component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
