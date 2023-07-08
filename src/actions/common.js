import {
  GET_CITIES,
  GET_STATES,
  GET_CATEGORIES,
  GET_GERNES,
  GET_LANGUAGES,
  GET_EVENTS,
  GET_EVENT_MODES
} from "./types";

import CommonService from "../services/common.service";

export const getCities = () => (dispatch) => {
  return CommonService.getCities().then(
    (response) => {
      console.log('response', response);
       // dispatch({
       //    type: OTP_SENT_TO,
       //    payload: phone,
       //  });
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
