import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded } from "./actions";
console.log(store);

// subscribe to the store
const unsubscribe = store.subscribe(() => {
  console.log("Subscription code", store.getState());
});

// dispatch an action
// hard way
store.dispatch({
  type: actions.bugAdded,
  payload: { description: "first bug" },
});
//optimized
store.dispatch(bugAdded("first bug"));
// get store state
console.log(store.getState());

// unsubscribe from the store
unsubscribe();
