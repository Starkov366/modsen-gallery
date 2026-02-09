import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import 'pages/Images/Images.scss';
import { InfoSection } from 'components/InfoSection/InfoSection';
import { unsplashApi } from 'api/unplash';
import { ImageCard } from 'components/ImageCard/ImageCard';
import { FilterComponent } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';
import { FILTER_OPTIONS } from 'enums';
import { DisplayImage } from 'components/DisplayImage/DisplayImage';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { image } from 'types/images';
import { useImageCard } from 'hooks/useImageCard';
export function Images() {
   const [images, setImages] = useState<image[]>([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [searchParams] = useSearchParams();
   const [isLoading, setIsLoading] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const { targetImage, handleCloseCard, handleOpenCard } = useImageCard();
   const search = searchParams.get('category') || '';
   const favoriteImages = useSelector((state: RootState) => state.favorite.images);
   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
   };
   const loadImages = useCallback(async () => {
      setIsLoading(true);
      try {
         const { result, totalPages } =
            searchValue.length > 0
               ? await unsplashApi.getPhotosBySearch(searchValue, page)
               : search
                 ? await unsplashApi.getPhotosByTopic(search, page)
                 : await unsplashApi.getRandomPhotos(page);

         setImages(
            result.map((item: image) => ({
               alt: item.alt,
               urls: item.urls,
               id: item.id,
               description: item.description,
               alt_description: item.alt_description,
               created_at: item.created_at,
            }))
         );

         setTotalPages(totalPages);
      } catch (e) {
         console.error('Unsplash error:', e);
      } finally {
         setIsLoading(false);
      }
   }, [page, search, searchValue]);
   const handleFilter = useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
         const targetOption = e.target.value;
         if (!targetOption) return;

         if (targetOption === FILTER_OPTIONS.LATEST) {
            setImages((prev) => {
               const newImages = [...prev].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
               return newImages;
            });
         } else if (targetOption === FILTER_OPTIONS.RELEVANT) {
            loadImages();
         }
      },
      [loadImages]
   );

   useEffect(() => {
      loadImages();
   }, [search, page]);
   useEffect(() => {
      const time = setTimeout(() => {
         loadImages();
      }, 1000);
      return () => clearTimeout(time);
   }, [searchValue]);

   const bookmarkedImages: image[] = useMemo(
      () =>
         images.map((image) => {
            if (favoriteImages.some((item) => image.id === item.id)) {
               return { ...image, isLike: true };
            } else {
               return { ...image };
            }
         }),
      [favoriteImages, images]
   );
   return (
      <div className="images">
         <InfoSection searchValue={searchValue} handleSearch={handleSearch} />

         {bookmarkedImages.length === 0 && !isLoading ? (
            <p className="images__notFound">
               The search didn't yield any results, please try <span className="images__notFound-word">Again</span>.
            </p>
         ) : (
            <>
               <FilterComponent isTargetImage={Boolean(targetImage)} handleFilter={handleFilter} />
               <Loader isLoading={isLoading} />
               <div style={{ filter: targetImage ? 'blur(5px)' : 'inherit' }} className="images__list">
                  {bookmarkedImages.map((item, index) => (
                     <ImageCard
                        isDisable={Boolean(targetImage)}
                        handleOpenCard={handleOpenCard}
                        index={index}
                        key={item.id}
                        image={item}
                        isLike={item.isLike || false}
                     />
                  ))}
               </div>
               <Pagination totalPages={totalPages} setPage={setPage} page={page} />
            </>
         )}
         {targetImage && (
            <DisplayImage images={bookmarkedImages} handleCloseCard={handleCloseCard} index={targetImage.index || 0}></DisplayImage>
         )}
      </div>
   );
}
