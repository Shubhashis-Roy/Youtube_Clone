import { createSlice } from "@reduxjs/toolkit";

const watchLetterSlice = createSlice({
  name: "watchLetter",
  initialState: {
    item: [],
    watchLetterItem: [],
    LinkedVideoes: [],
    WatchHistory: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (state.item.length >= 1) {
        state.item.length = [];
        state.item = action.payload;
      } else {
        state.item = action.payload;
      }
    },
    addWatchLetter: (state, action) => {
      state.watchLetterItem.push(action.payload);
    },
    addLikedVideo: (state, action) => {
      state.LinkedVideoes.push(action.payload);
    },
    addWatchHistory: (state, action) => {
      state.WatchHistory.push(action.payload);
    },
  },
});

export const { addItem, addWatchLetter, addLikedVideo, addWatchHistory } =
  watchLetterSlice.actions;

export default watchLetterSlice.reducer;