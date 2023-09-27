// [19] CakeSlice created to group reducers and actions together

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes -= action.payload
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    },
  }
});

module.exports = cakeSlice.reducer  // default export
module.exports.cakeActions = cakeSlice.actions  // named export