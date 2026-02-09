import React, { useState, useEffect } from 'react';
import 'components/DisplayImage/DisplayImage.scss';
import bookMark from 'assets/images/bookmark (2).png';
import bookMarkActive from 'assets/images/bookmarkActive.png';
import { image } from 'types/images';
import { addImage, deleteImage } from 'store/slices/favorites';
import { useDispatch } from 'react-redux';
import { RootDispatch } from 'store';
type DisplayImageProps = {
   images: image[];
   index: number;
   handleCloseCard: () => void;
};
export function DisplayImage({ handleCloseCard, images, index }: DisplayImageProps) {
   const [targetImage, setTargetImage] = useState<number>(index || 0);
   const dispatch = useDispatch<RootDispatch>();
   const maxImagesIndex = images.length - 1;
   const goNext = () => {
      if (targetImage < maxImagesIndex) {
         setTargetImage(targetImage + 1);
      } else {
         setTargetImage(0);
      }
   };
   const goBack = () => {
      if (targetImage > 0) {
         setTargetImage(targetImage - 1);
      }
   };
   const currentImage = images[targetImage];

   const handleAddToFavorite = () => {
      dispatch(addImage(currentImage));
   };
   const handleDeleteFromFavorite = (id: string) => {
      dispatch(deleteImage(id));
   };
   useEffect(() => {
      const handleClick = (event: MouseEvent) => {
         const targetWindow = document.querySelector('.displayImage');
         const imageCard = document.querySelector('.images__list');
         const target = event.target as Node;

         if (!targetWindow?.contains(target) && !imageCard?.contains(target)) {
            handleCloseCard();
         }
      };

      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener('click', handleClick);
      };
   }, []);

   return (
      <div className="displayImage">
         <button onClick={goBack} className="displayImage__backBtn">
            <div className="displayImage__backBtn-icon"></div>
         </button>

         <div className="displayImage__imageCard">
            {currentImage && (
               <>
                  <img
                     src={currentImage.urls?.regular || currentImage.urls.small}
                     className="displayImage__img"
                     alt={currentImage.alt_description || currentImage.alt || 'image'}
                  />
                  <div className="displayImage__info">
                     <p className="displayImage__name">
                        {currentImage.alt_description && currentImage.alt_description.length > 45
                           ? currentImage.alt_description.slice(0, 45) + '...'
                           : currentImage.alt_description || currentImage.alt || 'No description'}
                     </p>

                     <img
                        onClick={() => (!currentImage.isLike ? handleAddToFavorite() : handleDeleteFromFavorite(currentImage.id))}
                        src={!currentImage.isLike ? bookMark : bookMarkActive}
                        className="displayImage__icon"
                        alt="bookmark"
                     />
                  </div>
               </>
            )}
         </div>

         <button onClick={goNext} className="displayImage__nextBtn">
            <div className="displayImage__nextBtn-icon"></div>
         </button>

         <button onClick={handleCloseCard} className="displayImage__closeBtn"></button>
      </div>
   );
}
