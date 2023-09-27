// [21] Added icecream feature to app

const createSlice = require('@reduxjs/toolkit').createSlice;

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
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;