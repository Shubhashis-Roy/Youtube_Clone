import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: [],
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { addSearchResults } = searchResultSlice.actions;

export default searchResultSlice.reducer;
