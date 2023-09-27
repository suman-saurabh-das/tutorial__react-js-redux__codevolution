// [20] Configuring the store and dispatching actions

const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state ', store.getState());
})

store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.restocked(3));

unsubscribe();