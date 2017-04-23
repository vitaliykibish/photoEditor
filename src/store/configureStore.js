import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = () => {
  const middlewares = [thunk];

  const enhancer = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(rootReducer, {}, enhancer);
};

export default configureStore;
