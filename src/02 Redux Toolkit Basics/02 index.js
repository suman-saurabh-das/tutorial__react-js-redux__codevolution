// [20] [21] Configuring the store and dispatching actions
// [22] Logger middleware
// [23] Extra Reducer

const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions

console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state ', store.getState());
})

store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.restocked(2));

unsubscribe();