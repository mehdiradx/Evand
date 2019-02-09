import { ADD_TO_LIST, EDIT_LIST, CHANGE_STATUS } from "./types";

export const Add2List = item => {
  return {
    type: ADD_TO_LIST,
    item
  };
};

export const EditList = item => {
  return {
    type: EDIT_LIST,
    item
  };
};

export const ChangeStatus = item => {
  return {
    type: CHANGE_STATUS,
    item
  };
};
