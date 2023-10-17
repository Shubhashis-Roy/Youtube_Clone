import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchResultSlice from "./searchResultSlice";
import watchLetterSlice from "./watchLetterSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    searchResults: searchResultSlice,
    watchLetter: watchLetterSlice,
  },
});

export default store;
