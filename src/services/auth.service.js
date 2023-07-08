import axios from "axios";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const register = (MobileNo, EmailId) => {
  return axios.post(API_URL + "LogMethods/SignUpAuth", {
    MobileNo,
    EmailId,
    "IsSignFacebook": false,
    "IsSignGmail": false,
    "IsArtist": true,
    "IsUser":false,
    "IsJudge":false,
    "IsAdmin":false
  }).then((response) => {
      return response.data;
    });
};

const login = (MobileNo) => {
  // let data = {
  //     "IsSuccess": true,
  //     "OTP": "06999",
  //     "Message": "",
  //     "AuthToken": "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMGZiMDdiZS00Njc4LTQ3Y2MtYmIwMi1jODBiODYyYjcyYWIiLCJtdXNlcl9pZCI6IjE0Iiwicm93Y29kZSI6IjYxOTY3NTMwLWUyZGMtNDc3OS1hNDNhLTE0NWFlZjA5YTk0YiIsImV4cCI6MTcyMDE3NjM2NiwiaXNzIjoiZmxhc2hfcmV0YWlsIiwiYXVkIjoiZmxhc2hfcmV0YWlsIn0.Sj5gm0YwzelyJjnQJWtpv1kIdrbJP1lhAQDoK1789VU"
  // };
  // return new Promise((resolve, reject) => {
  //      resolve(data)
  //   })

  return axios
    .post(API_URL + "LogMethods/LoginAuth", {
      MobileNo
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

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("joiningFor");
};

const welcomeSeen = (data) => {
  localStorage.setItem("welcomeSeen", data);
};

const joiningType = (data) => {
  localStorage.setItem("joiningFor", data);
};



export default {
  register,
  login,
  logout,
  resendOtp,
  validateOtp,
  welcomeSeen,
  joiningType
};
