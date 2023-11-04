import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchResultSlice from "./searchResultSlice";
import watchVideoSlice from "./watchVideoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    searchResults: searchResultSlice,
    watchedVideo: watchVideoSlice,
  },
});

export default store;
