import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import common from "./common";
import artist from "./artist";

// export default combineReducers({
//   auth,
//   message,
//   common,
//   artist
// });

const rootReducer = combineReducers({
    auth,
    message,
    common,
    artist
});

export default (state, action) =>
  rootReducer(action.type === 'ARTIST_RESET' ? undefined : state, action);
