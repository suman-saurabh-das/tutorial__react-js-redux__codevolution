// [04] BASIC REDUX APP

const CAKE_ORDERED = 'CAKE_ORDERED'

// action creators
const orderCakes = (value = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: value,
  }
}

/*
    Action
        Define a string constant that indicates the type of action.
        Define the action (an object having a type property, we can have additional properties)
        Define a actionCreator() - it is a function that returns the action (object).
*/
