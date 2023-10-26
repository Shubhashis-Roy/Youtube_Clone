import { createSlice } from "@reduxjs/toolkit";

const watchLetterSlice = createSlice({
  name: "watchLetter",
  initialState: {
    item: [],
    watchLetterItem: [],
    LikedVideos: [],
    disLikedVideos: [],
    WatchHistory: [],
    subscribe: [],
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
      state.watchLetterItem.unshift(action.payload);
    },
    removeWatchLetter: (state, action) => {
      let index = state.watchLetterItem.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.watchLetterItem.splice(index, 1);
      }
    },
    addLikedVideo: (state, action) => {
      state.LikedVideos.unshift(action.payload);
    },
    removeLikedVideo: (state, action) => {
      let index = state.LikedVideos.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.LikedVideos.splice(index, 1);
      }
    },
    addDisLikedVideo: (state, action) => {
      state.disLikedVideos.push(action.payload);
    },
    removeDisLikedVideo: (state, action) => {
      let index = state.disLikedVideos.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.disLikedVideos.splice(index, 1);
      }
    },
    addWatchHistory: (state, action) => {
      state.WatchHistory.push(action.payload);
    },
    clearHistory: (state) => {
      state.WatchHistory = [];
    },
    addSubscribe: (state, action) => {
      state.subscribe.unshift(action.payload);
    },
    removeSubscribe: (state, action) => {
      let index = state.subscribe.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.subscribe.splice(index, 1);
      }
    },
  },
});

export const {
  addItem,
  addWatchLetter,
  removeWatchLetter,
  addLikedVideo,
  removeLikedVideo,
  addDisLikedVideo,
  removeDisLikedVideo,
  addWatchHistory,
  clearHistory,
  addSubscribe,
  removeSubscribe,
} = watchLetterSlice.actions;

export default watchLetterSlice.reducer;
