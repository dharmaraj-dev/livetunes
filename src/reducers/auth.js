import {
  LOGOUT,
  WELCOME_SEEN,
  SET_JOINING_TYPE,
  OTP_SENT,
  OTP_SENT_TO,
  OTP_VERIFIED,
  IS_ARTIST_PROFILE_SEND,
  ARTIST_ID,
  ARTIST_IS_APPROVED,
  ARTIST_IS_REJECTED,
  ARTIST_IS_PENDING,
  ARTIST_IS_NOT_SUBMITTED,
  ARTIST_RESET
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const welcomeSeen = localStorage.getItem("welcomeSeen") === "true" ? true : false;
const joiningType = localStorage.getItem("joiningFor");
const otpSentCount = localStorage.getItem("otpSendCount");
const IsProfileSend = localStorage.getItem("IsProfileSend") === "true" ? true : false;
const ArtistId = localStorage.getItem("ArtistId");
const ArtistIsApproved = localStorage.getItem('is_approved') === "true" ? true : false;
const ArtistIsPending = localStorage.getItem('is_pending') === "true" ? true : false;
const ArtistIsNotSubmitted = localStorage.getItem('is_not_submitted') === "true" ? true : false;
const ArtistIsRejected = localStorage.getItem('is_rejection') === "true" ? true : false;


const initialState = user
  ? { isLoggedIn: true, user, welcomeSeen, joiningType, otpSentCount, IsProfileSend, ArtistId, ArtistIsApproved, ArtistIsPending, ArtistIsNotSubmitted, ArtistIsRejected }
  : { isLoggedIn: false, user: null, welcomeSeen, joiningType, otpSentCount, IsProfileSend, ArtistId, ArtistIsApproved, ArtistIsPending, ArtistIsNotSubmitted, ArtistIsRejected };

const logoutState = {
  isLoggedIn: false,
  welcomeSeen: true,
  joiningType
}

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
    case IS_ARTIST_PROFILE_SEND:
      return {
        ...state,
        IsProfileSend: payload,
      };
    case ARTIST_ID:
      return {
        ...state,
        ArtistId: payload
      };
    case ARTIST_IS_APPROVED:
      return {
        ...state,
        ArtistIsApproved: payload
      };
    case ARTIST_IS_REJECTED:
      return {
        ...state,
        ArtistIsRejected: payload
      };
    case ARTIST_IS_PENDING:
      return {
        ...state,
        ArtistIsPending: payload
      };
    case ARTIST_IS_NOT_SUBMITTED:
      return {
        ...state,
        ArtistIsNotSubmitted: payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    // case ARTIST_RESET:
    //   return {
    //     ...logoutState,
    //   };
    default:
      return state;
  }
}
