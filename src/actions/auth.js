import AuthService from "../services/auth.service";
import CommonService from "../services/common.service";
import authToken from "../services/auth-header";
import {setSavedUsersSetting} from '../redux/userSettings';
import { setWelcomeSeen, setArtistRejected, setArtistIsNotSubmitted, setArtistIsPending, setArtistIsApproved, setArtistId, setIsArtistProfileSend, setJoiningType, setOtpSentTo, setIsLoggedIn, setOtpSent, setLogout } from '../redux/userAuth';

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
          dispatch(setOtpSent(true));
          dispatch(setOtpSentTo(phone));
          dispatch(setArtistId(response.RegId));
          dispatch(setArtistIsApproved(response.is_approved));
          dispatch(setArtistRejected(response.is_rejection));
          dispatch(setArtistIsPending(response.is_pending));
          dispatch(setArtistIsNotSubmitted(response.is_not_submitted));
          dispatch(setIsArtistProfileSend(response.IsProfileSend));
        }
        else {
          dispatch(setOtpSent(false));
          dispatch(setOtpSentTo(phone));
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
        dispatch(setOtpSent(true));
        dispatch(setOtpSentTo(phone));
        dispatch(setArtistId(data.RegId));
        dispatch(setArtistIsApproved(data.is_approved));
        dispatch(setArtistRejected(data.is_rejection));
        dispatch(setArtistIsPending(data.is_pending));
        dispatch(setArtistIsNotSubmitted(data.is_not_submitted));
        dispatch(setIsArtistProfileSend(data.IsProfileSend));
      }
      else {
        dispatch(setOtpSent(false));
        dispatch(setOtpSentTo(phone));
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
        dispatch(setOtpSent(true));
        dispatch(setOtpSentTo(phone));
        dispatch(setArtistId(data.RegId));
        dispatch(setArtistIsApproved(data.is_approved));
        dispatch(setArtistRejected(data.is_rejection));
        dispatch(setArtistIsPending(data.is_pending));
        dispatch(setArtistIsNotSubmitted(data.is_not_submitted));
        dispatch(setIsArtistProfileSend(data.IsProfileSend));
      }
      else {
        dispatch(setOtpSent(false));
        dispatch(setOtpSentTo(phone));
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
        dispatch(setOtpSent(true));
        dispatch(setOtpSentTo(phone));
      }
      else {
        dispatch(setOtpSent(false));
        dispatch(setOtpSentTo(phone));
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
        dispatch(setSavedUsersSetting(data.selUSett));
        dispatch(setIsLoggedIn(userData));
        dispatch(setIsArtistProfileSend(userData.IsProfileSend));
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
          dispatch(setLogout());
          
          
        return Promise.resolve(response);
      },
      (error) => {
        localStorage.clear();
        localStorage.setItem("welcomeSeen", true);
        dispatch(setLogout());
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
    localStorage.clear();
    localStorage.setItem("welcomeSeen", true);
    dispatch(setLogout());
    return {};
  }
};

export const welcomeSeen = (data) => (dispatch) => {
  AuthService.welcomeSeen(data);
  dispatch(setWelcomeSeen(data))
};
