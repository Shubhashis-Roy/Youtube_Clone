import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isManuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isManuOpen = !state.isManuOpen;
    },
    closeMenu: (state) => {
      state.isManuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
