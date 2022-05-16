/* eslint-disable import/no-mutable-exports */
/* eslint-disable global-require */
import {combineReducers} from "redux";
import GetStepsReducer from "./get-steps-reducer";

let persistConfig: {storage: any; key: string; whitelist: string[]};
let persistedReducers;

const isClient = typeof window !== "undefined";

if (isClient) {
  const {persistCombineReducers} = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  persistConfig = {
    storage,
    key: "persisted_reducers",
    whitelist: ["GetStepsReducer"],
  };

  persistedReducers = () =>
    persistCombineReducers(persistConfig, {
      GetStepsReducer,
    });
} else {
  persistedReducers = () =>
    combineReducers({
      GetStepsReducer,
    });
}

export default persistedReducers;
