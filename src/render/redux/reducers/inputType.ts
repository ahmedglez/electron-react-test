import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = "Linear";

export const setInputType = createAction<"Linear" | "Variable">("inputType/set");

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setInputType, (state, action) => {
    return action.payload;
  });
});

export default reducer;