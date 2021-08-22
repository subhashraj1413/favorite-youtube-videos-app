import { takeLatest, put, call } from "redux-saga/effects";
import * as Actions from "../actionCreators/favoriteListActions";
import axios from "axios";
import { getYouTubeParserId } from "../../utils/helper";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* watchFavoriteListSaga() {
  yield takeLatest(Actions.GET_FAVORITE_LIST_REQUEST, addFavoriteList);
 
}

/**
 * @func getBankNames
 * @param action
 * @descrption
 */
export function* addFavoriteList({ payload }: any) {
  // console.log(payload)
  try {
    if (payload) {
      yield delay(3000);
     
      const videoId = getYouTubeParserId(payload.url);

      const response = yield call(getYouTubeMetadata, payload.url);

      const playListData = {
        videoId: videoId,
        videoUrl: payload.url,
        ...response,
      };
      yield put(Actions.fetchFavoriteListSuccess({ ...playListData }));
    }
  } catch (error) {
    yield put(Actions.fetchFavoriteListFailure(error));
  }
}

export const getYouTubeMetadata = async (videoUrl: string) => {
  const requestUrl: string = `http://youtube.com/oembed?url=${videoUrl}&format=json`;
  const result = await axios.get(requestUrl).then((response) => response);
  return result.data;
};


export function* deleteFavoriteListItem({ state, payload }: any) {
  console.log(state, payload)

  console.log(payload)
  try {
    if (payload) {
      
      yield put(Actions.fetchFavoriteListSuccess({}));
    }
  } catch (error) {
    yield put(Actions.fetchFavoriteListFailure(error));
  }
}