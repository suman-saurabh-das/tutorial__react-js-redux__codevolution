// [04] - [08] BASIC REDUX APP

const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

// action creators
const orderCakes = (value = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: value,
  }
}
const restockCakes = (value = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: value
  }
}

// initialState
const initialState = {
  numOfCakes: 10,
  sizeOfCake: 'large',
}

// reducer function -> (prevState, action) => newState
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
    default: return state
  }
}

// create store
const store = createStore(reducer)
console.log('Initial state : ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state : ', store.getState());
})

// dispatching actions
store.dispatch(orderCakes())
store.dispatch(orderCakes())
store.dispatch(orderCakes())
store.dispatch(restockCakes(3))

unsubscribe()

// store.dispatch(orderCake)    // we get an error if we use dispatch after unsubscribing from store

/*
  Action
    Define a string constant that indicates the type of action.
    Define the action (an object having a type property, we can have additional properties)
    Define a actionCreator() - it is a function that returns the action (object).

  Reducer
    (previousState, action) => newState
    A function which takes the state and action as parameters and returns the newState.
    We use a switch statement and based on the action type, we modify the object.
    (Make sure to use the spread operator to make a copy of the object before modifying it)

  Store
    Import redux using require("redux")
    Create a store using redux.createStore(reducer) passing in the reducer function
    The store will get the initial state from the reducer function.
    
    Register a listener via store.subscribe(listener)
    listener is function that gets called anytime the state or store changes.
    Unregister a listener via calling the return function from subscribe(listener)

    To get the state, use store.getState()
    To modify a state, use store.dispatch(action) passing in the action
*/
