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
    "IsAdmin":false,
    IsDummy:true
  }).then((response) => {
      return response.data;
    });
};

const login = (MobileNo) => {
  return axios
    .post(API_URL + "LogMethods/LoginAuth", {
      MobileNo
      // ,
      // IsDummy:true
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
  resendOtp,
  validateOtp,
  welcomeSeen,
  joiningType,
  logout
};
