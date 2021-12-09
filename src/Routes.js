import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Categories from './pages/Categories';
import Extensions from './pages/Extensions';
import NewAdmin from './pages/NewAdmin';
import EditAdmin from './pages/EditAdmin';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Posts" component={Posts} />
      <Route path="/Categories" component={Categories} />
      <Route path="/Extensions" component={Extensions} />
      <Route path="/newAdmin" exact component={NewAdmin} />
      <Route path="/editAdmin/:id" component={EditAdmin} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
