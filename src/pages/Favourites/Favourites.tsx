import './Favourites.scss';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { deleteImage } from 'store/slices/favorites';
import { DisplayImage } from 'components/DisplayImage/DisplayImage';
import { useDispatch } from 'react-redux';
import { RootDispatch } from 'store/index';
import bookMarkActive from 'assets/images/bookmarkActive.png';
import { useImageCard } from 'hooks/useImageCard';
export function Favourites() {
   const images = useSelector((state: RootState) => state.favorite.images);
   const dispatch = useDispatch<RootDispatch>();
   const { targetImage, handleCloseCard, handleOpenCard } = useImageCard();
   const handleDeleteFromFavorite = useCallback(
      (id: string) => {
         dispatch(deleteImage(id));
      },
      [dispatch]
   );

   return (
      <div className="favourites">
         {images.length > 0 && (
            <>
               <h1 className="favourites__title">Saved by you</h1>
               <h1 className="favourites__info">Your favorites list</h1>
            </>
         )}
         <div className="images__list">
            {images.length > 0 ? (
               images.map((image, index) => {
                  return (
                     <div key={image.id} datatype-id={image.id} className="imageCard">
                        <img
                           onClick={() => {
                              !Boolean(targetImage) && handleOpenCard(image, index);
                           }}
                           src={image.urls.small}
                           className="imageCard__img"
                        ></img>
                        <div className="imageCard__info">
                           <p className="imageCard__name">
                              {image.alt_description?.length > 25 ? image.alt_description.slice(0, 25) + '...' : image.alt_description}
                           </p>
                           <img
                              onClick={() => handleDeleteFromFavorite(image.id)}
                              src={bookMarkActive}
                              className="imageCard__icon"
                              alt={image.alt}
                           />
                        </div>
                     </div>
                  );
               })
            ) : (
               <p className="favourites__empty">
                  Your <span className="favourites__empty-word">Favorites</span>List Is Empty
               </p>
            )}
         </div>
         {targetImage && <DisplayImage images={images} handleCloseCard={handleCloseCard} index={targetImage.index ?? 0}></DisplayImage>}
      </div>
   );
}
