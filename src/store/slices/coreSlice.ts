import { createSlice } from '@reduxjs/toolkit';
type CoreState = {
   isChoisedImage: boolean;
};
const initialState: CoreState = {
   isChoisedImage: false,
};

export const coreSlice = createSlice({
   name: 'coreSlice',
   initialState: initialState,
   reducers: {
      setIsChoiseImage(state) {
         state.isChoisedImage = !state.isChoisedImage;
      },
   },
});

export const { setIsChoiseImage } = coreSlice.actions;
export default coreSlice.reducer;
