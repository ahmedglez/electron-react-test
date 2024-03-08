import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const setCounter = createAction<number>("counter/set");

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCounter, (state, action) => action.payload);
});

export default counterReducer;
