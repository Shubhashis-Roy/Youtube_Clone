import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    commentSection: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
    addComment: (state, action) => {
      state.commentSection.push(action.payload);
    },
  },
});

export const { addMessage, addComment } = chatSlice.actions;

export default chatSlice.reducer;
