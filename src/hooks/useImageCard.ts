import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { RootDispatch } from 'store';
import { setIsChoiseImage } from 'store/slices/coreSlice';
import { image } from 'types/images';
type UseImageCardReturn = {
   targetImage: image | null;
   handleOpenCard: (img: image, index?: number) => void;
   handleCloseCard: () => void;
};
export function useImageCard(): UseImageCardReturn {
   const [targetImage, setTargetImage] = useState<image | null>(null);
   const dispatch = useDispatch<RootDispatch>();
   const handleCloseCard = useCallback(() => {
      setTargetImage(null);
      dispatch(setIsChoiseImage());
   }, [dispatch]);
   const handleOpenCard = useCallback(
      (img: image, index?: number) => {
         setTargetImage({ ...img, index });
         dispatch(setIsChoiseImage());
      },
      [dispatch]
   );
   return { targetImage, handleCloseCard, handleOpenCard };
}
