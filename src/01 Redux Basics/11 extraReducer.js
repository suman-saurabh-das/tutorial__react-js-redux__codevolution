// [23] EXTRA REDUCERS

const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// Action creators
const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty
  }
};
const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty
  }
};
const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty
  }
};
const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  }
};

// Initial States
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }
    case CAKE_RESTOCKED: return {
      ...state,
      numOfCakes: state.numOfCakes + action.payload
    }
    default: return state
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - action.payload
    }
    case ICECREAM_RESTOCKED: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams + action.payload
    }
    case CAKE_ORDERED: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
};

// Combining reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

// Store
const store = createStore(rootReducer)
console.log('Initial state : ', store.getState());

// Adding Listener
const unsubscribe = store.subscribe(() => {
  console.log('Updated state : ', store.getState());
})

// Binding action creator
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
)

// Dispatching actions
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream(4)
actions.restockIceCream(4)

unsubscribe()

/*
    Each reducer can update only its portion of the application state.
    However, it can respond to any action dispatched in the application.
    Here, icecream reducer can only update the icecream state (numOfIcecreams) but it can still respond to the CAKE_ORDERED action type.

    NOTE - This doesn't happen with redux toolkit
*/
