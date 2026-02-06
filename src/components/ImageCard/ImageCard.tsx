import './ImageCard.scss';
import bookMark from '../../assets/images/bookmark.png';
import bookMarkActive from '../../assets/images/bookmarkActive.png';
import { image } from '../../pages/Images/Images';
export function ImageCard({
  alt,
  description,
  urls,
  id,
  isLike,
  alt_description,
}: image & { isLike?: boolean }) {
  return (
    <div datatype-id={id} className="imageCard">
      <img src={urls.full} className="imageCard__img"></img>
      <div className="imageCard__info">
        <p className="imageCard__name">
          {alt_description?.length > 25 ? alt_description.slice(0, 25) + '...' : alt_description}
        </p>
        <img src={isLike ? bookMarkActive : bookMark} className="imageCard__icon" alt={alt} />
      </div>
    </div>
  );
}
