import {
  LOGOUT,
  WELCOME_SEEN,
  SET_JOINING_TYPE,
  OTP_SENT,
  OTP_SENT_TO,
  OTP_VERIFIED,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const welcomeSeen = localStorage.getItem("welcomeSeen");
const joiningType = localStorage.getItem("joiningFor");
const otpSentCount = localStorage.getItem("otpSendCount");
const initialState = user
  ? { isLoggedIn: true, user, welcomeSeen, joiningType, otpSentCount }
  : { isLoggedIn: false, user: null, welcomeSeen, joiningType, otpSentCount };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WELCOME_SEEN:
      return {
        ...state,
        welcomeSeen: payload
      };
    case SET_JOINING_TYPE:
      return {
        ...state,
         joiningType: payload,
      };
    case OTP_SENT:
      return {
        ...state,
         otpSent: payload,
      };
    case OTP_SENT_TO:
      return {
        ...state,
         otpSentTo: payload,
      };
    case OTP_VERIFIED:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
