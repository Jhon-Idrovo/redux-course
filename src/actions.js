import * as actions from "./actionTypes";
export function bugAdded(description) {
  return {
    type: actions.bugAdded,
    payload: { description },
  };
}
