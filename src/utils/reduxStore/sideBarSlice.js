import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    onClickedSubscribe: false,
  },
  reducers: {
    addSubscibeEvent: (state) => {
      state.onClickedSubscribe = true;
    },
  },
});

export const { addSubscibeEvent } = sideBarSlice.actions;
export default sideBarSlice.reducer;
