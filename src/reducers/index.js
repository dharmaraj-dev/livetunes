import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import common from "./common";
import artist from "./artist";
import judge from "./judge";

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
    artist,
    judge
});

export default (state, action) =>
  rootReducer(action.type === 'STATE_RESET' || action.type === 'LOGOUT' ? undefined : state, action);
