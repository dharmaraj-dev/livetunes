import {
  GET_CITIES,
  GET_STATES,
  GET_CITIES_OF_STATES,
  GET_CATEGORIES,
  GET_GERNES,
  GET_LANGUAGES,
  GET_EVENTS,
  GET_EVENT_MODES,
  GET_BANKS,
  GET_BRANCHES,
  GET_ID_PROOFS,
  GET_ADDRESS_PROOFS
} from "./types";

import CommonService from "../services/common.service";

export const getCities = () => (dispatch) => {
  return CommonService.getCities().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('cities', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_CITIES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_CITIES,
          payload: [],
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


export const getStates = () => (dispatch) => {
  return CommonService.getStates().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('states', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_STATES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_STATES,
          payload: [],
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

export const getCitiesOfState = (stateId) => (dispatch) => {
  return CommonService.getCitiesOfState(stateId).then(
    (response) => {
      if(response.data.IsSuccess) {
        dispatch({
          type: GET_CITIES_OF_STATES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_CITIES_OF_STATES,
          payload: [],
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

export const getCategories = () => (dispatch) => {
  return CommonService.getCategories().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('categories', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_CATEGORIES,
          payload: [],
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

export const getGernes = () => (dispatch) => {
  return CommonService.getGernes().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('gernes', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_GERNES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_GERNES,
          payload: [],
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

export const getLanguages = () => (dispatch) => {
  return CommonService.getLanguages().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('languages', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_LANGUAGES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_LANGUAGES,
          payload: [],
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

export const getEvents = () => (dispatch) => {
  return CommonService.getEvents().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('events', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_EVENTS,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_EVENTS,
          payload: [],
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

export const getEventModes = () => (dispatch) => {
  return CommonService.getEventModes().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('eventModes', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_EVENT_MODES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_EVENT_MODES,
          payload: [],
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

export const getBanks = () => (dispatch) => {
  return CommonService.getBanks().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('banks', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_BANKS,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_BANKS,
          payload: [],
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

export const getBranchesByBank = (BankId) => (dispatch) => {
  return CommonService.getBranchesByBank(BankId).then(
    (response) => {
      console.log('response', response);
      if(response.data.IsSuccess) {
        dispatch({
          type: GET_BRANCHES,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_BRANCHES,
          payload: [],
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

export const getIDProofs = () => (dispatch) => {
  return CommonService.getIDProofs().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('idProofs', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_ID_PROOFS,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_ID_PROOFS,
          payload: [],
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

export const getAddressProofs = () => (dispatch) => {
  return CommonService.getAddressProofs().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('addressProofs', JSON.stringify(response.data.output_data));
        dispatch({
          type: GET_ADDRESS_PROOFS,
          payload: response.data.output_data,
        });
      }
      else {
        dispatch({
          type: GET_ADDRESS_PROOFS,
          payload: [],
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

export const getAllMasters = () => (dispatch) => {
  return CommonService.getAllMasters().then(
    (response) => {
      if(response.data.IsSuccess) {
        localStorage.setItem('banks', JSON.stringify(response.data.BankList));
        localStorage.setItem('categories', JSON.stringify(response.data.CatList));
        localStorage.setItem('events', JSON.stringify(response.data.EventList));
        localStorage.setItem('eventModes', JSON.stringify(response.data.EvntModeList));
        localStorage.setItem('gernes', JSON.stringify(response.data.GenList));
        localStorage.setItem('languages', JSON.stringify(response.data.LangList));
        localStorage.setItem('states', JSON.stringify(response.data.StateList));
        localStorage.setItem('idProofs', JSON.stringify(response.data.IdProofList));
        localStorage.setItem('addressProofs', JSON.stringify(response.data.AddProofList));
        localStorage.setItem('cities', JSON.stringify(response.data.CityList));
        localStorage.setItem('branches',JSON.stringify(response.data.BankBranchList));
        dispatch({
          type: GET_BRANCHES,
          payload: response.data.BankBranchList,
        });
        dispatch({
          type: GET_CITIES,
          payload: response.data.CityList,
        });
        dispatch({
          type: GET_BANKS,
          payload: response.data.BankList,
        });
        dispatch({
          type: GET_EVENT_MODES,
          payload: response.data.EvntModeList,
        });
        dispatch({
          type: GET_EVENTS,
          payload: response.data.EventList,
        });
        dispatch({
          type: GET_LANGUAGES,
          payload: response.data.LangList,
        });
        dispatch({
          type: GET_GERNES,
          payload: response.data.GenList,
        });
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data.CatList,
        });
        dispatch({
          type: GET_STATES,
          payload: response.data.StateList,
        });
        dispatch({
          type: GET_ADDRESS_PROOFS,
          payload: response.data.AddProofList,
        });
        dispatch({
          type: GET_ID_PROOFS,
          payload: response.data.IdProofList,
        });
      }
      else {
        dispatch({
          type: GET_BANKS,
          payload: [],
        });
        dispatch({
          type: GET_EVENT_MODES,
          payload: [],
        });
        dispatch({
          type: GET_EVENTS,
          payload: [],
        });
        dispatch({
          type: GET_LANGUAGES,
          payload: [],
        });
        dispatch({
          type: GET_GERNES,
          payload: [],
        });
        dispatch({
          type: GET_CATEGORIES,
          payload: [],
        });
        dispatch({
          type: GET_STATES,
          payload: [],
        });
        dispatch({
          type: GET_ADDRESS_PROOFS,
          payload: [],
        });
        dispatch({
          type: GET_ID_PROOFS,
          payload: [],
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
