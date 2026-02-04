import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  message: 'Hello :)',
};

export const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    changeMessage(state, action: PayloadAction<string>) {
      state.message = 'Redux работает 🚀' + action.payload;
    },
  },
});
export const { changeMessage } = helloSlice.actions;
export default helloSlice.reducer;
