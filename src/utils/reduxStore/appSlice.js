import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isManuOpen: false,
    isHomePage: false,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isManuOpen = !state.isManuOpen;
    },
    closeMenu: (state) => {
      state.isManuOpen = false;
    },
    headerButtonShow: (state) => {
      state.isHomePage = true;
    },
    headerButtonClose: (state) => {
      state.isHomePage = false;
    },
  },
});

export const { toggleMenu, closeMenu, headerButtonShow, headerButtonClose } =
  appSlice.actions;
export default appSlice.reducer;
