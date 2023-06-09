import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: false,
  },
  reducers: {
    dark: (state) => {
      state.value = true;
    },
    light: (state) => {
      state.value = false;
    },
  },
});

export const { light, dark } = themeSlice.actions;
export default themeSlice.reducer;
