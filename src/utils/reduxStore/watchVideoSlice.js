import { createSlice } from "@reduxjs/toolkit";

const watchLetterSlice = createSlice({
  name: "watchedVideo",
  initialState: {
    item: [],
    watchLetterVideos: [],
    likedVideos: [],
    disLikedVideos: [],
    watchHistory: [],
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
      state.watchLetterVideos.unshift(action.payload);
    },
    removeWatchLetter: (state, action) => {
      let index = state.watchLetterVideos.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.watchLetterVideos.splice(index, 1);
      }
    },
    addLikedVideo: (state, action) => {
      state.likedVideos.unshift(action.payload);
    },
    removeLikedVideo: (state, action) => {
      let index = state.likedVideos.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.likedVideos.splice(index, 1);
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
      state.watchHistory.push(action.payload);
    },
    clearHistory: (state) => {
      state.watchHistory = [];
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
