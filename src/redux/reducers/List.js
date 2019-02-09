import createReducer from "../helpers/createReducer";
import * as types from "../actions/types";

import user from "../../data/user.json";

const list = (state = user, action) => {
  switch (action.type) {
    case types.ADD_TO_LIST:
      return [action.item, ...state];

    case types.EDIT_LIST:
      return action.item;

    case types.CHANGE_STATUS:
      return action.item;
  }
  return state;
};

export { list };
