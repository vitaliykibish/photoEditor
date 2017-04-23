import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import thumbs from 'store/thumbs/reducer';

export default combineReducers({
  thumbs,
  routing,
});
