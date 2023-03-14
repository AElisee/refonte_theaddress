import { createSlice } from "@reduxjs/toolkit";

export const PictureSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    getPictures: (state, { payload }) => {
      state.pictures = payload;
    },
  },
});
export const { getPictures } = PictureSlice.actions;
export default PictureSlice.reducer;
