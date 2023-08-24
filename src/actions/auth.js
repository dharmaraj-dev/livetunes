import {
  LOGOUT,
  SET_JOINING_TYPE,
  WELCOME_SEEN,
  OTP_SENT,
  OTP_SENT_TO,
  OTP_VERIFIED,
  IS_ARTIST_PROFILE_SEND,
  ARTIST_ID,
  ARTIST_IS_APPROVED,
  ARTIST_IS_REJECTED,
  ARTIST_IS_PENDING,
  ARTIST_IS_NOT_SUBMITTED,
  STATE_RESET
} from "./types";

import AuthService from "../services/auth.service";
import CommonService from "../services/common.service";
import authToken from "../services/auth-header";

export const register = (phone, email,joiningType) => (dispatch) => {
  return AuthService.register(phone, email,joiningType).then(
    (response) => {
      console.log(response)
       if(response.IsSuccess) {
          localStorage.setItem('tmpUser', btoa(JSON.stringify(response)));
          localStorage.setItem('ArtistId', response.RegId);
          localStorage.setItem('is_approved', response.is_approved);
          localStorage.setItem('is_pending', response.is_pending);
          localStorage.setItem('is_not_submitted', response.is_not_submitted);
          localStorage.setItem('is_rejection', response.is_rejection);
          localStorage.setItem('IsProfileSend', response.IsProfileSend);

          dispatch({
            type: OTP_SENT,
            payload: true,
          });
          dispatch({
            type: OTP_SENT_TO,
            payload: phone,
          });
          dispatch({
            type: ARTIST_ID,
            payload: response.RegId,
          });
          dispatch({
            type: ARTIST_IS_APPROVED,
            payload: response.is_approved,
          });
          dispatch({
            type: ARTIST_IS_REJECTED,
            payload: response.is_rejection,
          });
          dispatch({
            type: ARTIST_IS_PENDING,
            payload: response.is_pending,
          });
          dispatch({
            type: ARTIST_IS_NOT_SUBMITTED,
            payload: response.is_not_submitted,
          });
          dispatch({
            type: IS_ARTIST_PROFILE_SEND,
            payload: response.IsProfileSend,
          });
        }
        else {
          dispatch({
            type: OTP_SENT,
            payload: false,
          });
          dispatch({
            type: OTP_SENT_TO,
            payload: phone,
          });
        }

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const login = (phone) => (dispatch) => {
  return AuthService.login(phone).then(
    (data) => {
      console.log(data)
      if(data.IsSuccess) {
        
        localStorage.setItem('tmpUser', btoa(JSON.stringify(data)));
        localStorage.setItem('ArtistId', data.RegId);
        localStorage.setItem('is_approved', data.is_approved);
        localStorage.setItem('is_pending', data.is_pending);
        localStorage.setItem('is_not_submitted', data.is_not_submitted);
        localStorage.setItem('is_rejection', data.is_rejection);
        localStorage.setItem('IsProfileSend', data.IsProfileSend);

        dispatch({
          type: OTP_SENT,
          payload: true,
        });
        dispatch({
          type: OTP_SENT_TO,
          payload: phone,
        });
        dispatch({
          type: ARTIST_ID,
          payload: data.RegId,
        });
        dispatch({
          type: ARTIST_IS_APPROVED,
          payload: data.is_approved,
        });
        dispatch({
          type: ARTIST_IS_REJECTED,
          payload: data.is_rejection,
        });
        dispatch({
          type: ARTIST_IS_PENDING,
          payload: data.is_pending,
        });
        dispatch({
          type: ARTIST_IS_NOT_SUBMITTED,
          payload: data.is_not_submitted,
        });
        dispatch({
          type: IS_ARTIST_PROFILE_SEND,
          payload: data.IsProfileSend,
        });
      }
      else {
        dispatch({
          type: OTP_SENT,
          payload: false,
        });
        dispatch({
          type: OTP_SENT_TO,
          payload: phone,
        });
      }
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const dummyLogin = (phone) => (dispatch) => {
  return AuthService.dummyLogin(phone).then(
    (data) => {
      if(data.IsSuccess) {
        
        localStorage.setItem('tmpUser', btoa(JSON.stringify(data)));
        localStorage.setItem('ArtistId', data.RegId);
        localStorage.setItem('is_approved', data.is_approved);
        localStorage.setItem('is_pending', data.is_pending);
        localStorage.setItem('is_not_submitted', data.is_not_submitted);
        localStorage.setItem('is_rejection', data.is_rejection);
        localStorage.setItem('IsProfileSend', data.IsProfileSend);

        dispatch({
          type: OTP_SENT,
          payload: true,
        });
        dispatch({
          type: OTP_SENT_TO,
          payload: phone,
        });
        dispatch({
          type: ARTIST_ID,
          payload: data.RegId,
        });
        dispatch({
          type: ARTIST_IS_APPROVED,
          payload: data.is_approved,
        });
        dispatch({
          type: ARTIST_IS_REJECTED,
          payload: data.is_rejection,
        });
        dispatch({
          type: ARTIST_IS_PENDING,
          payload: data.is_pending,
        });
        dispatch({
          type: ARTIST_IS_NOT_SUBMITTED,
          payload: data.is_not_submitted,
        });
        dispatch({
          type: IS_ARTIST_PROFILE_SEND,
          payload: data.IsProfileSend,
        });
      }
      else {
        dispatch({
          type: OTP_SENT,
          payload: false,
        });
        dispatch({
          type: OTP_SENT_TO,
          payload: phone,
        });
      }
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const resendOtp = (phone) => (dispatch) => {
  return AuthService.resendOtp(phone).then(
    (data) => {
      if(data.IsSuccess) {
        localStorage.setItem('tmpUser', btoa(JSON.stringify(data)));
        dispatch({
          type: OTP_SENT,
          payload: true,
        });
        dispatch({
          type: OTP_SENT_TO,
          payload: phone,
        });
      }
      else {
        dispatch({
          type: OTP_SENT,
          payload: false,
        });
        dispatch({
          type: OTP_SENT_TO,
          payload: phone,
        });
      }
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const validateOtp = (phone, otp) => (dispatch) => {
  return AuthService.validateOtp(phone, otp).then(
    (data) => {
      if(data.IsSuccess) {
        const userData = JSON.parse(atob(localStorage.getItem('tmpUser')));
        dispatch(setJoiningType(data.ProfileType));
        
        localStorage.removeItem('tmpUser')
        localStorage.setItem('user', JSON.stringify(userData));
        
        dispatch({
          type: OTP_VERIFIED,
          payload: userData,
        });
        dispatch({
          type: IS_ARTIST_PROFILE_SEND,
          payload: userData.IsProfileSend,
        });
      }
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const logout = () => (dispatch) => {
   const user = JSON.parse(localStorage.getItem('user'));
   if (user && user.AuthToken) {
    return CommonService.logout(user.AuthToken).then(
      (response) => {
          localStorage.clear();
          localStorage.setItem("welcomeSeen", true);
          dispatch({
            type: LOGOUT,
          });
          dispatch({
            type: STATE_RESET,
            payload: true,
          });
        return Promise.resolve(response);
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return Promise.reject(error);
      }
    );
  } else {
    return {};
  }
};

export const welcomeSeen = (data) => (dispatch) => {
  AuthService.welcomeSeen(data);

  dispatch({
    type: WELCOME_SEEN,
    payload: data,
  });
};

export const setJoiningType = (data) => (dispatch) => {
  AuthService.joiningType(data);

  dispatch({
    type: SET_JOINING_TYPE,
    payload: data,
  });
};
