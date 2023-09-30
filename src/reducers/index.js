import { combineReducers } from "redux";
import auth from "./auth";
import common from "./common";
import artist from "./artist";
import judge from "./judge";
import judgeApplications from "../redux/judgeApplicationsSlice";
import artistDetails from "../redux/artistDetailsSlice";
import userSettings from "../redux/userSettings";
import user from './user';
import userHome from "../redux/userHomeSlice";
import artistSlots from "../redux/artistSlotsSlice";
import userBooking from "../redux/userBookingSlice";

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
    artistDetails,
    userSettings,
    userHome,
    artistSlots,
    userBooking
});

export default (state, action) =>
  rootReducer(action.type === 'STATE_RESET' || action.type === 'LOGOUT' ? undefined : state, action);
