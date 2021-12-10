import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Categories from './pages/Categories';
import Extensions from './pages/Extensions';
import MyAccount from './pages/MyAccount';
import NewAdmin from './pages/MyAccount/NewUser';
import EditAdmin from './pages/MyAccount/EditUser';
import NotFound from './pages/NotFound';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0, transform: 'translateY(50px)', position: 'absolute', left: '20px', right: '20px',
    },
    enter: {
      opacity: 1, transform: 'translateY(0)', position: 'absolute', left: '20px', right: '20px',
    },
    leave: {
      opacity: 0, transform: 'translateY(50px)', position: 'absolute', left: '20px', right: '20px',
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/categories" component={Categories} />
        <Route path="/extensions" component={Extensions} />
        <Route path="/myAccount" exact component={MyAccount} />
        <Route path="/myAccount/newUser" exact component={NewAdmin} />
        <Route path="/myAccount/editUser/:id" component={EditAdmin} />
        <Route path="*" component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
