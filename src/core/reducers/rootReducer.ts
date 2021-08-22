import { combineReducers } from "redux";
import favoriteListReducer from "./favoriteListReducer";


const rootReducer = combineReducers({
  root: favoriteListReducer,
  
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
