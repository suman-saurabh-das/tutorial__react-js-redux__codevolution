// [11] SINGLE REDUCER

const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

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
const orderIcecream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty
  }
};
const restockIcecream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  }
};

// Initial State
const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }
    case CAKE_RESTOCKED: return {
      ...state,
      numOfCakes: state.numOfCakes + action.payload
    }
    case ICECREAM_ORDERED: return {
      ...state,
      numOfIcecreams: state.numOfIcecreams - action.payload
    }
    case ICECREAM_RESTOCKED: return {
      ...state,
      numOfIcecreams: state.numOfIcecreams + action.payload
    }
    default: return state
  }
};

// Store
const store = createStore(reducer)
console.log('Initial state : ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state : ', store.getState());
})

const actions = bindActionCreators(
  {orderCake, restockCake, orderIcecream, restockIcecream},
  store.dispatch
)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIcecream(4)
actions.restockIcecream(4)

unsubscribe()

// Single reducer function which is responsible for updating the cake and icecream state.