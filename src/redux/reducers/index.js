import { combineReducers } from "redux";
import * as Navigation from "./navigation";
import * as List from "./List";

export default combineReducers(Object.assign(Navigation, List));
