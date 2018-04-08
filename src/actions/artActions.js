import * as types from '../constants/actionTypes';
import artApi from '../api/mockArtApi';

export function loadFriendsUpdatesSuccess(updates) {
  return {type: types.LOAD_FRIENDS_UPDATES_SUCCESS, updates};
}

export function loadFriendsUpdates() {
  return function(dispatch) {
    return artApi.getFriendsUpdates().then(arts => {
      dispatch(loadFriendsUpdatesSuccess(arts));
    }).catch(err => {throw(err);});
  };
}
