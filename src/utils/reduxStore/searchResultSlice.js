import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: [],
    buttonResults: [],
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.results = action.payload;
    },
    addButtonResults: (state, action) => {
      state.buttonResults = action.payload;
    },
  },
});

export const { addSearchResults, addButtonResults } = searchResultSlice.actions;

export default searchResultSlice.reducer;
