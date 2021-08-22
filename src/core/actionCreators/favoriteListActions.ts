/**
 * Actions Types
 */
export const ADD_FAVORITE_LIST = "ADD_FAVORITE_LIST";

export const GET_FAVORITE_LIST_REQUEST = "GET_RESTAURANT_INFO_REQUEST";
export const GET_FAVORITE_LIST_SUCCESS = "GET_FAVORITE_LIST_SUCCESS";
export const GET_FAVORITE_LIST_FAILURE = "GET_FAVORITE_LIST_FAILURE";
export const SET_LAST_VIDEO_TIME = "SET_LAST_VIDEO_TIME";
export const DELETE_FAVORITE_LIST_ITEM = "DELETE_FAVORITE_LIST_ITEM"

// export const addFavoriteList = (payload: any) => ({
//   type: ADD_FAVORITE_LIST,
//   payload,
// });
export const fetchFavoriteList = (payload: any) => ({
  type: GET_FAVORITE_LIST_REQUEST,
  payload,
});

export const setLastVideoTime = (payload: any) => ({
  type: SET_LAST_VIDEO_TIME,
  payload,
});

export const fetchFavoriteListSuccess = (payload: any) => ({
  type: GET_FAVORITE_LIST_SUCCESS,
  payload,
});

export const fetchFavoriteListFailure = (payload: any) => ({
  type: GET_FAVORITE_LIST_FAILURE,
  payload,
});

export const deleteFavoriteListItem = (payload: any) => ({
  type: DELETE_FAVORITE_LIST_ITEM,
  payload,
});
