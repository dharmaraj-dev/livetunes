import { SET_MESSAGE, CLEAR_MESSAGE, SET_JOINING_TYPE, WELCOME_SEEN } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case SET_JOINING_TYPE:
      return { message: payload };

    case WELCOME_SEEN:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
