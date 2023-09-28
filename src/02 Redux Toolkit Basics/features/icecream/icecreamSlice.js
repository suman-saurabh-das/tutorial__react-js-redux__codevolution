// [21] Added icecream feature to app
// [23] Extra reducer

const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
  numOfIceCreams: 20
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    }
  },
  /* Approach 1 - Adding extra reducer as an object */
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIceCreams--
  //   }
  // }
  /* Approach 2 - Adding extra reducer as a function */
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--
    })
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;