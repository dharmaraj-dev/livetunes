import { combineReducers } from "redux";
import common from "./common";
import judge from "./judge";
import judgeApplications from "../redux/judgeApplicationsSlice";
import userSettings from "../redux/userSettings";
import userHome from "../redux/userHomeSlice";
import userBooking from "../redux/userBookingSlice";
import userBookings from "../redux/userBookingsSlice";
import userProfile from "../redux/userProfileSlice";
import userAuth from "../redux/userAuth";
import user from "../redux/userSlice";
import artist from "../redux/artistSlice";
import commonStates from "../redux/commonSlice";

const rootReducer = combineReducers({
    common,
    artist,
    judge,
    judgeApplications,
    userSettings,
    userHome,
    userBooking,
    userBookings,
    userProfile,
    userAuth,
    user,
    commonStates
});

export default (state, action) =>
  rootReducer(action.type === 'STATE_RESET' || action.type === 'LOGOUT' ? undefined : state, action);
