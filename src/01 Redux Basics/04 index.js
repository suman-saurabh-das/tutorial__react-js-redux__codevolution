// [04] BASIC REDUX APP

const CAKE_ORDERED = 'CAKE_ORDERED'

// action creators
const orderCakes = (value = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: value,
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
    default: return state
  }
}

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
*/
