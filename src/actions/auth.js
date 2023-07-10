import {
  LOGOUT,
  SET_JOINING_TYPE,
  WELCOME_SEEN,
  OTP_SENT,
  OTP_SENT_TO,
  OTP_VERIFIED
} from "./types";

import AuthService from "../services/auth.service";
import CommonService from "../services/common.service";

export const register = (phone, email) => (dispatch) => {
  return AuthService.register(phone, email).then(
    (response) => {
       if(response.IsSuccess) {
          localStorage.setItem('tmpUser', btoa(JSON.stringify(response)));
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
      console.log('data', data);
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

export const resendOtp = (phone) => (dispatch) => {
  return AuthService.resendOtp(phone).then(
    (data) => {
      console.log('data', data);
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
      console.log('data', data);
      if(data.IsSuccess) {
        const userData = JSON.parse(atob(localStorage.getItem('tmpUser')));
        localStorage.removeItem('tmpUser')
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch({
          type: OTP_VERIFIED,
          payload: userData,
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
   return CommonService.logout().then(
      (response) => {
        localStorage.removeItem("user");
        localStorage.removeItem("joiningFor");
          dispatch({
            type: LOGOUT,
          });
        return Promise.resolve();
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

export const welcomeSeen = (data) => (dispatch) => {
  console.log('data', data);
  AuthService.welcomeSeen(data);

  dispatch({
    type: WELCOME_SEEN,
    payload: data,
  });
};

export const joiningType = (data) => (dispatch) => {
  console.log('data', data);
  AuthService.joiningType(data);

  dispatch({
    type: SET_JOINING_TYPE,
    payload: data,
  });
};
