import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const setJoiningType = (message) => ({
  type: SET_JOINING_TYPE,
  payload: message,
});

export const welcomeSeen = (message) => ({
  type: WELCOME_SEEN,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
