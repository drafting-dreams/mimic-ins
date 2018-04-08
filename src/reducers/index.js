import { combineReducers } from 'redux';
import arts from './artReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  arts,
  routing: routerReducer
});

export default rootReducer;
