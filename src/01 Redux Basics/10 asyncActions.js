// [15] [16] ASYNC ACTIONS USING REDUX THUNK MIDDLEWARE

const axios = require('axios')
const redux = require('redux');
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  }
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  }
};
const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  }
};

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: return {
      ...state,
      loading: true,
    }
    case FETCH_USERS_SUCCEEDED: return {
      loading: false,
      users: action.payload,
      error: ''
    }
    case FETCH_USERS_FAILED: return {
      loading: false,
      users: [],
      error: action.payload
    }
  }
};

// Async action creator - to make async API calls and dispatch the actions
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested())
    // axios.get("https://jsonplaceholder.typicode.com/usersX") // to get an error
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        // response.data contains the user data
        const users = res.data.map(user => user.name)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(err => {
        // error.message is the error message
        dispatch(fetchUsersFailed(err.message))
      })
  }
}

const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
})

// Making an async call to fetch the user data from API
store.dispatch(fetchUsers())

/*
    Redux Thunk Middleware - It allows us to create Async action creators
    
    thunk middleware enables us to return a function from the action creator instead of an action object. This function doesn't have to be pure and is allowed to have side effects, e.g. make async API calls. And this function can also dispatch actions as it receives the dispatch method as argument.
*/
