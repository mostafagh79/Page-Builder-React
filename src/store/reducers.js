import { combineReducers } from "@reduxjs/toolkit";
import settingsReducer from "./settingSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
