import * as actionTypes from "./actionTypes";

/**
 * Returns the new state. Reducer is pure.
 * Assumes store = {bugs:[]}
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.bugAdded:
      return [
        ...state,
        { resolved: false, description: action.payload.description },
      ];
      break;

    default:
      // return the same state
      return state;
  }
}
