import React from 'react';
import { Route } from 'react-router';

import App from 'components/App';
import Admin from 'containers/Admin';
import View from 'containers/View';

export default (
  <Route path="/" component={App}>
    <Route path="admin" component={Admin} />
    <Route path="view" component={View} />
  </Route>
);
