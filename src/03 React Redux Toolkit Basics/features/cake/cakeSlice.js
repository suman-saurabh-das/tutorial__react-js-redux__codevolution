import { createSlice } from '@reduxjs/toolkit';

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
    }
  }
});

export default cakeSlice.reducer
export { ordered, restocked } from cakeSlice.actions