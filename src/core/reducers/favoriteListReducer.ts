import {combineReducers} from 'redux';
import getBasicReducer from '../../utils/reducer';
import * as FavoriteListActions from '../actionCreators/favoriteListActions';

const favoriteListReducer = combineReducers({
  favoriteList: getBasicReducer({
    request: FavoriteListActions.GET_FAVORITE_LIST_REQUEST,
    success: FavoriteListActions.GET_FAVORITE_LIST_SUCCESS,
    failure: FavoriteListActions.GET_FAVORITE_LIST_FAILURE,
    deleteItem: FavoriteListActions.DELETE_FAVORITE_LIST_ITEM
  }),
  videoPlaybackHistory: getBasicReducer({
    add: FavoriteListActions.SET_LAST_VIDEO_TIME,
  }),
});

export default favoriteListReducer;
