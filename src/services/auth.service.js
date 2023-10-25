import axios from "axios";
import {useSelector } from "react-redux";


const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const register = (MobileNo, EmailId,joiningType) => {
  return axios.post(API_URL + "LogMethods/SignUpAuth", {
    MobileNo,
    EmailId,
    "IsSignFacebook": false,
    "IsSignGmail": false,
    "IsArtist": joiningType === 'Artist' ? true : false,
    "IsUser":joiningType === 'User' ? true : false,
    "IsJudge":false,
    "IsAdmin":false
  }).then((response) => {
      return response.data;
    });
};

const login = (MobileNo) => {
  return axios
    .post(API_URL + "LogMethods/LoginAuth", {
      MobileNo
    })
    .then((response) => {
      return response.data;
    });
};

const dummyLogin = (MobileNo) => {
  return axios
    .post(API_URL + "LogMethods/LoginAuth", {
      MobileNo,
      IsDummy:true
    })
    .then((response) => {
      return response.data;
    });
};

const resendOtp = (MobileNo) => {
  return axios
    .get(API_URL + "LogMethods/ResendOTP/"+MobileNo)
    .then((response) => {
      return response.data;
    });
};

const validateOtp = (MobileNo, Otp) => {
  return axios
    .get(API_URL + "LogMethods/VerifyOTP/"+Otp+"/"+MobileNo)
    .then((response) => {
      return response.data;
    });
};

const welcomeSeen = (data) => {
  localStorage.setItem("welcomeSeen", data);
};

const joiningType = (data) => {
  localStorage.setItem("joiningFor", data);
};

const logout = (authToken) => {
  return axios
    .post(API_URL + "LogMethods/Logout", {}, { headers: {"Authorization":authToken} })
    .then((response) => {
      return response.data;
    });  
};



export default {
  register,
  login,
  dummyLogin,
  resendOtp,
  validateOtp,
  welcomeSeen,
  joiningType,
  logout
};
