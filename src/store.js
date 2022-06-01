import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer.js";



export const Store=createStore(rootReducer)