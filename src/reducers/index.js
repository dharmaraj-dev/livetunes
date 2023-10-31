import { combineReducers } from "redux";
import common from "./common";
import artist from "./artist";
import judge from "./judge";
import judgeApplications from "../redux/judgeApplicationsSlice";
import artistDetails from "../redux/artistDetailsSlice";
import userSettings from "../redux/userSettings";
import userHome from "../redux/userHomeSlice";
import artistSlots from "../redux/artistSlotsSlice";
import userBooking from "../redux/userBookingSlice";
import userBookings from "../redux/userBookingsSlice";
import userProfile from "../redux/userProfileSlice";
import userAuth from "../redux/userAuth";
import user from "../redux/userSlice";

const rootReducer = combineReducers({
    common,
    artist,
    judge,
    judgeApplications,
    artistDetails,
    userSettings,
    userHome,
    artistSlots,
    userBooking,
    userBookings,
    userProfile,
    userAuth,
    user
});

export default (state, action) =>
  rootReducer(action.type === 'STATE_RESET' || action.type === 'LOGOUT' ? undefined : state, action);
