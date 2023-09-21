import { combineReducers } from "redux";
import auth from "./auth";
import common from "./common";
import artist from "./artist";
import judge from "./judge";
import judgeApplications from "../redux/judgeApplicationsSlice";
import user from './user';
import userHome from "../redux/userHomeSlice";

// export default combineReducers({
//   auth,
//   message,
//   common,
//   artist
// });

const rootReducer = combineReducers({
    auth,
    common,
    artist,
    judge,
    user,
    judgeApplications,
    userHome
});

export default (state, action) =>
  rootReducer(action.type === 'STATE_RESET' || action.type === 'LOGOUT' ? undefined : state, action);
