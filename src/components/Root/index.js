import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';


import routes from '../../routes';

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
