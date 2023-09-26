// [13] USING IMMER LIBRARY TO UPDATE STATE AS MUTABLE VALUES

const redux = require('redux')
const produce = require('immer').produce

// Initial state
const initialState = {
  name: 'John',
  address: {
    city: 'Boston',
    street: '123 Main St.',
    state: 'MA',
  }
}

// Action creator
const STREET_UPDATED = 'STREET_UPDATED';
const updateStreet = (val) => {
  return {
    type: STREET_UPDATED,
    payload: val,
  }
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case STREET_UPDATED: return {
    //   ...state,
    //   address: {
    //     ...state.address,
    //     street: action.payload
    //   }
    // }
    case STREET_UPDATED: return produce(state, (draft) => {
      draft.address.street = action.payload;
    })
    default: return state;
  }
}

// Store
const store = redux.createStore(reducer)
console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state ', store.getState());
})
store.dispatch(updateStreet('456 Main St.'));

unsubscribe();

/*
    When our state has nested state objects, then it becomes difficult to keep track of the nested state to ensure that we are only modifying the required property.

    To help ease this state updation process, we can make use of a library caller immer
    npm install immer
    import a method produce() from the immer library
    Now instead of returning the new state based on the action specified in the reducer function body, we can return the produce() from immer library
    produce() accepts 2 arguments
        1st - state
        2nd - function which receives a draft copy of the state
    immer allows us to update the draft state as if the state is mutable.
*/
