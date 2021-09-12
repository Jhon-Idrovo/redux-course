import { createStore } from "redux";
import reducer from "./reducer";

/**
 * Only one reducer as entry point for all actions
 */
const store = createStore(reducer);

export default store;
