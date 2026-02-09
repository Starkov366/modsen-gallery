import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { image } from 'types/images';
type favoriteImagesState = {
   images: image[];
};
const initialState: favoriteImagesState = {
   images: JSON.parse(localStorage.getItem('favorite') || '[]'),
};

export const favoriteImages = createSlice({
   name: 'favoriteImages',
   initialState,
   reducers: {
      addImage(state, action: PayloadAction<image>) {
         const newImage = { ...action.payload, isLike: true };
         if (!state.images.some((image) => image.id === newImage.id)) {
            state.images.push(newImage);
            localStorage.setItem('favorite', JSON.stringify(state.images));
         }
      },
      deleteImage(state, action: PayloadAction<string>) {
         state.images = state.images.filter((image) => image.id !== action.payload);
         localStorage.setItem('favorite', JSON.stringify(state.images));
      },
   },
});
export const { addImage, deleteImage } = favoriteImages.actions;
export default favoriteImages.reducer;
