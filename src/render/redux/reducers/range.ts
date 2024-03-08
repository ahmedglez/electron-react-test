import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  min: 0,
  max: 1,
};

export const setRange = createAction("range/set");

export const setMin = createAction<number>("range/setMin");

export const setMax = createAction<number>("range/setMax");

const rangeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRange, (state, action) => {
    return action.payload;
  });
  builder.addCase(setMin, (state, action) => {
    state.min = action.payload;
  });
  builder.addCase(setMax, (state, action) => {
    state.max = action.payload;
  });
});

export default rangeReducer;
