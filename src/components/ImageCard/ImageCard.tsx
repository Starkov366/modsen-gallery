import './ImageCard.scss';
import React, { useState, memo } from 'react';
import bookMark from 'assets/images/bookmark.png';
import bookMarkActive from 'assets/images/bookmarkActive.png';
import { image } from 'types/images';
import { useDispatch } from 'react-redux';
import { addImage } from 'store/slices/favorites';
import { RootDispatch } from 'store';
type ImageCardProps = {
   image: image;
   isLike?: boolean;
   isDisable: boolean;
   index?: number;
   handleOpenCard: (img: image, index?: number) => void;
};
function Image({ image, isLike, isDisable, index, handleOpenCard }: ImageCardProps) {
   const { alt, alt_description, description, urls, id, created_at } = image;
   const [isActive, setIsActive] = useState(false);
   const dispatch = useDispatch<RootDispatch>();
   const handleAddToFavorite = () => {
      dispatch(addImage(image));
   };
   const handleClick = () => {
      setIsActive(true);

      setTimeout(() => setIsActive(false), 500);
   };
   return (
      <div datatype-id={id} className="imageCard">
         <img
            loading="lazy"
            onClick={() => {
               if (!isDisable) {
                  handleOpenCard({ alt, urls, id, description, alt_description, created_at }, index);
               }
               handleClick();
            }}
            src={urls.small}
            className={`imageCard__img${isActive ? '--active' : ''}`}
         ></img>
         <div className="imageCard__info">
            <p className="imageCard__name">{alt_description?.length > 25 ? alt_description.slice(0, 25) + '...' : alt_description}</p>
            <img onClick={handleAddToFavorite} src={isLike ? bookMarkActive : bookMark} className="imageCard__icon" alt={alt} />
         </div>
      </div>
   );
}
export const ImageCard = memo(Image);
