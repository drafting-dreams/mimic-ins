import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function artReducer(state=initialState.arts, action) {
  switch(action.type) {
    case types.LOAD_FRIENDS_UPDATES_SUCCESS:
    //{console.log (action.updates) ;return action.updates}
      return action.updates;

    default:
      return state;
  }
}
