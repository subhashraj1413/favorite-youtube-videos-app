import { all, fork } from "redux-saga/effects";
import {watchFavoriteListSaga} from "./favoriteListSaga";

export default function* rootSaga() {
  yield all([fork(watchFavoriteListSaga)]);
}
